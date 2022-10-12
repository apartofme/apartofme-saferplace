import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  IInstructionListItem,
  IInstructionScreenProps,
} from './Instruction.types';
import { styles } from './Instruction.styles';
import { BottomButtonView, ExtendedText } from '../../../components';

import { generalStyles } from '../../../utils/styles';
import { INSTRUCTION_LIST } from './Instruction.data';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';

export const InstructionScreen: React.FC<IInstructionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();

  const {
    title,
    titleHasNickname,
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
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const renderItem = useCallback(
    ({ item }: { item: IInstructionListItem }) => (
      <View style={styles.instructionContainer}>
        <Image source={item.image} style={styles.instructionImage} />
        <ExtendedText
          preset="tertiary-text-medium"
          style={styles.instructionTitle}>
          {t(item.titleKey)}
        </ExtendedText>
      </View>
    ),
    [t],
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <Header />
      <BottomButtonView
        buttonTitle={buttonTitle ?? t('buttons.ready')}
        onSubmit={onSubmit}
        style={styles.container}>
        <Title />
        <FlatList data={INSTRUCTION_LIST} renderItem={renderItem} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
