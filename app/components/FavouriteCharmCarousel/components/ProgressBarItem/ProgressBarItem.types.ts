import Animated from 'react-native-reanimated';

export interface IProgressBarItemProps {
  index: number;
  length: number;
  animValue: Animated.SharedValue<number>;
}
