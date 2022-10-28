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
    iconKey: 'GroundingIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfRooting,
  },
  {
    title: 'screens.menu.about_charm.second.title',
    subtitle: 'screens.menu.about_charm.second.description',
    iconKey: 'HealingIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfHealing,
  },
  {
    title: 'screens.menu.about_charm.third.title',
    subtitle: 'screens.menu.about_charm.third.description',
    iconKey: 'DancingIllustrationIcon',
    type: AboutCharmsMenuType.TheDancingCharm,
  },
  {
    title: 'screens.menu.about_charm.fourth.title',
    subtitle: 'screens.menu.about_charm.fourth.description',
    iconKey: 'SlowWindIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfTheSlowWind,
  },
  {
    title: 'screens.menu.about_charm.fifth.title',
    subtitle: 'screens.menu.about_charm.fifth.description',
    iconKey: 'DiscoveryIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfDiscovery,
  },
  {
    title: 'screens.menu.about_charm.sixth.title',
    subtitle: 'screens.menu.about_charm.sixth.description',
    iconKey: 'SanctuaryIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfSanctuary,
  },
  {
    title: 'screens.menu.about_charm.seventh.title',
    subtitle: 'screens.menu.about_charm.seventh.description',
    iconKey: 'KindnessIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfKindness,
  },
  {
    title: 'screens.menu.about_charm.eighth.title',
    subtitle: 'screens.menu.about_charm.eighth.description',
    iconKey: 'MirrorIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfTheMirror,
  },
  {
    title: 'screens.menu.about_charm.ninth.title',
    subtitle: 'screens.menu.about_charm.ninth.description',
    iconKey: 'TruthIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfTruth,
  },
  {
    title: 'screens.menu.about_charm.tenth.title',
    subtitle: 'screens.menu.about_charm.tenth.description',
    iconKey: 'OpenHandIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfTheOpenHand,
  },
  {
    title: 'screens.menu.about_charm.eleventh.title',
    subtitle: 'screens.menu.about_charm.eleventh.description',
    iconKey: 'AcceptanceIllustrationIcon',
    type: AboutCharmsMenuType.TheCharmOfUnderstanding,
  },
];
