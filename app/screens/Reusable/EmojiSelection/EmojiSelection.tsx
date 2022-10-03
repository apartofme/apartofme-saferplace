import _ from 'lodash';
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
  useMount,
  useNavigateNextQuest,
  useParseTextWithNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { IEmojiSelectionScreenProps } from './EmojiSelection.types';
import { Nullable, parseTextWithNickname } from '../../../utils';
import { styles } from './EmojiSelection.styles';
import { questSlice } from '../../../redux/slices';

export const EmojiSelectionScreen: React.FC<IEmojiSelectionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const { title, buttonTitle, crossHeader, titleHasNickname } =
    route.params.data;
  const dispatch = useAppDispatch();
  const [emoji, setEmoji] = useState('');
  const [titleArray, setTitleArray] = useState<Nullable<string[]>>(null);

  useMount(() => {
    if (titleHasNickname) {
      setTitleArray(parseTextWithNickname(title));
    }
  });

  const navigateToNextQuest = useNavigateNextQuest();

  const onSubmit = useCallback(() => {
    const currentDate = moment().format('L');

    if (_.findIndex(titleArray, item => item === 'child')) {
      dispatch(
        questSlice.actions.saveDailyCheck({
          [currentDate]: emoji.split('.')[2],
        }),
      );
    }

    navigateToNextQuest();
  }, [dispatch, emoji, navigateToNextQuest, titleArray]);

  return (
    <ImageBackground
      // TODO: change to real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {useRenderQuestHeader(crossHeader ?? false)}
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          style={styles.container}>
          {useParseTextWithNickname({
            text: title,
            textHasNickname: titleHasNickname ?? true,
          })}
          <ExtendedText>{t(emoji)}</ExtendedText>
          <EmojiSlider setEmojiKey={setEmoji} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
