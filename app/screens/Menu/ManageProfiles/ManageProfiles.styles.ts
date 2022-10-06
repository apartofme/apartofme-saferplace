import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IManageProfilesStyles {
  container: ViewStyle;
  title: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IManageProfilesStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    marginTop: 40,
    marginBottom: 50,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 70,
  },
});
