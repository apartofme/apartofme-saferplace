import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { SVG } from '../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
  RadioButtonOption,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { GROUNDING_RADIO_BUTTON_ITEMS } from './GroundingInput.data';
import { styles } from './GroundingInput.styles';
import { IGroundingStartScreenProps } from './GroundingInput.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingInputScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<string[]>([]);

  const onSubmit = useCallback(() => {
    if (selected.length) {
      if (selected[0] === RadioButtonOption.Positive) {
        navigation.push('GroundingAcknowledgementTitle', {
          data: {
            title:
              'screens.parent_grounding_exercise.grounding_acknowledgement_title.first.title',
            subtitle:
              'screens.parent_grounding_exercise.grounding_acknowledgement_title.first.description',
            buttonTitle: 'buttons.next',
            Icon: SVG.CelebrationGuideIcon,
            backgroundImage: BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT,
          },
        });
        return;
      }
      navigation.push('GroundingAcknowledgementTitle', {
        data: {
          title:
            'screens.parent_grounding_exercise.grounding_acknowledgement_title.second.title',
          subtitle:
            'screens.parent_grounding_exercise.grounding_acknowledgement_title.second.description',
          buttonTitle: 'buttons.next',
          Icon: SVG.CompassionateGuideIcon,
          backgroundImage: BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT,
        },
      });
    }
  }, [navigation, selected]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          onSubmit={onSubmit}
          buttonTitle={t('buttons.next')}
          isArrow={true}
          isDisabledButton={!selected.length}>
          <View style={styles.container}>
            <ExtendedText preset="title" style={styles.title}>
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
    </ImageBackground>
  );
};
