import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import { BottomButtonView, MainHeader } from '../../../../components';
import { useParsedJSXTextNickname } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './GroundingAcknowledgementTitle.styles';
import { IGroundingAcknowledgementTitleScreenProps } from './GroundingAcknowledgementTitle.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const Icon = SVG.CelebrationGuideIcon;

export const GroundingAcknowledgementTitleScreen: React.FC<IGroundingAcknowledgementTitleScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();

    const { titleKey, subtitleKey, nextRouteName } = route.params.data;

    const onSubmit = useCallback(() => {
      navigation.push(nextRouteName);
    }, [navigation, nextRouteName]);

    const Title = useParsedJSXTextNickname({
      text: t(titleKey),
      textHasNickname: true,
      preset: 'large-title',
      style: styles.title,
    });

    const Subtitle = useParsedJSXTextNickname({
      text: t(subtitleKey),
      textHasNickname: true,
      style: styles.subtitle,
    });

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
            buttonTitle={t('buttons.next')}
            isArrow
            onSubmit={onSubmit}
            style={styles.container}>
            <Icon />
            <Title />
            <Subtitle />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
