import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IRadioButtonScreenProps } from './RadioButton.types';
import { styles } from './RadioButton.styles';
import {
  BottomButtonView,
  ExtendedText,
  RadioButtonList,
  RadioButtonListType,
} from '../../../components';
import { RadioButtonType, RADIO_BUTTON_LIST } from './RadioButton.data';
import { generalStyles } from '../../../utils/styles';
import {
  useNegativeNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';

export const RadioButtonScreen: React.FC<IRadioButtonScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    backgroundImage,
    crossHeader,
    titleHasNickname,
    negativeNavigatesTo,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const isNoSelected = selectedAnswer[0] === RadioButtonType.No;

  const onSubmit = useNegativeNavigateTo(negativeNavigatesTo, isNoSelected);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: generalStyles.brilliantWhite,
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle || t('buttons.next')}
          isArrow={!buttonTitle}
          onSubmit={onSubmit}
          isDisabledButton={!selectedAnswer.length}
          style={styles.container}>
          <Title />
          {!!description && (
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          )}
          <View style={styles.listContainer}>
            <RadioButtonList
              data={RADIO_BUTTON_LIST}
              type={RadioButtonListType.Single}
              setSelected={setSelectedAnswer}
            />
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
