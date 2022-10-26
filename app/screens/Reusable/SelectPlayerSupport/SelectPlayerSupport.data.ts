import { AVATARS_SVG } from '../../../assets/svg';
import { IPlayer } from './SelectPlayerSupport.types';

export enum PlayerType {
  Parent = 'parent',
  Child = 'child',
}
export const PLAYER_LIST: ReadonlyArray<IPlayer> = [
  {
    id: PlayerType.Parent,
    title: '[Grown up]',
    icon: AVATARS_SVG.CircleRabbitIcon,
  },
  {
    id: PlayerType.Child,
    title: '[Child]',
    icon: AVATARS_SVG.BearIcon,
  },
];
