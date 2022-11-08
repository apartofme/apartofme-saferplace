import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import moment from 'moment';

import { EmojiButtons } from '../../../components';
import {
  useAppDispatch,
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { IEmojiSelectionScreenProps } from './EmojiSelection.types';
import { styles } from './EmojiSelection.styles';
import { questSlice } from '../../../redux/slices';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { FirebaseAnalyticsEventsType } from '../../../services/firebase/types';
import { trackEvent } from '../../../services/firebase/analytics';
import {
  OPEN_DIALOG_IDS,
  POST_CHARM_CHECK_IN,
  PRE_CHARM_DAILY_CHECK_IN,
} from '../../../constants/quest';
import _ from 'lodash';

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

  const email = useAppSelector(state => state.user.parent?.email);
  const currentQuestLineId = useAppSelector(
    state => state.quest.currentQuestLine?.id ?? 0,
  );

  useMount(() => {
    if (
      _.findIndex(OPEN_DIALOG_IDS, item => item === currentQuestLineId) !== -1
    ) {
      trackEvent(FirebaseAnalyticsEventsType.PreCharmDailyCheckIn, {
        name: PRE_CHARM_DAILY_CHECK_IN,
        result: emoji,
        email: email ?? '',
        datetime: moment().format('d-m-Y H:i:s'),
      });
      return;
    }

    trackEvent(FirebaseAnalyticsEventsType.PostCharmDailyCheckIn, {
      name: POST_CHARM_CHECK_IN,
      result: emoji,
      email: email ?? '',
      datetime: moment().format('d-m-Y H:i:s'),
    });
  });

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
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
