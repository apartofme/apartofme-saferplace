import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, View } from 'react-native';
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

export const EmojiSelectionScreen: React.FC<IEmojiSelectionScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const { title, buttonTitle, titleHasNickname } = route.params.data;
  const parentNickname = useAppSelector(state => state.user.parent?.nickname);
  const childNickname = useAppSelector(state => state.user.child?.nickname);
  const [emoji, setEmoji] = useState('');
  const [titleArray, setTitleArray] = useState<Nullable<string[]>>(null);

  useMount(() => {
    if (titleHasNickname) {
      setTitleArray(parseTextWithNickname(title));
    }
  });

  const onSubmit = useNavigateNextQuest();
  const goBack = useNavigatePrevQuest();

  const renderTitle = () => {
    if (titleHasNickname) {
      return (
        <View style={generalStyles.row}>
          {_.map(titleArray, (item: string) => {
            switch (item) {
              case NicknameType.Parent:
                return (
                  <ExtendedText key={item} preset="body-bold">
                    {parentNickname}
                  </ExtendedText>
                );
              case NicknameType.Child:
                return (
                  <ExtendedText key={item} preset="body-bold">
                    {childNickname}
                  </ExtendedText>
                );
              default:
                return (
                  <ExtendedText key={item} preset="body-regular">
                    {item}
                  </ExtendedText>
                );
            }
          })}
        </View>
      );
    } else {
      return <ExtendedText preset="body-regular">{title}</ExtendedText>;
    }
  };

  return (
    <ImageBackground
      // TODO: change to real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} onLeftIconPress={goBack} />
      <BottomButtonView
        buttonTitle={buttonTitle ?? t('buttons.select')}
        onSubmit={onSubmit}>
        {renderTitle()}
        <ExtendedText>{t(emoji)}</ExtendedText>
        <EmojiSlider setEmojiKey={setEmoji} />
      </BottomButtonView>
    </ImageBackground>
  );
};
