import { StyleSheet, ViewStyle } from 'react-native';

export interface IPlantStyles {
  plantContainer: ViewStyle;
}

export const styles = StyleSheet.create<IPlantStyles>({
  plantContainer: {
    position: 'absolute',
    zIndex: 1000,
  },
});
