import { Dimensions } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const DESIGN_WINDOW_WIDTH = 375;
const DESIGN_WINDOW_HEIGHT = 812;

export const WINDOW_COEFFICIENT = Math.min(
  WINDOW_HEIGHT / DESIGN_WINDOW_HEIGHT,
  WINDOW_WIDTH / DESIGN_WINDOW_WIDTH,
  1,
);
