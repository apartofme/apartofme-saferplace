import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import {
  getAllQuestLinesQuery,
  getAllQuestsQuery,
  getAllQuestsByQuestLineIdQuery,
  getAllTranslationsQuery,
} from './queries';
import CONFIG from '../../config/env';
import { ITranslations } from '../../utils/types';
import { IQuestDatoCms } from '../../models/IQuest';
import { translationsToDictionary } from '../../utils';
import { IQuestLineDatoCms } from '../../models/IQuestLine';
import { APOLLO_HEADERS } from '../../constants/apolloHeaders';
import { MIN_QRAPHQL_SKIP, PAGINATION_STEP } from '../../constants/datocms';

class DatoCMSApi {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(baseURL = CONFIG.API_URL, token = CONFIG.API_KEY) {
    this.client = new ApolloClient({
      uri: baseURL,
      cache: new InMemoryCache(),
      headers: {
        ...APOLLO_HEADERS,
        authorization: `Bearer ${token}`,
      },
    });
  }

  getAllTranslations = async (locale: string) => {
    let result: ITranslations[] = [];
    let offset = MIN_QRAPHQL_SKIP;

    while (true) {
      const response = await this.client.query({
        query: getAllTranslationsQuery(locale, PAGINATION_STEP, offset),
      });

      if (response.data.allTranslations.length) {
        result = result.concat(response.data.allTranslations);
      } else {
        const translations = translationsToDictionary(result);
        return translations;
      }

      offset += PAGINATION_STEP;
    }
  };

  getAllQuestLines = async (locale: string) => {
    let result: IQuestLineDatoCms[] = [];
    let offset = MIN_QRAPHQL_SKIP;

    while (true) {
      const response = await this.client.query({
        query: getAllQuestLinesQuery(locale, PAGINATION_STEP, offset),
      });

      if (response.data.allQuestLines.length) {
        result = result.concat(response.data.allQuestLines);
      } else {
        return result;
      }

      offset += PAGINATION_STEP;
    }
  };

  getAllQuestsByQuestLineId = async (locale: string, questLineId: string) => {
    let result: IQuestLineDatoCms[] = [];
    let offset = MIN_QRAPHQL_SKIP;

    while (true) {
      const response = await this.client.query({
        query: getAllQuestsByQuestLineIdQuery(
          locale,
          questLineId,
          PAGINATION_STEP,
          offset,
        ),
      });

      if (response.data.allQuestLines.length) {
        result = result.concat(response.data.allQuestLines);
      } else {
        return result;
      }

      offset += PAGINATION_STEP;
    }
  };

  getAllQuests = async (locale: string) => {
    let result: IQuestDatoCms[] = [];
    let offset = MIN_QRAPHQL_SKIP;

    while (true) {
      const response = await this.client.query({
        query: getAllQuestsQuery(locale, PAGINATION_STEP, offset),
      });

      if (response.data.allQuestScreens.length) {
        result = result.concat(response.data.allQuestScreens);
      } else {
        return result;
      }

      offset += PAGINATION_STEP;
    }
  };
}
export const datocmsApiInstance = new DatoCMSApi();
