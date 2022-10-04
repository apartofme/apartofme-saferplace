import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { IMAGES } from '../../../../assets';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementAlongEdgesScreenProps } from './AcknowledgementAlongEdges.types';
import { styles } from './AcknowledgementAlongEdges.styles';

export const AcknowledgementAlongEdgesScreen: React.FC<IAcknowledgementAlongEdgesScreenProps> =
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
        </SafeAreaView>
      </ImageBackground>
    );
  };
