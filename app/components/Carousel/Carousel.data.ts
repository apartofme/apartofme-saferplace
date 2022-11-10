import { AvatarsNameType } from '../../utils/types';
import {
  IAvatarItem,
  ICharmItem,
  IEmotionItem,
  ITroublesomeItem,
} from './Carousel.types';

export enum CarouselType {
  Avatar = 'avatar',
  Card = 'card',
  IconDescription = 'iconDescription',
  IconTitleDescription = 'iconTitleDescription',
}

export const CAROUSEL_MODE_CONFIG_AVATAR = {
  parallaxScrollingScale: 1,
  parallaxScrollingOffset: 190,
  parallaxAdjacentItemScale: 0.8,
};

export const CAROUSEL_MODE_CONFIG_DEFAULT = {
  parallaxScrollingScale: 1,
  parallaxScrollingOffset: 100,
};

export const OPACITY_RANGE = [0.5, 1, 0.5];

export const AVATAR_CAROUSEL: ReadonlyArray<IAvatarItem> = [
  {
    id: '1',
    iconKey: AvatarsNameType.Rabbit,
  },
  {
    id: '2',
    iconKey: AvatarsNameType.Owl,
  },
  {
    id: '3',
    iconKey: AvatarsNameType.Moth,
  },
  {
    id: '4',
    iconKey: AvatarsNameType.Fox,
  },
  {
    id: '5',
    iconKey: AvatarsNameType.Bear,
  },
  {
    id: '6',
    iconKey: AvatarsNameType.Monkey,
  },
];

export const EMOTION_CAROUSEL: ReadonlyArray<IEmotionItem> = [
  {
    id: '1',
    titleKey: 'screens.emotion_carousel.first',
    iconKey: 'IAmSorryIcon',
  },
  {
    id: '2',
    titleKey: 'screens.emotion_carousel.second',
    iconKey: 'HowCanIHelpIcon',
  },
  {
    id: '3',
    titleKey: 'screens.emotion_carousel.third',
    iconKey: 'ItsOkIcon',
  },
  {
    id: '4',
    titleKey: 'screens.emotion_carousel.fourth',
    iconKey: 'YouAreSafeIcon',
  },
  {
    id: '5',
    titleKey: 'screens.emotion_carousel.fifth',
    iconKey: 'IFeelThatWayIcon',
  },
  {
    id: '6',
    titleKey: 'screens.emotion_carousel.sixth',
    iconKey: 'ImHereForYouIcon',
  },
];

export const TROUBLESOME_SPIRIT_QUESTIONS: ReadonlyArray<ITroublesomeItem> = [
  {
    id: '1',
    iconKey: 'DistressedFoxIcon',
    titleKey: 'screens.troublesome_spirit_questions_carousel.first',
  },
  {
    id: '2',
    iconKey: 'PuzzledMothIcon',
    titleKey: 'screens.troublesome_spirit_questions_carousel.second',
  },
  {
    id: '3',
    iconKey: 'LoveRabbitIcon',
    titleKey: 'screens.troublesome_spirit_questions_carousel.third',
  },
];

export const FAVOURITE_CHARM: ReadonlyArray<ICharmItem> = [
  {
    id: '1',
    iconKey: 'CharmOfGroundingIcon',
    titleKey: 'screens.favourite_charm_carousel.first',
  },
  {
    id: '2',
    iconKey: 'CharmOfHealingHandIcon',
    titleKey: 'screens.favourite_charm_carousel.second',
  },
  {
    id: '3',
    iconKey: 'DancingCharmIcon',
    titleKey: 'screens.favourite_charm_carousel.third',
  },
  {
    id: '4',
    iconKey: 'CharmOfSlowWindIcon',
    titleKey: 'screens.favourite_charm_carousel.fourth',
  },
  {
    id: '5',
    iconKey: 'CharmOfDiscoveryIcon',
    titleKey: 'screens.favourite_charm_carousel.fifth',
  },
  {
    id: '6',
    iconKey: 'CharmOfSanctuaryIcon',
    titleKey: 'screens.favourite_charm_carousel.sixth',
  },
  {
    id: '7',
    iconKey: 'CharmOfKindnessIcon',
    titleKey: 'screens.favourite_charm_carousel.seventh',
  },
  {
    id: '8',
    iconKey: 'CharmOfAcceptanceIcon',
    titleKey: 'screens.favourite_charm_carousel.eighth',
  },
  {
    id: '9',
    iconKey: 'CharmOfMirrorIcon',
    titleKey: 'screens.favourite_charm_carousel.ninth',
  },
  {
    id: '10',
    iconKey: 'CharmOfTruthIcon',
    titleKey: 'screens.favourite_charm_carousel.tenth',
  },
  {
    id: '11',
    iconKey: 'CharmOfOpenHandIcon',
    titleKey: 'screens.favourite_charm_carousel.eleventh',
  },
  {
    id: '12',
    iconKey: 'CharmOfBefriendingIcon',
    titleKey: 'screens.favourite_charm_carousel.twelfth',
  },
];
