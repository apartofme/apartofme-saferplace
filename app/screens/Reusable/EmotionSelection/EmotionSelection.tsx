import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
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
import { CHARMS_BACKGROUNDS } from '../../../assets';

export const EmotionSelectionScreen: React.FC<IEmotionSelectionScreenProps> = ({
  route,
}) => {
  const {
    title,
    buttonTitle,
    titleHasNickname,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
    backgroundImage,
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
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle || t('buttons.select')}
          onSubmit={onSubmit}
          isDisabledButton={!selectedEmotion}>
          <Title />
          <View style={styles.container}>
            <EmotionButton data={emotions} setSelected={setSelecredEmotion} />
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
