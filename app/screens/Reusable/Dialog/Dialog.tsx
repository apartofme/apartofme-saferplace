import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { CHARMS_SVG, SVG } from '../../../assets/svg';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks/quest';
import { generalStyles } from '../../../utils/styles';
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

  const Icon = CHARMS_SVG[image ?? 'HappySidekickGuideIcon'];

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.container}>
          <View style={styles.iconContainer}>{Icon && <Icon />}</View>
          <View style={styles.dialogContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Title />
            </ScrollView>
          </View>
          <TouchableOpacity onPress={onSubmit} style={styles.roundButton}>
            <RoundTriangleButtonIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
