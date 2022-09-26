import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import _ from 'lodash';

import {
  BottomButtonView,
  EmojiSlider,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { useAppSelector, useMount } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { IEmojiSelectionScreenProps } from './EmojiSelection.types';
import { NicknameType } from '../../../utils/types';
import { Nullable, parseTextWithNickname } from '../../../utils';
import {
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../hooks/quest';
import { styles } from './EmojiSelection.styles';

export const EmojiSelectionScreen: React.FC<IEmojiSelectionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const { title, buttonTitle, crossHeader, titleHasNickname } =
    route.params.data;
  const parentNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const [emoji, setEmoji] = useState('');
  const [titleArray, setTitleArray] = useState<Nullable<string[]>>(null);

  useMount(() => {
    if (titleHasNickname) {
      setTitleArray(parseTextWithNickname(title));
    }
  });

  const onSubmit = useNavigateNextQuest();
  const goBack = useNavigatePrevQuest();

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
      // TODO: change to real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {renderHeader()}
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          style={styles.container}>
          {renderTitle()}
          <ExtendedText>{t(emoji)}</ExtendedText>
          <EmojiSlider setEmojiKey={setEmoji} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
