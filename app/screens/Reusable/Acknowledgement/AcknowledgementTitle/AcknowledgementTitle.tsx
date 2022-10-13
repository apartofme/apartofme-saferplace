import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground } from 'react-native';

import { BottomButtonView } from '../../../../components';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementTitle.styles';
import { IAcknowledgementTitleScreenProps } from './AcknowledgementTitle.types';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';

export const AcknowledgementTitleScreen: React.FC<IAcknowledgementTitleScreenProps> =
  ({ route }) => {
    const { t } = useTranslation();

    const {
      title,
      titleHasNickname,
      crossHeader,
      buttonTitle,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'body-regular',
      style: styles.title,
      // TODO: remove
      variableStyle: { color: '#00dbc0' },
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
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Image
            // TODO: change to the real image
            source={IMAGES.WHITE_PENCIL}
          />
          <Title />
        </BottomButtonView>
      </ImageBackground>
    );
  };
