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
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import { BottomButtonView, ExtendedText } from '../../../components';

export const EmotionCarouselChoiceScreen: React.FC<IEmotionCarouselChoiceScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      crossHeader,
      titleHasNickname,
    } = route.params.data;

    const { t } = useTranslation();
    const emotionItem =
      useAppSelector(state => state.cache.emotionItem) ??
      '[I feel angry sometimes too]';
    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.textCenter,
      // TODO: remove
      variableStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader(crossHeader ?? false);

    return (
      <ImageBackground
        // TODO: change to real default image
        source={
          (backgroundImage && IMAGES[backgroundImage]) ?? {
            uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
          }
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View style={styles.card}>
              <ExtendedText preset="heading" style={styles.textCenter}>
                {emotionItem}
              </ExtendedText>
            </View>
            <ExtendedText preset="secondary-text" style={styles.textCenter}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
