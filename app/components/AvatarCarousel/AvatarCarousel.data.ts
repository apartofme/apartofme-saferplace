import { AvatarsNameType } from '../../utils/types';

export interface IAvatarCarouselItem {
  id: string;
  image: AvatarsNameType;
}

// TODO: change image for correct
export const AVATAR_CAROUSEL: ReadonlyArray<IAvatarCarouselItem> = [
  { id: '1', image: AvatarsNameType.Logo },
  { id: '2', image: AvatarsNameType.WhiteBackArrow },
  { id: '3', image: AvatarsNameType.WhitePencil },
];
