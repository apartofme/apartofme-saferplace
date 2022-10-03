import React, { useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
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
  useParseTextWithNickname,
  useRenderQuestHeader,
} from '../../../hooks';

export const RadioButtonScreen: React.FC<IRadioButtonScreenProps> = ({
  route,
}) => {
  const { title, crossHeader, titleHasNickname, negativeNavigatesTo } =
    route.params.data;

  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const isNoSelected = selectedAnswer[0] === RadioButtonType.No;

  const onSubmit = useNegativeNavigateTo(negativeNavigatesTo, isNoSelected);

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {useRenderQuestHeader(crossHeader ?? false)}
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          isDisabledButton={!selectedAnswer.length}
          style={styles.container}>
          <ExtendedText preset="title" style={styles.title}>
            {useParseTextWithNickname({
              text: title,
              textHasNickname: titleHasNickname ?? true,
              preset: 'title',
              // TODO: remove
              nicknameStyle: { color: '#00dbc0' },
            })}
          </ExtendedText>
          <RadioButtonList
            data={RADIO_BUTTON_LIST}
            type={RadioButtonListType.Single}
            setSelected={setSelectedAnswer}
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
