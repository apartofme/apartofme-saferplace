import React, { useCallback, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _, { values } from 'lodash';

import { ISelectCharmCarouselScreenProps } from './SelectCharmCarousel.types';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { COMPLETED_CHARMS_CAROUSEL } from './SelectedCharmCarousel.data';
import { styles } from './SelectCharmCarousel.styles';
import { questSlice } from '../../../../../redux/slices';

export const SelectCharmCarouselScreen: React.FC<ISelectCharmCarouselScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const currentLanguage = useAppSelector(
      state => state.settings.settings.language,
    ) as string;
    const allQuests = useAppSelector(
      state => state.quest.allQuests?.[currentLanguage],
    );
    const completedQuestsId = useAppSelector(
      state => state.quest.completedQuestsId,
    );

    const [currentPossition, setCurrentPossition] = useState<number>(0);

    const onSubmitPress = useCallback(() => {
      //   console.log(currentPossition);
      dispatch(questSlice.actions.setIsCurrentQuestCompleted(true));

      const completedQuestLineId =
        COMPLETED_CHARMS_CAROUSEL[currentPossition].id;
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
    }, [allQuests, currentPossition, dispatch, navigation]);

    const filteredCarouselData = useMemo(
      () =>
        _.filter(COMPLETED_CHARMS_CAROUSEL, item =>
          completedQuestsId.includes(+item.id),
        ),
      [completedQuestsId],
    );

    return (
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.select')}
          onSubmit={onSubmitPress}>
          <Carousel
            data={[...filteredCarouselData]}
            preset={CarouselType.ImageSubtitle}
            setCurrentPossition={setCurrentPossition}
            carouselItemStyle={styles.carouselItem}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
