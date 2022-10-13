import { StyleSheet, ViewStyle } from 'react-native';

interface IConversationsCheckboxStyles {
  container: ViewStyle;
  whiteBackground: ViewStyle;
}

export const styles = StyleSheet.create<IConversationsCheckboxStyles>({
  // TODO: change to correct styles
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 24,
    borderRadius: 24,
  },
  // TODO: change to correct styles
  whiteBackground: {
    backgroundColor: 'white',
  },
});
