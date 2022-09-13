import gql from 'graphql-tag';

export const getAllTranslationsQuery = (locale: string) => gql`
  query getAllTranslations {
    allTranslations(locale: ${locale}) {
      id
      label
      text
    }
  }
`;
