import React, { useCallback } from 'react';
import { FlatList, ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IInstructionScreenProps } from './GroundingInstruction.types';
import { styles } from './GroundingInstruction.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import {
  IGroundingInstructionItem,
  INSTRUCTION_LIST,
} from './GroundingInstruction.data';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingInstructionScreen: React.FC<IInstructionScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: IGroundingInstructionItem }) => (
      <View style={styles.instructionContainer}>
        <item.image />
        <ExtendedText preset="heading" style={styles.instructionTitle}>
          {t(item.titleKey)}
        </ExtendedText>
      </View>
    ),
    [t],
  );

  const onSubmit = useCallback(() => {
    navigation.push('CloseEyes');
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.ready')}
          onSubmit={onSubmit}
          style={styles.container}>
          <ExtendedText preset="title" style={styles.title}>
            {t('screens.parent_grounding_exercise.instruction.title')}
          </ExtendedText>
          <FlatList data={INSTRUCTION_LIST} renderItem={renderItem} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
