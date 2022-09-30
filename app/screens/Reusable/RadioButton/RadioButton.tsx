import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IRadioButtonScreenProps } from './RadioButton.types';
import { styles } from './RadioButton.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { RADIO_BUTTON_LIST } from './RadioButton.data';
import { generalStyles } from '../../../utils/styles';
import { useHandleSubmit, useNavigatePrevQuest } from '../../../hooks';

export const RadioButtonScreen: React.FC<IRadioButtonScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const { title, titleHasNickname } = route.params.data;

  const onSubmit = useHandleSubmit(selectedAnswer[0]);
  const goBack = useNavigatePrevQuest();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={goBack}
        // TODO: change to correct icon
        rightIcon={IMAGES.WHITE_BACK_ARROW}
      />
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        onSubmit={onSubmit}
        isDisabledButton={!selectedAnswer.length}
        style={styles.container}>
        <ExtendedText preset="title" style={styles.title}>
          {title}
        </ExtendedText>
        <RadioButtonList
          data={RADIO_BUTTON_LIST}
          type={RadioButtonListType.Single}
          setSelected={setSelectedAnswer}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
