import { IMenuItem } from '../FrequentlyAskedQuestions';

export interface IFurtherSupportMenuItem {
  titleKey: string;
  data: IMenuItem[];
}

export const FURTHER_SUPPORT_MENU_ITEMS: ReadonlyArray<IFurtherSupportMenuItem> =
  [
    {
      titleKey: 'screens.menu.further_support.first_section.title',
      data: [
        {
          titleKey: 'screens.menu.further_support.first_section.first.title',
          subtitleKey:
            'screens.menu.further_support.first_section.first.description',
        },
        {
          titleKey: 'screens.menu.further_support.first_section.second.title',
          subtitleKey:
            'screens.menu.further_support.first_section.second.description',
        },
        {
          titleKey: 'screens.menu.further_support.first_section.third.title',
          subtitleKey:
            'screens.menu.further_support.first_section.third.description',
        },
        {
          titleKey: 'screens.menu.further_support.first_section.fourth.title',
          subtitleKey:
            'screens.menu.further_support.first_section.fourth.description',
        },
      ],
    },
    {
      titleKey: 'screens.menu.further_support.second_section.title',
      data: [
        {
          titleKey: 'screens.menu.further_support.second_section.first.title',
          subtitleKey:
            'screens.menu.further_support.second_section.first.description',
        },
        {
          titleKey: 'screens.menu.further_support.second_section.second.title',
          subtitleKey:
            'screens.menu.further_support.second_section.second.description',
        },
        {
          titleKey: 'screens.menu.further_support.second_section.third.title',
          subtitleKey:
            'screens.menu.further_support.second_section.third.description',
        },
        {
          titleKey: 'screens.menu.further_support.second_section.fourth.title',
          subtitleKey:
            'screens.menu.further_support.second_section.fourth.description',
        },
        {
          titleKey: 'screens.menu.further_support.second_section.fifth.title',
          subtitleKey:
            'screens.menu.further_support.second_section.fifth.description',
        },
        {
          titleKey: 'screens.menu.further_support.second_section.sixth.title',
          subtitleKey:
            'screens.menu.further_support.second_section.sixth.description',
        },
        {
          titleKey: 'screens.menu.further_support.second_section.seventh.title',
          subtitleKey:
            'screens.menu.further_support.second_section.seventh.description',
        },
      ],
    },
  ];
