import { AvatarsKeys } from '../utils/types';

export interface IUser {
  email: string;
  nickname: string;
  avatar: AvatarsKeys;
  emailVerified: boolean;
  uid: string;
  createdAt: string;
}
