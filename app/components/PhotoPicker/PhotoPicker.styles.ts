import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IPhotoPickerStyles {
  contentContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  selectedImage: ImageStyle;
  titleContainer: TextStyle;
  emptyImageContainer: ViewStyle;
}

// TODO: change to real styles
export const styles = StyleSheet.create<IPhotoPickerStyles>({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
  emptyImageContainer: {
    borderRadius: 100,
    borderWidth: 1,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  selectedImage: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },
  titleContainer: {
    paddingLeft: 16,
  },
});
