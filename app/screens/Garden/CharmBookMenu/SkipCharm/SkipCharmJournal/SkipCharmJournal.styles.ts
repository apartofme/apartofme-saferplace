import { StyleSheet, ViewStyle } from 'react-native';

interface ISkipCharmJournalStyles {
  container: ViewStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<ISkipCharmJournalStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  inputContainer: {
    flex: 1,
    maxHeight: 160,
    marginTop: 36,
  },
});
