import gql from 'graphql-tag';

import { MIN_QRAPHQL_SKIP, PAGINATION_STEP } from '../../constants/datocms';

export const getAllTranslationsQuery = (
  locale: string,
  first = PAGINATION_STEP,
  skip = MIN_QRAPHQL_SKIP,
) => gql`
  query getAllTranslations {
    allTranslations(locale: ${locale}, first: ${first}, skip: ${skip}) {
      id
      label
      text
      isfinaltranslation
    }
  }
`;

export const getAllQuestLinesQuery = (
  locale: string,
  first = PAGINATION_STEP,
  skip = MIN_QRAPHQL_SKIP,
) => gql`
  query getAllQuestLines {
    allQuestLines(locale: ${locale}, first: ${first}, skip: ${skip}, orderBy: sort_ASC) {
      id
      sort
      title
    }
  }
`;

export const getAllQuestsByQuestLineIdQuery = (
  locale: string,
  questLineId: string,
  first = PAGINATION_STEP,
  skip = MIN_QRAPHQL_SKIP,
) => gql`
query getQuestLineQuests {
  allQuestScreens(locale: ${locale}, first: ${first}, skip: ${skip}, 
    orderBy: sort_ASC, filter: {questlineid: {eq: "${questLineId}"}}) {
    id
    title
    description
    images {
      id
      path
    }
    backgroundimage {
      id
      path
    }
    buttontitle 
    tellmoretitle
    tellmoredescription
    tellmorebackground {
      id
      path
    }
    questlineid {
      id
      title
    }
    typeid {
      slug
    }
    sort
    titlehasnickname
    crossheader
    duration
  }
}
`;

export const getAllQuestsQuery = (
  locale: string,
  first = PAGINATION_STEP,
  skip = MIN_QRAPHQL_SKIP,
) => gql`
  query getAllQuest {
    allQuestScreens(locale: ${locale}, first: ${first}, skip: ${skip}, orderBy: sort_ASC) {
      id
      title
      description
      images {
        id
        path
      }
      backgroundimage {
        id
        path
      }
      buttontitle
      tellmoretitle
      tellmoredescription
      tellmorebackground {
        id
        path
      }
      questlineid {
        id
        title
      }
      typeid {
        slug
      }
      sort
      titlehasnickname
      crossheader
      duration
    }
  }
`;
