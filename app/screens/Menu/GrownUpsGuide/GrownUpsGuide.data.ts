export enum GrownUpsGuideItemType {
  AboutCharms = 'aboutCharms',
  Questions = 'questions',
  Feedback = 'feedback',
}

export interface IGrownUpsGuideItem {
  title: string;
  type: GrownUpsGuideItemType;
}

export const GROWN_UPS_GUIDE_ITEMS: ReadonlyArray<IGrownUpsGuideItem> = [
  {
    title: 'screens.menu.grown_ups_guide.first_item',
    type: GrownUpsGuideItemType.AboutCharms,
  },
  {
    title: 'screens.menu.grown_ups_guide.second_item',
    type: GrownUpsGuideItemType.Questions,
  },
  {
    title: 'screens.menu.grown_ups_guide.third_item',
    type: GrownUpsGuideItemType.Feedback,
  },
];
