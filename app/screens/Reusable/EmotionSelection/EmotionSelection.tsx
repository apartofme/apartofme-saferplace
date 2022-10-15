import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import _ from 'lodash';

import { IEmotionSelectionScreenProps } from './EmotionSelection.types';
import { styles } from './EmotionSelection.styles';
import {
  BottomButtonView,
  EmotionButton,
  EmotionButtonType,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import {
  useAppDispatch,
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { useTranslation } from 'react-i18next';
import { EMOTION_BUTTON_LIST } from './EmotionSelection.data';
import { Nullable } from '../../../utils';
import { cacheSlice } from '../../../redux/slices';

export const EmotionSelectionScreen: React.FC<IEmotionSelectionScreenProps> = ({
  route,
}) => {
  const {
    title,
    buttonTitle,
    titleHasNickname,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const [selectedEmotion, setSelecredEmotion] =
    useState<Nullable<EmotionButtonType>>(null);
  const [emotions, setEmotions] = useState(_.cloneDeep(EMOTION_BUTTON_LIST));
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const completedEmotions = useAppSelector(
    state => state.cache.emotions.completed,
  );

  const navigateToNextQuest = useNavigateNextQuest();

  useEffect(() => {
    if (completedEmotions.length >= EMOTION_BUTTON_LIST.length) {
      dispatch(cacheSlice.actions.clearEmotions());
    }
  }, [completedEmotions.length, dispatch]);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
    // TODO: remove
    variableStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.saveSelectedEmotion(selectedEmotion));
    navigateToNextQuest();
  }, [dispatch, navigateToNextQuest, selectedEmotion]);

  useMount(() => {
    const tempEmotions = _.filter(
      emotions,
      item => _.indexOf(completedEmotions, item.type) === -1,
    );

    setEmotions(tempEmotions);
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
          isDisabledButton={!selectedEmotion}
          style={styles.container}>
          <Title />
          <EmotionButton data={emotions} setSelected={setSelecredEmotion} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
