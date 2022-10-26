import { AvatarsNameType } from '../../utils/types';
import { IAvatarCarouselItem, ICarouselItem } from './Carousel.types';

export enum CarouselType {
  Avatar = 'avatar',
  Charm = 'charm',
  Emotion = 'emotion',
  SubtitleImage = 'SubtitleImage',
  ImageTitleSubtitle = 'imageTitleSubtitle',
  ImageSubtitle = 'imageSubtitle',
}

export const CAROUSEL_MODE_CONFIG_AVATAR = {
  parallaxScrollingScale: 1,
  parallaxScrollingOffset: 190,
  parallaxAdjacentItemScale: 0.8,
};

export const CAROUSEL_MODE_CONFIG_CHARM = {
  parallaxScrollingScale: 1,
  parallaxScrollingOffset: 100,
};

export const AVATAR_CAROUSEL: ReadonlyArray<IAvatarCarouselItem> = [
  {
    id: '1',
    image: AvatarsNameType.Rabbit,
  },
  {
    id: '2',
    image: AvatarsNameType.Owl,
  },
  {
    id: '3',
    image: AvatarsNameType.Moth,
  },
  {
    id: '4',
    image: AvatarsNameType.Fox,
  },
  {
    id: '5',
    image: AvatarsNameType.Bear,
  },
  {
    id: '6',
    image: AvatarsNameType.Monkey,
  },
];

export const EMOTION_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    titleKey: 'screens.emotion_carousel.first',
    image: 'IAmSorryIcon',
  },
  {
    id: '2',
    titleKey: 'screens.emotion_carousel.second',
    image: 'HowCanIHelpIcon',
  },
  {
    id: '3',
    titleKey: 'screens.emotion_carousel.third',
    image: 'ItsOkIcon',
  },
  {
    id: '4',
    titleKey: 'screens.emotion_carousel.fourth',
    image: 'YouAreSafeIcon',
  },
  {
    id: '5',
    titleKey: 'screens.emotion_carousel.fifth',
    image: 'IFeelThatWayIcon',
  },
  {
    id: '6',
    titleKey: 'screens.emotion_carousel.sixth',
    image: 'ImHereForYouIcon',
  },
];
