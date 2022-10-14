import React from 'react';
import { Image, ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IAcknowledgementLargeTitleScreenProps } from './AcknowledgementLargeTitle.types';
import { styles } from './AcknowledgementLargeTitle.styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { BottomButtonView } from '../../../../components';

export const AcknowledgementLargeTitleScreen: React.FC<IAcknowledgementLargeTitleScreenProps> =
  ({ route }) => {
    const {
      title,
      buttonTitle,
      backgroundImage,
      crossHeader,
      titleHasNickname,
    } = route.params.data;

    const { t } = useTranslation();
    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
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
            <Image
              // TODO: change to real image
              source={IMAGES.TREE}
              style={styles.image}
            />
            <Title />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
