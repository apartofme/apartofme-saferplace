import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, Timer } from '../../../../components';
import {
  useNavigateNextQuest,
  useParseTextWithNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerTitle.styles';
import { ICharmTimerTitleScreenProps } from './CharmTimerTitle.types';

export const CharmTimerTitleScreen: React.FC<ICharmTimerTitleScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();

  const { duration, title, description, crossHeader, titleHasNickname } =
    route.params.data;

  const onSubmit = useNavigateNextQuest();

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {useRenderQuestHeader(crossHeader ?? false)}
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          {useParseTextWithNickname({
            text: title,
            textHasNickname: titleHasNickname ?? true,
            preset: 'title',
            style: styles.title,
            // TODO: remove
            nicknameStyle: { color: '#00dbc0' },
          })}
          <Timer
            duration={duration ?? 10}
            isStart={true}
            style={styles.timer}
          />
          {useParseTextWithNickname({
            text: description as string,
            textHasNickname: titleHasNickname ?? true,
            preset: 'secondary-text',
            style: styles.subtitle,
            // TODO: remove
            nicknameStyle: { color: '#00dbc0' },
          })}
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
