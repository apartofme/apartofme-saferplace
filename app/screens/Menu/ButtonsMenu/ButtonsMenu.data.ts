export interface IButtonsMenuItem {
  title: string;
  type: string;
}

export const GROWN_UPS_GUIDE_ITEMS: ReadonlyArray<IButtonsMenuItem> = [
  {
    title: 'screens.menu.grown_ups_guide.first_item',
    type: 'AboutCharms',
  },
  {
    title: 'screens.menu.grown_ups_guide.second_item',
    type: 'Questions',
  },
  {
    title: 'screens.menu.grown_ups_guide.third_item',
    type: 'Feedback',
  },
];
