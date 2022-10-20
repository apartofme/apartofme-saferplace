import { AvatarsNameType } from '../../utils/types';

export interface IAvatarCarouselItem {
  id: string;
  image: AvatarsNameType;
}

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
