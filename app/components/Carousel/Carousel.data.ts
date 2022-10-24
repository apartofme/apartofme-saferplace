import { AvatarsNameType } from '../../utils/types';
import { IAvatarCarouselItem } from './Carousel.types';

export enum CarouselType {
  Avatar = 'avatar',
  Charm = 'charm',
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
  parallaxScrollingOffset: 110,
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
