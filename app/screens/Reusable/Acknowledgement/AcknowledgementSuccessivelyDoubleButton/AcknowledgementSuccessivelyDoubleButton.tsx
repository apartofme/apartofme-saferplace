import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { IMAGES } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementSuccessivelyDoubleButtonScreenProps } from './AcknowledgementSuccessivelyDoubleButton.types';
import { styles } from './AcknowledgementSuccessivelyDoubleButton.styles';

export const AcknowledgementSuccessivelyDoubleButtonScreen: React.FC<IAcknowledgementSuccessivelyDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      crossHeader,
      positiveNavigatesTo,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();

    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
      // TODO: remove
      nicknameStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

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
            <Image
              // TODO: change to the real image
              source={IMAGES.WHITE_PENCIL}
              style={styles.image}
            />
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
          <TouchableOpacity style={styles.bottomButton}>
            <ExtendedText preset="secondary-text">
              {t('buttons.skip').toUpperCase()}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };
