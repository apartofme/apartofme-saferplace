import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
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
import { IMAGES } from '../../../assets';

export const GroundingInstructionScreen: React.FC<IInstructionScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: IGroundingInstructionItem }) => (
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

  const onSubmit = useCallback(() => {
    navigation.push('GroundingAcknowledgement', {
      data: {
        title: 'screens.parent_grounding_exercise.timer_acknowledgement.title',
        buttonTitle: 'buttons.start_timer',
        image: IMAGES.LOGO,
        backgroundImage: {
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        },
        onNextRouteName: 'GroundingTimer',
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t('buttons.ready')}
        onSubmit={onSubmit}
        style={styles.container}>
        <ExtendedText>
          {t('screens.parent_grounding_exercise.instruction.title')}
        </ExtendedText>
        <FlatList data={INSTRUCTION_LIST} renderItem={renderItem} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
