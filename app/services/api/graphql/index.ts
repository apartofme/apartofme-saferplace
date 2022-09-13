import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import CONFIG from '../../../config/env';
import { translationsToKeyValue } from '../../../utils';
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

  getAllTranslations = () =>
    this.client
      .query({
        query: getAllTranslationsQuery('en'),
      })
      .then(result => translationsToKeyValue(result));
}

export const apiInstance = new Api();

export default Api;
