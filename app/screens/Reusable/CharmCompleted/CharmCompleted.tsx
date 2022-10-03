import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../components';
import { IMAGES } from '../../../assets';
import { useParseTextWithNickname, useRenderQuestHeader } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { ICharmCompletedScreenProps } from './CharmCompleted.types';
import { useNavigateNextQuest } from '../../../hooks';
import { styles } from './CharmCompleted.styles';

export const CharmCompletedScreen: React.FC<ICharmCompletedScreenProps> = ({
  route,
}) => {
  const { title, description, buttonTitle, crossHeader, titleHasNickname } =
    route.params.data;

  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Image
          // TODO: change to the real image
          source={IMAGES.WHITE_PENCIL}
          style={styles.image}
        />
        {useRenderQuestHeader(crossHeader ?? false)}
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          {useParseTextWithNickname({
            text: title,
            textHasNickname: titleHasNickname ?? true,
            preset: 'large-title',
            // TODO: remove
            nicknameStyle: { color: '#00dbc0' },
          })}
          <ExtendedText preset="secondary-text" style={styles.description}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
