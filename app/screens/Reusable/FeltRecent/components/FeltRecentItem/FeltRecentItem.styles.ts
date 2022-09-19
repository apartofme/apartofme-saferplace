import { StyleSheet, ViewStyle } from 'react-native';

export interface IFeltRecentItemStyles {
  container: ViewStyle;
  active: ViewStyle;
}

export const styles = StyleSheet.create<IFeltRecentItemStyles>({
  // TODO: change to correct styles
  container: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingBottom: 21,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 16,
    marginRight: 16,
  },
  // TODO: change to correct styles
  active: {
    borderColor: 'black',
  },
});
