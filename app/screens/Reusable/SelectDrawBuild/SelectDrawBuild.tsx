import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  ISelectDrawBuildListItem,
  ISelectDrawBuildScreenProps,
} from './SelectDrawBuild.types';
import { styles } from './SelectDrawBuild.styles';
import {
  useNavigatePrevQuest,
  useNegativeNavigateTo,
  usePositiveNavigateTo,
} from '../../../hooks';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import {
  SelectDrawBuildType,
  SELECT_DRAW_BUILD_LIST,
} from './SelectDrawBuild.data';

export const SelectDrawBuildScreen: React.FC<ISelectDrawBuildScreenProps> = ({
  route,
}) => {
  const { buttonTitle, crossHeader, negativeNavigatesTo, positiveNavigatesTo } =
    route.params.data;

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const { t } = useTranslation();
  const goBack = useNavigatePrevQuest();

  const isBuildSelected = selectedAnswer === SelectDrawBuildType.Build;

  const onSubmit = useNegativeNavigateTo(negativeNavigatesTo, isBuildSelected);

  const renderHeader = useCallback(() => {
    if (crossHeader) {
      return (
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
          // TODO: change to real image & function
          rightIcon={IMAGES.WHITE_BACK_ARROW}
          onRightIconPress={goBack}
        />
      );
    } else {
      return (
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
        />
      );
    }
  }, [crossHeader, goBack]);

  const renderItem = useCallback(
    ({ item }: { item: ISelectDrawBuildListItem }) => {
      const onPlayerPress = () => {
        setSelectedAnswer(item.id);
      };

      return (
        <TouchableOpacity
          onPress={onPlayerPress}
          style={[
            styles.listItemContainer,
            selectedAnswer === item.id && styles.activeBorder,
          ]}>
          <View style={styles.maw200}>
            <ExtendedText preset="heading" style={styles.listItemTitle}>
              {t(item.titleKey)}
            </ExtendedText>
            <ExtendedText preset="tertiary-text-regular">
              {t(item.descriptionKey)}
            </ExtendedText>
          </View>

          <Image source={item.image} style={styles.listItemImage} />
        </TouchableOpacity>
      );
    },
    [selectedAnswer, t],
  );

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {renderHeader()}
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          isDisabledButton={!selectedAnswer}
          style={styles.container}>
          <ExtendedText preset="title" style={styles.title}>
            {t('screens.select_draw_build.title')}
          </ExtendedText>
          <FlatList data={SELECT_DRAW_BUILD_LIST} renderItem={renderItem} />
        </BottomButtonView>

        <ExtendedButton
          onPress={usePositiveNavigateTo(positiveNavigatesTo)}
          title={t('buttons.not_now')}
          style={styles.button}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
