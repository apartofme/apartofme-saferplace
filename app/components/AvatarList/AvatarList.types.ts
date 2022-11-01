import { IChild } from '../../models/IChild';
import { IParent } from '../../models/IParent';
import { Nullable } from '../../utils';

export interface IAvatarListProps {
  data: IChild[];
  parent?: Nullable<IParent>;
}
