import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import moment from 'moment';

import {
  BottomButtonView,
  EmojiSlider,
  ExtendedText,
} from '../../../components';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { IEmojiSelectionScreenProps } from './EmojiSelection.types';
import { styles } from './EmojiSelection.styles';
import { questSlice } from '../../../redux/slices';

export const EmojiSelectionScreen: React.FC<IEmojiSelectionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const {
    title,
    buttonTitle,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;
  const dispatch = useAppDispatch();
  const [emoji, setEmoji] = useState('');

  const navigateToNextQuest = useNavigateNextQuest();

  const onSubmit = useCallback(() => {
    const currentDate = moment().format('L');

    if (title.search('child') !== -1) {
      dispatch(
        questSlice.actions.saveDailyCheck({
          [currentDate]: emoji.split('.')[2],
        }),
      );
    }

    navigateToNextQuest();
  }, [dispatch, emoji, navigateToNextQuest, title]);

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

  return (
    <ImageBackground
      // TODO: change to real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <ExtendedText>{t(emoji)}</ExtendedText>
          <EmojiSlider setEmojiKey={setEmoji} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
