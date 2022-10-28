import React, { useCallback, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  ISelectDrawBuildListItem,
  ISelectDrawBuildScreenProps,
} from './SelectDrawBuild.types';
import { styles } from './SelectDrawBuild.styles';
import {
  useNegativeNavigateTo,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';
import { BottomButtonView, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import {
  SelectDrawBuildType,
  SELECT_DRAW_BUILD_LIST,
} from './SelectDrawBuild.data';
import { CHARMS_BACKGROUNDS } from '../../../assets';

export const SelectDrawBuildScreen: React.FC<ISelectDrawBuildScreenProps> = ({
  route,
}) => {
  const {
    title,
    buttonTitle,
    crossHeader,
    backgroundImage,
    negativeNavigatesTo,
    positiveNavigatesTo,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const { t } = useTranslation();

  const isBuildSelected = selectedAnswer === SelectDrawBuildType.Build;

  const onSubmit = useNegativeNavigateTo(negativeNavigatesTo, isBuildSelected);

  const renderItem = useCallback(
    ({ item }: { item: ISelectDrawBuildListItem }) => {
      const onPlayerPress = () => {
        setSelectedAnswer(item.id);
      };

      return (
        <Pressable
          onPress={onPlayerPress}
          style={[
            styles.listItemContainer,
            selectedAnswer === item.id && styles.activeItem,
          ]}>
          <View style={styles.maw200}>
            <ExtendedText preset="heading" style={styles.listItemTitle}>
              {t(item.titleKey)}
            </ExtendedText>
            <ExtendedText
              preset="tertiary-text-regular"
              style={generalStyles.brilliantWhite}>
              {t(item.descriptionKey)}
            </ExtendedText>
          </View>
          <item.image width={80} height={80} />
        </Pressable>
      );
    },
    [selectedAnswer, t],
  );

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          isDisabledButton={!selectedAnswer}
          style={styles.container}>
          <ExtendedText preset="title" style={styles.title}>
            {title ?? t('screens.select_draw_build.title')}
          </ExtendedText>
          <FlatList
            data={SELECT_DRAW_BUILD_LIST}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </BottomButtonView>

        <Pressable
          onPress={usePositiveNavigateTo(positiveNavigatesTo)}
          style={styles.bottomButton}>
          <ExtendedText
            preset="secondary-text"
            style={generalStyles.brilliantWhite}>
            {t('buttons.not_now')}
          </ExtendedText>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};
