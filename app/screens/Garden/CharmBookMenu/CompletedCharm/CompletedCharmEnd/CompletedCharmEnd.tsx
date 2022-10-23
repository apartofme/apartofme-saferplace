import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../../assets';
import { SVG } from '../../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { useParsedJSXTextNickname } from '../../../../../hooks';
import { COLORS } from '../../../../../themes/colors';
import { generalStyles } from '../../../../../utils/styles';
import { styles } from './CompletedCharmEnd.styles';
import { ICompletedCharmEndScreenProps } from './CompletedCharmEnd.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const CompletedCharmEndScreen: React.FC<ICompletedCharmEndScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const Title = useParsedJSXTextNickname({
      text: t('screens.completed_charm_end.title'),
      textHasNickname: true,
      preset: 'title',
      style: styles.title,
      variableStyle: { color: COLORS.PRIMARY_ORANGE },
    });

    const onSabmit = useCallback(() => {
      navigation.push('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: false,
          isPlanting: false,
          isFirstTimeGarden: false,
        },
      });
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.GARDEN_DARK}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSabmit}
            style={styles.container}>
            <CelebrationGuideIcon />
            <Title />
            <ExtendedText style={generalStyles.greyCenter}>
              {t('screens.completed_charm_end.description')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
