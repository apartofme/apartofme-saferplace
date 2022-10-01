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
import { RadioButtonType, RADIO_BUTTON_LIST } from './RadioButton.data';
import { generalStyles } from '../../../utils/styles';
import { useNavigatePrevQuest, useNegativeNavigateTo } from '../../../hooks';

export const RadioButtonScreen: React.FC<IRadioButtonScreenProps> = ({
  route,
}) => {
  const { title, negativeNavigatesTo } = route.params.data;

  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const goBack = useNavigatePrevQuest();

  const isNoSelected = selectedAnswer[0] === RadioButtonType.No;

  const onSubmit = useNegativeNavigateTo(negativeNavigatesTo, isNoSelected);

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
