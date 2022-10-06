import { IMAGES } from '../../../../../assets';

export interface IUserImageTitleProps {
  image: keyof typeof IMAGES;
  title: string;
  onPress: () => void;
}
