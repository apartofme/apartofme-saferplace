import { ViewProps } from 'react-native';

export interface ITimerProps extends ViewProps {
  duration: number;
  isStart: boolean;
  maxValue?: number;
  onAnimationComplete?: () => void;
}
