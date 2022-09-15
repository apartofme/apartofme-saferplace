import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';

import {
  IInstructionListItem,
  IInstructionScreenProps,
} from './Instruction.types';
import { styles } from './Instruction.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { useTranslation } from 'react-i18next';
import { generalStyles } from '../../../utils/styles';
import { INSTRUCTION_LIST } from './Instruction.data';

export const InstructionScreen: React.FC<IInstructionScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();

  const data = route.params.data;

  const renderItem = useCallback(
    ({ item }: { item: IInstructionListItem }) => (
      <View style={styles.instructionContainer}>
        <Image source={item.imageSource} style={styles.instructionImage} />
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
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t(data && data.buttonTitleKey)}
        onSubmit={data && data.onSubmit}
        style={styles.container}>
        <ExtendedText preset="title" style={styles.title}>
          {t(data && data.titleKey)}
        </ExtendedText>
        <FlatList data={INSTRUCTION_LIST} renderItem={renderItem} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
