import { IChild } from '../../../../../models/IChild';
import { Nullable } from '../../../../../utils';

export interface IUserState {
  child: Nullable<IChild>;
  children: IChild[];
}

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
      uid: 'string',
    },
    {
      age: 13,
      parentId: 'string',
      avatar: 'CircleFoxIcon',
      nickname: 'string2',
      uid: 'string',
    },
    {
      age: 14,
      parentId: 'string',
      avatar: 'CircleFoxIcon',
      nickname: 'string3',
      uid: 'string',
    },
    {
      age: 14,
      parentId: 'string',
      avatar: 'CircleFoxIcon',
      nickname: 'string4',
      uid: 'string',
    },
  ],
};
