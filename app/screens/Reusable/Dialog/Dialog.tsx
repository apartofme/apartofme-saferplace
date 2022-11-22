import _ from 'lodash';
import React, { useMemo } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { CHARMS_SVG, SVG } from '../../../assets/svg';
import { OPEN_DIALOG_IDS } from '../../../constants/quest';
import { useAppSelector } from '../../../hooks';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks/quest';
import { generalStyles } from '../../../utils/styles';
import { CharmsSvgKeys } from '../../../utils/types';
import { styles } from './Dialog.styles';
import { IDialogScreenProps } from './Dialog.types';

const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;

export const DialogScreen: React.FC<IDialogScreenProps> = ({ route }) => {
  const {
    title,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
    image,
    backgroundImage,
  } = route.params.data;

  const { currentDayQuestsStack } = useAppSelector(state => state.quest);

  const onSubmit = useNavigateNextQuest();

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'heading',
    style: generalStyles.brilliantWhite,
  });

  const isOpeningDialog = useMemo(() => {
    if (currentDayQuestsStack?.length > 0) {
      return !!_.find(
        OPEN_DIALOG_IDS,
        item =>
          currentDayQuestsStack[currentDayQuestsStack.length - 1] === item,
      );
    }
    return false;
  }, [currentDayQuestsStack]);

  const Icon = CHARMS_SVG[(image ?? 'HappySidekickGuideIcon') as CharmsSvgKeys];

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <View style={styles.container}>
          {!isOpeningDialog && (
            <View style={styles.header}>
              <Header />
            </View>
          )}
          <View style={styles.iconContainer}>{Icon && <Icon />}</View>
          <View style={generalStyles.flex} />
          <View style={generalStyles.aiCenter}>
            <View style={styles.dialogContainer}>
              <Title />
            </View>
            <TouchableOpacity onPress={onSubmit} style={styles.roundButton}>
              <RoundTriangleButtonIcon />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
