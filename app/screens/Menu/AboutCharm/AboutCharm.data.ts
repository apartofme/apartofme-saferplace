import { AboutCharmsMenuItem } from './AboutCharm.types';

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

export const ABOUT_CHARM_ITEMS: ReadonlyArray<AboutCharmsMenuItem> = [
  {
    title: 'screens.menu.about_charm.first.title',
    subtitle: 'screens.menu.about_charm.first.description',
    type: AboutCharmsMenuType.TheCharmOfRooting,
  },
  {
    title: 'screens.menu.about_charm.second.title',
    subtitle: 'screens.menu.about_charm.second.description',
    type: AboutCharmsMenuType.TheCharmOfHealing,
  },
  {
    title: 'screens.menu.about_charm.third.title',
    subtitle: 'screens.menu.about_charm.third.description',
    type: AboutCharmsMenuType.TheDancingCharm,
  },
  {
    title: 'screens.menu.about_charm.fourth.title',
    subtitle: 'screens.menu.about_charm.fourth.description',
    type: AboutCharmsMenuType.TheCharmOfTheSlowWind,
  },
  {
    title: 'screens.menu.about_charm.fifth.title',
    subtitle: 'screens.menu.about_charm.fifth.description',
    type: AboutCharmsMenuType.TheCharmOfDiscovery,
  },
  {
    title: 'screens.menu.about_charm.fifth.title',
    subtitle: 'screens.menu.about_charm.sixth.description',
    type: AboutCharmsMenuType.TheCharmOfSanctuary,
  },
  {
    title: 'screens.menu.about_charm.seventh.title',
    subtitle: 'screens.menu.about_charm.seventh.description',
    type: AboutCharmsMenuType.TheCharmOfKindness,
  },
  {
    title: 'screens.menu.about_charm.eighth.title',
    subtitle: 'screens.menu.about_charm.eighth.description',
    type: AboutCharmsMenuType.TheCharmOfTheMirror,
  },
  {
    title: 'screens.menu.about_charm.ninth.title',
    subtitle: 'screens.menu.about_charm.ninth.description',
    type: AboutCharmsMenuType.TheCharmOfTruth,
  },
  {
    title: 'screens.menu.about_charm.tenth.title',
    subtitle: 'screens.menu.about_charm.tenth.description',
    type: AboutCharmsMenuType.TheCharmOfTheOpenHand,
  },
  {
    title: 'screens.menu.about_charm.eleventh.title',
    subtitle: 'screens.menu.about_charm.eleventh.description',
    type: AboutCharmsMenuType.TheCharmOfUnderstanding,
  },
];
