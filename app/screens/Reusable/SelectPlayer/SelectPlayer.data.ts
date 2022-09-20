import { IMAGES } from '../../../assets';
import { IPlayer } from './SelectPlayer.types';

export const DUMMY_PLAYER_LIST: ReadonlyArray<IPlayer> = [
  {
    id: 'grown_up',
    title: '[Grown up]',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    id: 'child',
    title: '[Child]',
    image: IMAGES.WHITE_PENCIL,
  },
];
