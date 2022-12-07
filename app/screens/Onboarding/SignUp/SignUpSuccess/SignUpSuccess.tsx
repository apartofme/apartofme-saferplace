import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import _ from 'lodash';

import { BACKGROUND_IMAGES } from '../../../../assets';
import { AVATARS_SVG } from '../../../../assets/svg';
import { BottomButtonView, ExtendedText } from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpSuccessScreenProps } from './SignUpSuccess.types';
import { styles } from './SignUpSuccess.styles';
import { DatoCMSTextVariables } from '../../../../constants/quest';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../../utils';

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
    return BACKGROUND_IMAGES.GENERIC_ONBOARDING;
  }, [isChild]);

  return (
    <ImageBackground source={background} style={generalStyles.flex}>
      <Lottie
        source={ANIMATIONS.LEAF_CONFETTI}
        autoPlay
        loop={false}
        style={LottieAbsoluteStyles(-30)}
      />
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <AvatarIcon height={325} width={325} />
          <ExtendedText preset="large-title" style={styles.title}>
            {titleArray}
          </ExtendedText>
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t(`${correctLocalizationPath}.description`)}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
