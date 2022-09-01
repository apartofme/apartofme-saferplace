export enum MainMenuItemType {
  ParentsGuide = 'ParentsGuide',
  Logout = 'Logout',
}

export interface IMainMenuItem {
  title: string;
  type: MainMenuItemType;
}

export const MAIN_MENU_ITEMS: ReadonlyArray<IMainMenuItem> = [
  {
    title: 'screens.menu.main_menu.parents_guide',
    type: MainMenuItemType.ParentsGuide,
  },
  {
    title: 'screens.menu.main_menu.logout',
    type: MainMenuItemType.Logout,
  },
];
