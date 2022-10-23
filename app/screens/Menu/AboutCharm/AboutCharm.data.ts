import { SVG_CHARM_ILLUSTRATIONS } from '../../../assets/svg';
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

// TODO: change to correct images
export const ABOUT_CHARM_ITEMS: ReadonlyArray<AboutCharmsMenuItem> = [
  {
    title: 'screens.menu.about_charm.first.title',
    subtitle: 'screens.menu.about_charm.first.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.GroundingIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfRooting,
  },
  {
    title: 'screens.menu.about_charm.second.title',
    subtitle: 'screens.menu.about_charm.second.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.HealingIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfHealing,
  },
  {
    title: 'screens.menu.about_charm.third.title',
    subtitle: 'screens.menu.about_charm.third.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.DancingIllustrationIcon,
    type: AboutCharmsMenuType.TheDancingCharm,
  },
  {
    title: 'screens.menu.about_charm.fourth.title',
    subtitle: 'screens.menu.about_charm.fourth.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.SlowWindIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfTheSlowWind,
  },
  {
    title: 'screens.menu.about_charm.fifth.title',
    subtitle: 'screens.menu.about_charm.fifth.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.DiscoveryIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfDiscovery,
  },
  {
    title: 'screens.menu.about_charm.sixth.title',
    subtitle: 'screens.menu.about_charm.sixth.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.SanctuaryIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfSanctuary,
  },
  {
    title: 'screens.menu.about_charm.seventh.title',
    subtitle: 'screens.menu.about_charm.seventh.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.KindnessIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfKindness,
  },
  {
    title: 'screens.menu.about_charm.eighth.title',
    subtitle: 'screens.menu.about_charm.eighth.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.MirrorIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfTheMirror,
  },
  {
    title: 'screens.menu.about_charm.ninth.title',
    subtitle: 'screens.menu.about_charm.ninth.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.TruthIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfTruth,
  },
  {
    title: 'screens.menu.about_charm.tenth.title',
    subtitle: 'screens.menu.about_charm.tenth.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.OpenHandIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfTheOpenHand,
  },
  {
    title: 'screens.menu.about_charm.eleventh.title',
    subtitle: 'screens.menu.about_charm.eleventh.description',
    IconSvgComponent: SVG_CHARM_ILLUSTRATIONS.AcceptanceIllustrationIcon,
    type: AboutCharmsMenuType.TheCharmOfUnderstanding,
  },
];
