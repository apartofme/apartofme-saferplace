import { AvatarsKeys } from '../utils/types';

export interface IParent {
  email: string;
  avatar: AvatarsKeys;
  nickname: string;
  uid: string;
  emailVerified: boolean;
  isReceiveInformationEnabled: boolean;
}
