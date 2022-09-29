import _ from 'lodash';
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import { IRecognitionAcknowledgementScreenProps } from './RecognitionAcknowledgement.types';
import { styles } from './RecognitionAcknowledgement.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { useTranslation } from 'react-i18next';

export const RecognitionAcknowledgementScreen: React.FC<IRecognitionAcknowledgementScreenProps> =
  ({ navigation, route }) => {
    // TODO: change
    // const { isMultipleChoice } = route.params.data;
    const isMultipleChoice = true;

    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
          rightIcon={IMAGES.WHITE_PENCIL}
        />
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
          <View style={styles.container}>
            <Image source={IMAGES.LOGO} style={styles.image} />
            {/* // TODO: add text */}
            <ExtendedText style={styles.title}>{t('')}</ExtendedText>
            <ExtendedText style={styles.subtitle}>
              {t(
                isMultipleChoice
                  ? 'screens.recognition.recognition_acknowledgement.multiple.description'
                  : 'screens.recognition.recognition_acknowledgement.single.description',
              )}
            </ExtendedText>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
