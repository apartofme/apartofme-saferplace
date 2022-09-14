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
    const result = await this.client.query({
      query: getAllTranslationsQuery(locale),
    });

    return translationsToDictionary(result);
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
