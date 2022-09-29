import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { Dialog } from './components';
import { RECOGNITION_DIALOG_DATA } from './RecognitionDialog.data';
import { styles } from './RecognitionDialog.styles';
import { IRecognitionDialogScreenProps } from './RecognitionDialog.types';

export const RecognitionDialogScreen: React.FC<IRecognitionDialogScreenProps> =
  ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
          <View style={styles.container}>
            <Image source={IMAGES.LOGO} style={styles.image} />
            <Dialog
              data={RECOGNITION_DIALOG_DATA}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
