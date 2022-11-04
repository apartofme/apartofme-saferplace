import { AvatarsKeys } from '../utils/types';

export interface IChild {
  age: number;
  parentId: string;
  avatar: AvatarsKeys;
  nickname: string;
  uid: string;
}
