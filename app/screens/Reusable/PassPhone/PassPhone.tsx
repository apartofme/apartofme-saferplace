import React, { useCallback, useState } from 'react';
import { Image, ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { IPassPhoneScreenProps } from './PassPhone.types';
import { styles } from './PassPhone.styles';
import {
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../hooks';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import { NicknameType } from '../../../utils/types';
import { Nullable, parseTextWithNickname } from '../../../utils';

export const PassPhoneScreen: React.FC<IPassPhoneScreenProps> = ({ route }) => {
  const { t } = useTranslation();
  const [titleArray, setTitleArray] = useState<Nullable<string[]>>(null);
  const parentNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;

  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const { title, description, buttonTitle, crossHeader, titleHasNickname } =
    route.params.data;

  useMount(() => {
    if (titleHasNickname) {
      setTitleArray(parseTextWithNickname(title));
      console.log(titleArray);
    }
  });

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

  const renderTitle = useCallback(() => {
    if (titleHasNickname) {
      const username = _.find(
        titleArray,
        value => value === 'parent' || value === 'child',
      );
      switch (username) {
        case NicknameType.Parent:
          return (
            <ExtendedText preset="title" style={styles.title}>
              {_.join(titleArray, '').replace(username, parentNickname)}
            </ExtendedText>
          );
        case NicknameType.Child:
          return (
            <ExtendedText preset="title" style={styles.title}>
              {_.join(titleArray, '').replace(username, childNickname)}
            </ExtendedText>
          );
      }
    } else {
      return (
        <ExtendedText preset="title" style={styles.title}>
          {title}
        </ExtendedText>
      );
    }
  }, [childNickname, parentNickname, title, titleArray, titleHasNickname]);

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
          buttonTitle={buttonTitle ?? t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          {renderTitle()}
          <Image source={IMAGES.WHITE_PENCIL} style={styles.avatar} />
          <ExtendedText preset="secondary-text" style={styles.description}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
