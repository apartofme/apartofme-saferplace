import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
} from '../../../components';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ReadOutLoud.styles';
import { IReadOutLoudScreenProps } from './ReadOutLoud.types';

export const ReadOutLoudScreen: React.FC<IReadOutLoudScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    images,
    buttonTitle,
    backgroundImage,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();

  const onSubmit = useNavigateNextQuest();

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'body-regular',
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
      // TODO: change to real default image
      source={
        (backgroundImage && IMAGES[backgroundImage]) ?? {
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }
      }
      style={generalStyles.flex}>
      <Header />
      <BottomButtonView
        buttonTitle={buttonTitle ?? 'buttons.next'}
        onSubmit={onSubmit}
        style={styles.container}>
        <ExtendedButton title={t('buttons.read_out')} />
        {images && <Image source={IMAGES[images[0]]} style={styles.image} />}
        <Title />
        <ExtendedText preset="tertiary-text-regular" style={styles.subtitle}>
          {description}
        </ExtendedText>
      </BottomButtonView>
    </ImageBackground>
  );
};
