import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

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
import { IMAGES } from '../../../assets';
import { useTranslation } from 'react-i18next';
import { CHOOSE_REASON_DATA } from './ChooseReason.data';
import { RecognitionAcknowledgementType } from '../RecognitionAcknowledgement/RecognitionAcknowledgement.data';

export const ChooseReasonScreen: React.FC<IChooseReasonScreenProps> = ({
  navigation,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const { t } = useTranslation();

  // TODO: change to correct
  const onSubmitPress = useCallback(() => {
    if (selected.length === 1) {
      navigation.navigate('RecognitionAcknowledgement', {
        data: { type: selected[0] as RecognitionAcknowledgementType },
      });
    } else {
      navigation.navigate('RecognitionAcknowledgement', {
        data: { type: RecognitionAcknowledgementType.Multiple },
      });
    }
  }, [navigation, selected]);

  // TODO: change to correct
  const onSkipPress = useCallback(() => {
    navigation.navigate('ElixirCarousel');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <View style={generalStyles.flex}>
          <ExtendedText style={styles.title}>
            {t('screens.recognition.choose_reason.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle}>
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
          <ExtendedText style={styles.skipTitle} onPress={onSkipPress}>
            {t('buttons.skip')}
          </ExtendedText>
        </View>
      </View>
    </SafeAreaView>
  );
};
