import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { IMAGES } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useNavigateNextQuest,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementDoubleImageDoubleButtonScreenProps } from './AcknowledgementDoubleImageDoubleButton.types';
import { styles } from './AcknowledgementDoubleImageDoubleButton.styles';

export const AcknowledgementDoubleImageDoubleButtonScreen: React.FC<IAcknowledgementDoubleImageDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      titleHasNickname,
      crossHeader,
      positiveNavigatesTo,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();

    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
      // TODO: remove
      nicknameStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const correctButtonTitle = useMemo(() => {
      if (/next/i.test(buttonTitle as string)) {
        return t('buttons.finish').toUpperCase();
      }

      return t('buttons.not_now').toUpperCase();
    }, [buttonTitle, t]);

    const navigateToNextQuest = useNavigateNextQuest();

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View>
              <View style={styles.imageContainer}>
                <Image
                  // TODO: change to the real image
                  source={IMAGES.WHITE_PENCIL}
                  style={styles.image}
                />
                <Image
                  // TODO: change to the real image
                  source={IMAGES.WHITE_PENCIL}
                  style={[styles.image, styles.childImage]}
                />
              </View>
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description}
              </ExtendedText>
            </View>
          </BottomButtonView>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={navigateToNextQuest}>
            <ExtendedText preset="secondary-text">
              {correctButtonTitle}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };
