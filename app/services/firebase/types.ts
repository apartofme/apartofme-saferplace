import { IUser } from '../../models/IUser';
import { Nullable } from '../../utils';

export interface IFirebaseAuthResponse {
  user: Nullable<IUser>;
  error: Nullable<string>;
}
