import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExtendedButton } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './OnboardingCarousel.data';
import { IOnboardingCarouselScreenProps } from './OnboardingCarousel.types';
import { styles } from './OnboardingCarousel.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import { useParsedJSXTextNickname } from '../../../../hooks';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const OnboardingCarouselScreen: React.FC<IOnboardingCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const onSubmitPress = useCallback(() => {
      if (currentIndex < 3) {
        return setCurrentIndex(() => currentIndex + 1);
      }
      navigation.push('SignUpCredentials');
    }, [currentIndex, navigation]);

    const onBackArrowPress = useCallback(() => {
      if (currentIndex > 0) {
        return setCurrentIndex(() => currentIndex - 1);
      }
      navigation.goBack();
    }, [currentIndex, navigation]);

    const data = useMemo(() => CHARMS_CAROUSEL[currentIndex], [currentIndex]);

    const Title = useParsedJSXTextNickname({
      text: t(data.titleKey ? data.titleKey : ''),
      textHasNickname: true,
      preset: 'large-title',
      style: styles.title,
    });

    const SubTitle = useParsedJSXTextNickname({
      text: t(data.descriptionKey ? data.descriptionKey : ''),
      textHasNickname: true,
      style: styles.subtitle,
    });

    return (
      <ImageBackground
        source={
          data
            ? BACKGROUND_IMAGES[data.backgrountKey]
            : BACKGROUND_IMAGES.CALM_DEFAULT
        }
        style={generalStyles.flex}>
        <SafeAreaView edges={['bottom']} style={generalStyles.flex}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.backArrowContainer}
              onPress={onBackArrowPress}>
              <WhiteBackArrowIcon />
            </TouchableOpacity>
            <Title />
            <SubTitle />
          </View>
          <ExtendedButton
            title={t('buttons.next')}
            isArrow
            style={styles.button}
            onPress={onSubmitPress}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  };
