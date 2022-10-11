import { AvatarsNameType } from '../utils/types';

export interface IUser {
  email: string;
  nickname: string;
  avatar: AvatarsNameType;
  emailVerified: boolean;
  uid: string;
  createdAt: string;
}
