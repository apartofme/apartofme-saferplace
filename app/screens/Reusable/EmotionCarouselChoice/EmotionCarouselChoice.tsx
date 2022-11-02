import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IEmotionCarouselChoiceScreenProps } from './EmotionCarouselChoice.types';
import { styles } from './EmotionCarouselChoice.styles';
import {
  useAppSelector,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import { BottomButtonView, ExtendedText } from '../../../components';
import { EMOTIONS_CAROUSEL_SVG } from '../../../assets/svg';

export const EmotionCarouselChoiceScreen: React.FC<IEmotionCarouselChoiceScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const emotionTitle = useAppSelector(
      state => state.cache.emotionItem?.titleKey,
    );
    const iconKey = useAppSelector(state => state.cache.emotionItem?.iconKey);

    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const Icon = iconKey && EMOTIONS_CAROUSEL_SVG[iconKey];

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
            isArrow
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View style={styles.card}>
              {Icon && <Icon />}
              <ExtendedText preset="heading" style={styles.cardTitle}>
                {emotionTitle}
              </ExtendedText>
            </View>
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
