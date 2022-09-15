import gql from 'graphql-tag';

export const getAllTranslationsQuery = (
  locale: string,
  first = 100,
  skip = 0,
) => gql`
  query getAllTranslations {
    allTranslations(locale: ${locale}, first: ${first}, skip: ${skip}) {
      id
      label
      text
    }
  }
`;

export const getAllQuestLinesQuery = (locale: string) => gql`
  query getAllQuestLines {
    allQuestLines(locale: ${locale}, orderBy: sort_ASC) {
      id
      sort
      title
    }
  }
`;

export const getAllQuestsByQuestLineId = (
  locale: string,
  questLineId: string,
) => gql`
query getQuestLineQuests {
  allQuestScreens(locale: ${locale}, orderBy: sort_ASC, filter: {questlineid: {eq: "${questLineId}"}}) {
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

export const getAllQuests = (locale: string) => gql`
  query getAllQuest {
    allQuestScreens(locale: en, orderBy: sort_ASC) {
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
