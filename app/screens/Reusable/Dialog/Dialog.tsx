import React, { useMemo } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { CHARMS_SVG, SVG } from '../../../assets/svg';
import { DAY_14_CLOSING_DIALOGUE_ID } from '../../../constants/quest';
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

  const { currentQuestIdx, currentQuestLine } = useAppSelector(
    state => state.quest,
  );

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

  const isShowHeader = useMemo(() => {
    if (currentQuestLine?.id === DAY_14_CLOSING_DIALOGUE_ID) {
      return currentQuestIdx !== 9;
    }
    return currentQuestIdx > 0;
  }, [currentQuestIdx, currentQuestLine]);

  const Icon = CHARMS_SVG[(image ?? 'HappySidekickGuideIcon') as CharmsSvgKeys];

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <View style={styles.container}>
          {isShowHeader && (
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
