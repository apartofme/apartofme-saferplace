import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _, { values } from 'lodash';

import { ISelectCharmCarouselScreenProps } from './SelectCharmCarousel.types';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
  MainHeader,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import {
  useAppDispatch,
  useAppSelector,
  useParsedJSXTextNickname,
} from '../../../../../hooks';
import { COMPLETED_CHARMS_CAROUSEL } from './SelectedCharmCarousel.data';
import { styles } from './SelectCharmCarousel.styles';
import { questSlice } from '../../../../../redux/slices';
import { SVG } from '../../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SelectCharmCarouselScreen: React.FC<ISelectCharmCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const currentLanguage = useAppSelector(
      state => state.settings.settings.language ?? 'en',
    );
    const allQuests = useAppSelector(
      state => state.quest.allQuests?.[currentLanguage],
    );
    const completedQuestsId = useAppSelector(
      state => state.quest.completedQuestsId,
    );

    const [currentPosition, setCurrentPosition] = useState<number>(0);

    const onSubmitPress = useCallback(() => {
      dispatch(questSlice.actions.setIsCurrentQuestCompleted(true));

      const completedQuestLineId =
        COMPLETED_CHARMS_CAROUSEL[currentPosition + 1].id;
      const completedQuests = values(allQuests?.[completedQuestLineId].quests);

      dispatch(
        questSlice.actions.saveCurrentQuestLine({
          id: completedQuests[0].questLineId,
          quests: completedQuests,
        }),
      );
      dispatch(questSlice.actions.saveCurrentQuestIdx(0));
      // TODO: types
      navigation.push('QuestStack', {
        screen: completedQuests[0].type,
        params: {
          data: { ...completedQuests[0] },
        },
      });
    }, [allQuests, currentPosition, dispatch, navigation]);

    const filteredCarouselData = useMemo(
      () =>
        _.filter(COMPLETED_CHARMS_CAROUSEL, item =>
          completedQuestsId.includes(+item.id),
        ),
      [completedQuestsId],
    );

    const Title = useParsedJSXTextNickname({
      text: t('screens.completed_charm_carousel.title'),
      textHasNickname: true,
      preset: 'title',
      style: generalStyles.brilliantWhite,
    });

    const onArrowPress = useCallback(() => {
      dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
      navigation.goBack();
    }, [dispatch, navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={onArrowPress}
          />
          <BottomButtonView
            buttonTitle={t('buttons.select')}
            onSubmit={onSubmitPress}
            style={styles.container}>
            <Title />
            <Carousel
              data={[...filteredCarouselData]}
              preset={CarouselType.Card}
              setIndex={setCurrentPosition}
              style={styles.carousel}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
