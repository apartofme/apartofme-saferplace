import { StyleSheet, ViewStyle } from 'react-native';

export interface IProgressBarItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<IProgressBarItemStyles>({
  // TODO: change for correct styles
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 99,
    width: 8,
    height: 8,
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  // TODO: change for correct styles
  contentContainer: {
    borderRadius: 99,
    backgroundColor: '#AA82E0',
    flex: 1,
  },
});
