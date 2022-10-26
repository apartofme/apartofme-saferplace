import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

export interface IPlantingPlantStyles {
  container: ViewStyle;
  tree: ImageStyle;
  borderTransparent: ViewStyle;
  plantingPlaсe: ViewStyle;
  plantArea: ViewStyle;
  plantAreaBorder: ViewStyle;
  plantAreaCenter: ViewStyle;
  activePlantArea: ViewStyle;
  emptyPlantArea: ViewStyle;
}

const plantAreaSize = 96;

export const styles = StyleSheet.create<IPlantingPlantStyles>({
  container: {
    height: 190 + 278,
    width: 350,
    alignSelf: 'center',
    zIndex: 0,
  },
  tree: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 0,
  },
  borderTransparent: {
    borderColor: 'transparent',
  },
  plantAreaBorder: {
    borderColor: COLORS.BRILLIANT_WHITE,
    borderWidth: 2,
    borderStyle: 'dashed',
    zIndex: 0,
  },
  plantingPlaсe: {
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 260,
  },
  plantArea: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: plantAreaSize,
    width: plantAreaSize,
    borderRadius: 100,
    zIndex: 10,
  },
  plantAreaCenter: {
    marginVertical: (-plantAreaSize + 16) / 2,
  },
  activePlantArea: {
    backgroundColor: hexTransparency(COLORS.BRILLIANT_WHITE, 50),
  },
  emptyPlantArea: {
    height: plantAreaSize,
    width: plantAreaSize,
  },
});
