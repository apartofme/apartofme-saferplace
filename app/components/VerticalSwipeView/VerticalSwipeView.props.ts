import { ImageSourcePropType } from 'react-native';

export interface IVerticalSwipeViewProps {
  renderTopElement: () => JSX.Element;
  renderBottomElement: () => JSX.Element;
  backgroundImage: ImageSourcePropType;
}
