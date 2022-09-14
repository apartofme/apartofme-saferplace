import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import CONFIG from '../../config/env';
import { translationsToDictionary } from '../../utils';
import { getAllTranslationsQuery } from './graph.types';

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
}

export default Api;
