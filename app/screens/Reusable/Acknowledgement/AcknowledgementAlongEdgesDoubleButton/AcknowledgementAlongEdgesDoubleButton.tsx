import React, { useMemo } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { IAcknowledgementAlongEdgesDoubleButtonScreenProps } from './AcknowledgementAlongEdgesDoubleButton.types';
import { styles } from './AcknowledgementAlongEdgesDoubleButton.styles';
import { useTranslation } from 'react-i18next';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { BottomButtonView, ExtendedText } from '../../../../components';

export const AcknowledgementAlongEdgesDoubleButtonScreen: React.FC<IAcknowledgementAlongEdgesDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      images,
      backgroundImage,
      crossHeader,
      titleHasNickname,
    } = route.params.data;

    const { t } = useTranslation();
    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
      // TODO: remove
      nicknameStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader(crossHeader ?? false);

    const correctButtonTitle = useMemo(() => {
      if (/next/i.test(buttonTitle as string)) {
        return t('buttons.skip').toUpperCase();
      } else {
        return t('buttons.finish').toUpperCase();
      }
    }, [buttonTitle, t]);

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
            <Image
              // TODO: change to real image
              source={(images && IMAGES[images[0]]) ?? IMAGES.LOGO}
              style={styles.image}
            />
            <ExtendedText style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
          <TouchableOpacity style={styles.bottomButton}>
            <ExtendedText preset="secondary-text">
              {correctButtonTitle}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };
