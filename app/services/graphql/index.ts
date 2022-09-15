import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import CONFIG from '../../config/env';
import { translationsToDictionary } from '../../utils';
import {
  getAllQuestLinesQuery,
  getAllQuests,
  getAllQuestsByQuestLineId,
  getAllTranslationsQuery,
} from './graph.types';
import { ITranslations } from '../../utils/types';

class Api {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(baseURL = CONFIG.API_URL, token = CONFIG.API_KEY) {
    this.client = new ApolloClient({
      uri: baseURL,
      cache: new InMemoryCache(),
      headers: {
        'X-Api-Version': '3',
        Accept: 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  }

  public async getAllTranslations(locale: string) {
    let result: ITranslations[] = [];
    let offset = 0;

    while (true) {
      const response = await this.client.query({
        query: getAllTranslationsQuery(locale, 100, offset),
      });

      if (response.data.allTranslations.length) {
        result = result.concat(response.data.allTranslations);
      } else {
        const translations = translationsToDictionary(result);
        return translations;
      }

      offset += 100;
    }
  }

  public async getAllQuestLines(locale: string) {
    const result = await this.client.query({
      query: getAllQuestLinesQuery(locale),
    });

    if (!result.data.allQuestLines) {
      // TODO: throw exception
    }

    return result.data.allQuestLines;
  }

  public async getAllQuestsByQuestLineId(locale: string, questLineId: string) {
    const result = await this.client.query({
      query: getAllQuestsByQuestLineId(locale, questLineId),
    });

    if (!result.data.allQuestScreens) {
      // TODO: throw exception
    }

    return result.data.allQuests;
  }

  public async getAllQuests(locale: string) {
    const result = await this.client.query({
      query: getAllQuests(locale),
    });

    if (!result.data.allQuestScreens) {
      // TODO: throw exception
    }

    return result.data.allQuestScreens;
  }
}

export default Api;
