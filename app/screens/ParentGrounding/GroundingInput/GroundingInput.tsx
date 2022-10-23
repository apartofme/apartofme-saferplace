import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { SVG } from '../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
  RadioButtonOption,
} from '../../../components';
import { useAppSelector } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { GROUNDING_RADIO_BUTTON_ITEMS } from './GroundingInput.data';
import { styles } from './GroundingInput.styles';
import { IGroundingStartScreenProps } from './GroundingInput.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingInputScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;

  const [selected, setSelected] = useState<string[]>([]);

  const onSubmit = useCallback(() => {
    if (selected.length) {
      if (selected[0] === RadioButtonOption.Positive) {
        navigation.push('GroundingAcknowledgementTitle', {
          data: {
            title: `screens.parent_grounding_exercise.grounding_acknowledgement_title.second_title ${parentNickname}!`,
            subtitle:
              'screens.parent_grounding_exercise.grounding_acknowledgement_title.first_description',
            buttonTitle: 'buttons.next',
            image: IMAGES.LOGO,
            backgroundImage: IMAGES.WHITE_BACK_ARROW,
          },
        });
        return;
      }
      navigation.push('GroundingAcknowledgementTitle', {
        data: {
          title: `screens.parent_grounding_exercise.grounding_acknowledgement_title.second_title ${parentNickname}`,
          subtitle:
            'screens.parent_grounding_exercise.grounding_acknowledgement_title.second_description',
          buttonTitle: 'buttons.next',
          image: IMAGES.LOGO,
          backgroundImage: IMAGES.WHITE_BACK_ARROW,
        },
      });
    }
  }, [navigation, parentNickname, selected]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        onSubmit={onSubmit}
        buttonTitle={t('buttons.next')}
        isDisabledButton={!selected.length}>
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.parent_grounding_exercise.grounding_input.title')}
          </ExtendedText>
          <RadioButtonList
            type={RadioButtonListType.Single}
            setSelected={setSelected}
            data={GROUNDING_RADIO_BUTTON_ITEMS}
          />
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
