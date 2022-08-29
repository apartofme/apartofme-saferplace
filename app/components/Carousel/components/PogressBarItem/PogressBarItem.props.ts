import Animated from 'react-native-reanimated';

export interface IPogressBarItemProps {
  index: number;
  length: number;
  animValue: Animated.SharedValue<number>;
}
