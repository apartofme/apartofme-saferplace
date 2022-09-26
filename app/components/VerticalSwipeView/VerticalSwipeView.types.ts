import { ImageSourcePropType } from 'react-native';

export interface IVerticalSwipeViewProps {
  titleKey: string;
  subtitleKey?: string;
  aboutTitleKey?: string;
  aboutSubtitleKey?: string;
  image?: ImageSourcePropType;
  topBackground: ImageSourcePropType;
  bottomBackground: ImageSourcePropType;
  onSubmit: () => void;
}
