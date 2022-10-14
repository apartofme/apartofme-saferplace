import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ITroublesomeSpiritQuestionsCarouselScreenProps } from './TroublesomeSpiritQuestionsCarousel.types';
import { styles } from './TroublesomeSpiritQuestionsCarousel.styles';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import {
  BottomButtonView,
  ExtendedText,
  TroublesomeSpiritQuestionsCarousel,
} from '../../../components';
import { TROUBLESOME_SPIRIT_QUESTIONS_LIST } from './TroublesomeSpiritQuestionsCarousel.data';
import { IMAGES } from '../../../assets';

export const TroublesomeSpiritQuestionsCarouselScreen: React.FC<ITroublesomeSpiritQuestionsCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigateToNextQuest = useNavigateNextQuest();
    const [activeItem, setActiveItem] = useState(
      TROUBLESOME_SPIRIT_QUESTIONS_LIST[0],
    );
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      style: styles.title,
      preset: 'title',
      // TODO: remove
      variableStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    useEffect(() => {
      setActiveItem(TROUBLESOME_SPIRIT_QUESTIONS_LIST[activeItemIndex]);
    }, [activeItemIndex]);

    const onSubmit = useCallback(() => {
      dispatch(
        cacheSlice.actions.saveTroublesomeSpiritQuestionsItem(
          t(activeItem.titleKey),
        ),
      );
      navigateToNextQuest();
    }, [activeItem.titleKey, dispatch, navigateToNextQuest, t]);

    return (
      <ImageBackground
        // TODO: change to real default image
        source={
          (backgroundImage && IMAGES[backgroundImage]) ?? {
            uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
          }
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.select')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
            <TroublesomeSpiritQuestionsCarousel
              data={TROUBLESOME_SPIRIT_QUESTIONS_LIST}
              setIndex={setActiveItemIndex}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
