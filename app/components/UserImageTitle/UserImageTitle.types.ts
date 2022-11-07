import { AvatarsKeys } from '../../utils/types';

export interface IUserImageTitleProps {
  image?: AvatarsKeys;
  title?: string;
  isEdit?: boolean;
  onPress: () => void;
}
