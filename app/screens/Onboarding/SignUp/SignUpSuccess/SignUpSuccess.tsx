import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import _ from 'lodash';

import { BACKGROUND_IMAGES, IMAGES } from '../../../../assets';
import { AVATARS_SVG, SVG } from '../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpSuccessScreenProps } from './SignUpSuccess.types';
import { styles } from './SignUpSuccess.styles';
import { DatoCMSTextVariables } from '../../../../constants/quest';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SignUpSuccessScreen: React.FC<ISignUpSuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const isChild = route.params?.isChild;
  const player = useAppSelector(
    state => state.cache.auth[isChild ? 'child' : 'parent'],
  );

  const correctLocalizationPath = useMemo(() => {
    if (isChild) {
      return 'screens.onboarding.sign_up_success.child';
    } else {
      return 'screens.onboarding.sign_up_success.parent';
    }
  }, [isChild]);

  const title = t(`${correctLocalizationPath}.title`);

  const onSubmit = useCallback(() => {
    if (isChild) {
      navigation.navigate('RecognitionStack');
    } else {
      navigation.navigate('CharmsIntroducing');
    }
  }, [isChild, navigation]);

  const titleArray = _(title)
    .replace(
      DatoCMSTextVariables[isChild ? 'Child' : 'GrownUp'],
      `$${player?.nickname}`,
    )
    .split('|')
    .map(value => {
      if (value.startsWith('$')) {
        return (
          <ExtendedText
            key={value}
            preset="large-title"
            style={generalStyles.primaryOrange}>
            {value.replace('$', '')}
          </ExtendedText>
        );
      }
      return value;
    });

  const AvatarIcon = AVATARS_SVG[player?.avatar ?? 'CircleRabbitIcon'];

  const background = useMemo(() => {
    if (isChild) {
      return BACKGROUND_IMAGES.ALTERNATIVE_GARDEN;
    }
    return BACKGROUND_IMAGES.ONBOARDING_DEFAULT;
  }, [isChild]);

  return (
    <ImageBackground source={background} style={generalStyles.flex}>
      <ImageBackground
        source={IMAGES.CONFETTI}
        style={generalStyles.flex}
        imageStyle={styles.background}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <AvatarIcon />
            <ExtendedText preset="large-title" style={styles.title}>
              {titleArray}
            </ExtendedText>
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t(`${correctLocalizationPath}.description`)}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    </ImageBackground>
  );
};
