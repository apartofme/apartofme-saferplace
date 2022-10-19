import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { CRITICAL_HEIGHT, WINDOW_HEIGHT } from '../../../../constants/window';
import { isIOS } from '../../../../utils';

export interface IPlantingPlantStyles {
  container: ViewStyle;
  tree: ImageStyle;
  borderTransparent: ViewStyle;
  plantingPlase: ViewStyle;
  plantArea: ViewStyle;
  plantAreaBorder: ViewStyle;
  plantAreaTop: ViewStyle;
  plantAreaBottom: ViewStyle;
  plantAreaCenter: ViewStyle;
  activePlantArea: ViewStyle;
  emptyPlantArea: ViewStyle;
}

const isCriticalHeight = WINDOW_HEIGHT < CRITICAL_HEIGHT;

export const styles = StyleSheet.create<IPlantingPlantStyles>({
  container: {
    height: 450,
    width: 350,
    alignSelf: 'center',
    zIndex: 0,
  },
  tree: {
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: isCriticalHeight ? 278 / 1.5 : 278,
    width: isCriticalHeight ? 212 / 1.5 : 212,
    zIndex: 0,
  },
  borderTransparent: {
    borderColor: 'transparent',
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
    justifyContent: 'center',
    transform: isIOS
      ? [{ skewX: '30deg' }]
      : [{ rotateX: '50deg' }, { rotateY: '30deg' }, { rotateZ: '-30deg' }],
    height: isIOS ? 90 : 120,
    width: isIOS ? 90 : 120,
    zIndex: 10,
    top: isCriticalHeight ? -85 : 0,
    left: isCriticalHeight ? 55 : 0,
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
