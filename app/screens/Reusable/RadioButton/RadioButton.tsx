import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

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

export const RadioButtonScreen: React.FC<IRadioButtonScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const { title, isTitleHaveNickname } = route.params.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
        // TODO: change to correct icon
        rightIcon={IMAGES.WHITE_BACK_ARROW}
      />
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        onSubmit={_.noop}
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
