import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../../constants/window';
import { isIOS } from '../../../../utils';

export interface IPlantingPlantStyles {
  container: ViewStyle;
  tree: ImageStyle;
  borderTransparent: ViewStyle;
  plantMargin: ImageStyle;
  plantingPlase: ViewStyle;
  plantArea: ViewStyle;
  plantAreaBorder: ViewStyle;
  plantAreaTop: ViewStyle;
  plantAreaBottom: ViewStyle;
  plantAreaCenter: ViewStyle;
  activePlantArea: ViewStyle;
  emptyPlantArea: ViewStyle;
}

export const styles = StyleSheet.create<IPlantingPlantStyles>({
  container: {
    height: 450,
    width: 350,
    alignSelf: 'center',
    zIndex: 0,
    backgroundColor: 'red',
  },
  tree: {
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: WINDOW_HEIGHT < 600 ? 278 / 1.5 : 278,
    width: WINDOW_HEIGHT < 600 ? 212 / 1.5 : 212,
    zIndex: 0,
  },
  borderTransparent: {
    borderColor: 'transparent',
  },
  plantMargin: {
    marginTop: -(WINDOW_WIDTH / 6),
    marginLeft: WINDOW_WIDTH / 13,
  },
  plantAreaBorder: {
    borderWidth: 2,
    borderStyle: 'dashed',
    zIndex: 0,
  },
  plantingPlase: {
    position: 'absolute',
    top: isIOS ? 200 : 150,
    left: isIOS ? 37 : 24,
    transform: [{ rotate: '-33deg' }],
  },
  plantArea: {
    transform: isIOS
      ? [{ skewX: '30deg' }]
      : [{ rotateX: '50deg' }, { rotateY: '30deg' }, { rotateZ: '-30deg' }],
    height: isIOS ? 90 : 120,
    width: isIOS ? 90 : 120,
    zIndex: 10,
    top: WINDOW_HEIGHT < 600 ? -85 : 0,
    left: WINDOW_HEIGHT < 600 ? 55 : 0,
  },
  plantAreaTop: {
    marginLeft: isIOS ? -51 : -82,
    marginBottom: isIOS ? 0 : -31,
    marginTop: isIOS ? 0 : 32,
  },
  plantAreaBottom: {
    marginLeft: isIOS ? 51 : 20,
    marginTop: isIOS ? 0 : -30,
  },
  plantAreaCenter: {
    marginLeft: isIOS ? 0 : -30,
    marginRight: isIOS ? 0 : -32,
  },
  activePlantArea: {
    backgroundColor: 'blue',
  },
  emptyPlantArea: {
    transform: [{ skewY: '30deg' }],
    height: isIOS ? 90 : 120,
    width: isIOS ? 90 : 120,
  },
});
