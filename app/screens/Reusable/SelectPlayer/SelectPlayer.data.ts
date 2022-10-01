import { IMAGES } from '../../../assets';
import { IPlayer } from './SelectPlayer.types';

export enum PlayerType {
  Parent = 'parent',
  Child = 'child',
}
export const PLAYER_LIST: ReadonlyArray<IPlayer> = [
  {
    id: PlayerType.Parent,
    title: '[Grown up]',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    id: PlayerType.Child,
    title: '[Child]',
    image: IMAGES.WHITE_PENCIL,
  },
];
