import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { ITroublesomeSpiritQuestionsCarouselScreenProps } from './TroublesomeSpiritQuestionsCarousel.types';
import { styles } from './TroublesomeSpiritQuestionsCarousel.styles';
import {
  useAppDispatch,
  useMount,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedText,
  TROUBLESOME_SPIRIT_QUESTIONS,
} from '../../../components';
import { CHARMS_BACKGROUNDS } from '../../../assets';

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
    const [troublesomeData, setTroublesomeData] = useState(
      _.cloneDeep(TROUBLESOME_SPIRIT_QUESTIONS),
    );
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [activeItem, setActiveItem] = useState(
      troublesomeData[activeItemIndex],
    );

    useMount(() => {
      setTroublesomeData(prev =>
        _.map(prev, item =>
          _.merge(item, {
            titleKey: t(item.titleKey ?? ''),
          }),
        ),
      );
    });

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      style: styles.title,
      preset: 'title',
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    useEffect(() => {
      setActiveItem(troublesomeData[activeItemIndex]);
    }, [activeItemIndex, troublesomeData]);

    const onSubmit = useCallback(() => {
      dispatch(cacheSlice.actions.saveTroublesomeItem(activeItem));
      navigateToNextQuest();
    }, [activeItem, dispatch, navigateToNextQuest]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
            <Carousel
              preset={CarouselType.Card}
              data={troublesomeData}
              setIndex={setActiveItemIndex}
              carouselStyle={styles.carousel}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
