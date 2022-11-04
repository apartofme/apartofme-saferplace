import { IChild } from '../../models/IChild';
import { IParent } from '../../models/IParent';

export enum AvatarListType {
  Child = 'child',
  Parent = 'parent',
  EmptyView = 'emptyView',
  AddChild = 'addChild',
}

export interface IAvatarListItem {
  user?: IChild;
  parent?: IParent;
  type: AvatarListType;
}
