import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IPlantingPlantStyles {
  container: ViewStyle;
  tree: ImageStyle;
  plantMargin: ImageStyle;
  plantingPlase: ViewStyle;
  plantArea: ViewStyle;
  plantAreaBorder: ViewStyle;
  plantAreaTop: ViewStyle;
  plantAreaBottom: ViewStyle;
  activePlantArea: ViewStyle;
  emptyPlantArea: ViewStyle;
}

export const styles = StyleSheet.create<IPlantingPlantStyles>({
  container: {
    height: 450,
    width: 346,
    alignSelf: 'center',
  },
  tree: {
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  plantMargin: {
    marginTop: -65,
    marginLeft: 30,
  },
  plantAreaBorder: {
    borderWidth: 2,
    borderStyle: 'dashed',
    zIndex: 0,
  },
  plantingPlase: {
    position: 'absolute',
    top: 200,
    left: 34,
    transform: [{ rotate: '-33deg' }],
  },
  plantArea: {
    transform: [{ skewX: '30deg' }],
    height: 90,
    width: 90,
    zIndex: 10,
  },
  plantAreaTop: {
    marginLeft: -51,
  },
  plantAreaBottom: {
    marginLeft: 51,
  },
  activePlantArea: {
    backgroundColor: 'blue',
  },
  emptyPlantArea: {
    transform: [{ skewY: '30deg' }],
    height: 90,
    width: 90,
  },
});
