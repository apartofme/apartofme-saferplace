import React, { useCallback, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

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
  const { title, buttonTitle, titleHasNickname, crossHeader } =
    route.params.data;

  const [selectedEmotion, setSelecredEmotion] =
    useState<Nullable<EmotionButtonType>>(null);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const navigateToNextQuest = useNavigateNextQuest();

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader(crossHeader ?? false);

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.saveSelectedEmotion(selectedEmotion));
    navigateToNextQuest();
  }, [dispatch, navigateToNextQuest, selectedEmotion]);

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
          <EmotionButton
            data={EMOTION_BUTTON_LIST}
            setSelected={setSelecredEmotion}
          />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
