import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

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
import { generalStyles } from '../../../utils/styles';
import { INSTRUCTION_LIST } from './Instruction.data';

export const InstructionScreen: React.FC<IInstructionScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();

  const { buttonTitle } = route.params.data;

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
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={buttonTitle}
        onSubmit={_.noop}
        style={styles.container}>
        <ExtendedText preset="title" style={styles.title}>
          {t('screens.instruction.title')}
        </ExtendedText>
        <FlatList data={INSTRUCTION_LIST} renderItem={renderItem} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
