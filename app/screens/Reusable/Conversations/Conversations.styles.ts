import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IConversationsStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IConversationsStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
    marginBottom: 24,
  },
  subtitle: {
    marginBottom: 61,
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 40,
  },
});
