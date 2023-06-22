import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IChooseReasonScreenProps } from './ChooseReason.types';
import { styles } from './ChooseReason.styles';
import { generalStyles } from '../../../utils/styles';
import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../components';
import { CHOOSE_REASON_DATA } from './ChooseReason.data';
import { RecognitionAcknowledgementType } from '../RecognitionAcknowledgement/RecognitionAcknowledgement.data';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';
import { SaveRecognitionStackScreenName } from '../../../navigation/navigationAsyncStorage';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ChooseReasonScreen: React.FC<IChooseReasonScreenProps> = ({
  navigation,
  route,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const saveStackScreenName = async () => {
      await SaveRecognitionStackScreenName(route.name);
    };
    saveStackScreenName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { t } = useTranslation();

  const onSubmitPress = useCallback(() => {
    navigation.navigate('RecognitionAcknowledgement', {
      data: {
        type:
          selected.length === 1
            ? (selected[0] as RecognitionAcknowledgementType)
            : RecognitionAcknowledgementType.Multiple,
      },
    });
  }, [navigation, selected]);

  const onSkipPress = useCallback(() => {
    navigation.navigate('ElixirCarousel');
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <View style={generalStyles.flex}>
            <ExtendedText style={generalStyles.brilliantWhite} preset="title">
              {t('screens.recognition.choose_reason.title')}
            </ExtendedText>
            <ExtendedText style={styles.subtitle} preset="secondary-text">
              {t('screens.recognition.choose_reason.description')}
            </ExtendedText>
            <RadioButtonList
              data={CHOOSE_REASON_DATA}
              type={RadioButtonListType.Plural}
              setSelected={setSelected}
            />
          </View>

          <View>
            <ExtendedButton
              onPress={onSubmitPress}
              title={t('buttons.select')}
              style={styles.submitButton}
              disabled={!selected.length}
            />
            <Pressable onPress={onSkipPress}>
              <ExtendedText style={styles.skipTitle}>
                {t('buttons.skip').toUpperCase()}
              </ExtendedText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
