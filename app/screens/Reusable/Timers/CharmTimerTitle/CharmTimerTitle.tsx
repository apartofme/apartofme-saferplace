import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, Timer } from '../../../../components';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerTitle.styles';
import { ICharmTimerTitleScreenProps } from './CharmTimerTitle.types';

export const CharmTimerTitleScreen: React.FC<ICharmTimerTitleScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();

  const {
    duration,
    title,
    description,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const onSubmit = useNavigateNextQuest();

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  const Description = useParsedJSXTextNickname({
    text: description as string,
    textHasNickname: titleHasNickname ?? true,
    preset: 'secondary-text',
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
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <Timer
            duration={duration ?? 10}
            isStart={true}
            style={styles.timer}
          />
          <Description />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
