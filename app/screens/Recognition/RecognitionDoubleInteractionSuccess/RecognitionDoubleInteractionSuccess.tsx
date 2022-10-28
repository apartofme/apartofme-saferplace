import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { BottomButtonView } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { GARDEN_TRANSSITION_DIALOG } from '../RecognitionDialog/RecognitionDialog.data';
import { styles } from './RecognitionDoubleInteractionSuccess.styles';
import { IRecognitionDoubleInteractionSuccessScreenProps } from './RecognitionDoubleInteractionSuccess.types';

export const RecognitionDoubleInteractionSuccessScreen: React.FC<IRecognitionDoubleInteractionSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmitPress = useCallback(() => {
      navigation.push('RecognitionDialog', {
        data: {
          speech: GARDEN_TRANSSITION_DIALOG,
          nextRoute: 'GardenStack',
        },
      });
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={onSubmitPress}
            isArrow>
            <View style={styles.container}>
              <ElixirThreeIcon />
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
