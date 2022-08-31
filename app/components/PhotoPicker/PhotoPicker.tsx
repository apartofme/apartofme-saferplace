import React, { useCallback } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { ActionSheet } from 'react-native-cross-actionsheet';
import _ from 'lodash';

import { ExtendedText } from '../ExtendedText';
import { styles } from './PhotoPicker.styles';
import { IPhotoPickerProps } from './PhotoPicker.props';
import { PICKER_OPTIONS } from './PhotoPicker.data';

export const PhotoPicker: React.FC<IPhotoPickerProps> = ({
  selectedImage,
  setSelectedImage,
}) => {
  const onSelectImage = useCallback(
    (image: ImageOrVideo | null) => {
      setSelectedImage(image);
    },
    [setSelectedImage],
  );

  const takePhotoFromCamera = useCallback(() => {
    ImageCropPicker.openCamera(PICKER_OPTIONS).then(onSelectImage);
  }, [onSelectImage]);

  const takePhotoFromLibrary = useCallback(() => {
    ImageCropPicker.openPicker(PICKER_OPTIONS).then(onSelectImage);
  }, [onSelectImage]);

  const onImagePickerPress = useCallback(() => {
    ActionSheet.options({
      options: [
        { text: 'Take Photo', onPress: takePhotoFromCamera },
        { text: 'Choose Photo Library', onPress: takePhotoFromLibrary },
      ],
      cancel: { onPress: _.noop },
    });
  }, [takePhotoFromCamera, takePhotoFromLibrary]);

  const onDeletePress = useCallback(() => {
    onSelectImage(null);
  }, [onSelectImage]);

  return (
    <View style={styles.contentContainer}>
      <TouchableOpacity
        onPress={onImagePickerPress}
        style={styles.emptyImageContainer}>
        {selectedImage ? (
          <Image
            style={styles.selectedImage}
            source={{ uri: selectedImage?.path }}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>

      {selectedImage ? (
        <View style={styles.buttonsContainer}>
          <ExtendedText onPress={onImagePickerPress}>Upload new</ExtendedText>
          <ExtendedText onPress={onDeletePress}>Delete</ExtendedText>
        </View>
      ) : (
        <View style={styles.titleContainer}>
          <ExtendedText>{'<- Add an optional profile photo'}</ExtendedText>
        </View>
      )}
    </View>
  );
};
