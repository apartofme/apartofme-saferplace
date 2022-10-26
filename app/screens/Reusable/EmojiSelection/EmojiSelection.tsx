import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import moment from 'moment';

import { EmojiButtons } from '../../../components';
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
import { CHARMS_BACKGROUNDS } from '../../../assets';

export const EmojiSelectionScreen: React.FC<IEmojiSelectionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const {
    title,
    buttonTitle,
    backgroundImage,
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
          [currentDate]: emoji,
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
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView>
        <Header />
        <Title />
      </SafeAreaView>
      <EmojiButtons
        buttonTitle={buttonTitle ?? t('buttons.select')}
        onSubmit={onSubmit}
        setEmojiKey={setEmoji}
      />
    </ImageBackground>
  );
};
