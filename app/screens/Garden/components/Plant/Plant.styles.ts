import { ImageStyle, StyleSheet } from 'react-native';

export interface IPlantStyles {
  plant: ImageStyle;
}

export const styles = StyleSheet.create<IPlantStyles>({
  plant: {
    position: 'absolute',
    height: 132,
    width: 90,
    transform: [{ rotate: '45deg' }],
    zIndex: 1000,
  },
});
