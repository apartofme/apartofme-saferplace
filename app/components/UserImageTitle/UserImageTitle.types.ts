import { AvatarsKeys } from '../../utils/types';

export interface IUserImageTitleProps {
  image?: AvatarsKeys;
  title?: string;
  onPress: () => void;
}
