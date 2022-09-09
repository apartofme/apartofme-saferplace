import I18n from 'i18next';
import _ from 'lodash';

interface INonLocalisedMenuItem {
  titleKey: string;
}

interface INonLocalisedSectionData {
  titleKey: string;
  data: INonLocalisedMenuItem[];
}

const NON_LOCALISED_SECTION_MENU_ITEMS: ReadonlyArray<INonLocalisedSectionData> =
  [
    {
      titleKey:
        'screens.menu.frequently_asked_questions_screen.questions.section_first.title',
      data: [
        {
          titleKey:
            'screens.menu.frequently_asked_questions_screen.questions.section_first.question_first',
        },
        {
          titleKey:
            'screens.menu.frequently_asked_questions_screen.questions.section_first.question_second',
        },
        {
          titleKey:
            'screens.menu.frequently_asked_questions_screen.questions.section_first.question_third',
        },
      ],
    },
    {
      titleKey:
        'screens.menu.frequently_asked_questions_screen.questions.section_second.title',
      data: [
        {
          titleKey:
            'screens.menu.frequently_asked_questions_screen.questions.section_second.question_first',
        },
        {
          titleKey:
            'screens.menu.frequently_asked_questions_screen.questions.section_second.question_second',
        },
        {
          titleKey:
            'screens.menu.frequently_asked_questions_screen.questions.section_second.question_third',
        },
      ],
    },
  ];

export interface IMenuItem {
  title: string;
}

export interface ISectionData {
  title: string;
  data: IMenuItem[];
}

export const getLocalisedSectionMenuItems: () => ReadonlyArray<ISectionData> =
  () => {
    const localisedSectionMenuItems: ISectionData[] = [];

    _.forEach(NON_LOCALISED_SECTION_MENU_ITEMS, nonLocalisedSectionData => {
      const localisedSectionData: ISectionData = {
        title: I18n.t(nonLocalisedSectionData.titleKey),
        data: _.map(nonLocalisedSectionData.data, item => ({
          title: I18n.t(item.titleKey),
        })),
      };

      localisedSectionMenuItems.push(localisedSectionData);
    });

    return localisedSectionMenuItems;
  };
