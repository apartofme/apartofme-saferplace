export enum AboutCharmsMenuType {
  TheCharmOfRooting = 'theCharmOfRooting',
  TheCharmOfHealing = 'theCharmOfHealing',
  TheDancingCharm = 'theDancingCharm',
  TheCharmOfTheSlowWind = 'theCharmOfTheSlowWind',
  TheCharmOfDiscovery = 'theCharmOfDiscovery',
  TheCharmOfSanctuary = 'theCharmOfSanctuary',
  TheCharmOfKindness = 'theCharmOfKindness',
  TheCharmOfTheMirror = 'theCharmOfTheMirror',
  TheCharmOfTruth = 'theCharmOfTruth',
  TheCharmOfTheOpenHand = 'theCharmOfTheOpenHand',
  TheCharmOfUnderstanding = 'theCharmOfUnderstanding',
}

export interface AboutCharmsMenuItem {
  title: string;
  titleAddition?: string;
  subtitle: string;
  type: AboutCharmsMenuType;
}

export const ABOUT_CHARMS_SCREEN_DATA: AboutCharmsMenuItem[] = [
  {
    title: 'The Charm of Rooting',
    subtitle: 'some',
    type: AboutCharmsMenuType.TheCharmOfRooting,
  },
  {
    title: 'The Charm of Healing',
    subtitle: '',
    type: AboutCharmsMenuType.TheCharmOfHealing,
  },
  {
    title: 'The Dancing Charm',
    subtitle: '',
    type: AboutCharmsMenuType.TheDancingCharm,
  },
  {
    title: 'The Charm of the Slow Wind',
    subtitle: '',
    type: AboutCharmsMenuType.TheCharmOfTheSlowWind,
  },
];
