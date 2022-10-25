import React, { useCallback } from 'react';
import { FlatList, ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IInstructionScreenProps } from './Instruction.types';
import { styles } from './Instruction.styles';
import { BottomButtonView, ExtendedText } from '../../../components';

import { generalStyles } from '../../../utils/styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { INSTRUCTION_LIST } from '../../../constants/quest';
import { IInstructionItem } from '../../ParentGrounding';

export const InstructionScreen: React.FC<IInstructionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();

  const {
    title,
    titleHasNickname,
    backgroundImage,
    crossHeader,
    buttonTitle,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const onSubmit = useNavigateNextQuest();

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

  const renderItem = useCallback(
    ({ item }: { item: IInstructionItem }) => (
      <View style={styles.instructionContainer}>
        <item.image />
        <ExtendedText preset="heading" style={styles.instructionTitle}>
          {t(item.titleKey)}
        </ExtendedText>
      </View>
    ),
    [t],
  );

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
          <FlatList data={INSTRUCTION_LIST} renderItem={renderItem} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
