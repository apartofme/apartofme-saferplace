import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import {
  useAppDispatch,
  useAppSelector,
  useParsedJSXTextNickname,
} from '../../../../../hooks';
import { ExtendedButton, ExtendedText } from '../../../../../components';
import { questSlice } from '../../../../../redux/slices';
import { COLORS } from '../../../../../themes/colors';
import { generalStyles } from '../../../../../utils/styles';
import { ISkipCharmAcknowledgementScreenProps } from './SkipCharmAcknowledgement.types';

export const SkipCharmAcknowledgementScreen: React.FC<ISkipCharmAcknowledgementScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();
    const { isFirst } = route.params;
    const dispatch = useAppDispatch();

    const interruptedQuestLine = useAppSelector(
      state => state.quest.interruptedQuestLine,
    );

    const onSabmit = useCallback(() => {
      if (isFirst) {
        navigation.push('SkipCharmEmojiSelection', { isChild: false });
        return;
      }
      if (interruptedQuestLine) {
        dispatch(
          questSlice.actions.saveCompletedQuestsId(+interruptedQuestLine?.id),
        );
        dispatch(questSlice.actions.updateCurrentDayQuestsStack());
        dispatch(questSlice.actions.updateInterruptedQuestLine(null));

        navigation.push('Garden', {
          isFirstTime: false,
          isFirstTimeGarden: false,
          isPlanting: false,
        });
      }
    }, [dispatch, interruptedQuestLine, isFirst, navigation]);

    const Title = useParsedJSXTextNickname({
      text: t(
        isFirst
          ? 'screens.skip-charm-acknowledgement.first-title'
          : 'screens.skip-charm-acknowledgement.second-title',
      ),
      textHasNickname: true,
      preset: 'title',
      // style: styles.title,
      variableStyle: { color: COLORS.PRIMARY_ORANGE },
    });

    return (
      <SafeAreaView style={generalStyles.flex}>
        {/* // TODO: uncoment when icon will be done */}
        {/* <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        /> */}
        {/* // TODO: change to real image */}
        {/* <Image source={IMAGES.LOGO} /> */}
        <Title />
        <ExtendedText>
          {t(
            isFirst
              ? 'screens.skip-charm-acknowledgement.first-description'
              : 'screens.skip-charm-acknowledgement.second-description',
          )}
        </ExtendedText>
        <ExtendedButton title="buttons.next" onPress={onSabmit} />
      </SafeAreaView>
    );
  };
