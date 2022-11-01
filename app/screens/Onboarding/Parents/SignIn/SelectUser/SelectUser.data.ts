import { IChild } from '../../../../../models/IChild';
import { Nullable } from '../../../../../utils';

// TODO: remove
export interface IUserState {
  child: Nullable<IChild>;
  children: IChild[];
}

// TODO: remove
export const DUMMY_CHILD: IUserState = {
  child: {
    age: 12,
    parentId: 'string',
    avatar: 'FoxIcon',
    nickname: 'string1',
    uid: 'string',
  },
  children: [
    {
      age: 12,
      parentId: 'string',
      avatar: 'CircleFoxIcon',
      nickname: 'string1',
      uid: '1fsdf',
    },
    {
      age: 13,
      parentId: 'string',
      avatar: 'CircleMothIcon',
      nickname: 'string2',
      uid: '2fds',
    },
    {
      age: 14,
      parentId: 'string',
      avatar: 'CircleFoxIcon',
      nickname: 'string3',
      uid: '3fdsf',
    },
    {
      age: 14,
      parentId: 'string',
      avatar: 'CircleFoxIcon',
      nickname: 'string4',
      uid: '4fd',
    },
  ],
};
