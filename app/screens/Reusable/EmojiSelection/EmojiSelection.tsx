import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { IEmojiSelectionScreenProps } from './EmojiSelection.types';

export const EmojiSelectionScreen: React.FC<IEmojiSelectionScreenProps> = ({
  navigation,
  route,
}) => {
  const { onSubmit } = route.params.data;
  const { t } = useTranslation();

  // TODO: change when user state will be modify
  const parentNickname = useAppSelector(state => state.user.user?.displayName);

  //   const [emoji, setEmoji] = useState<EmojiType>(EmojiType.Normal);
  return (
    <ImageBackground
      // TODO: change to real image
      source={IMAGES.LOGO}
      style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView buttonTitle={t('buttons.select')} onSubmit={onSubmit}>
        <ExtendedText preset="body-regular">
          {parentNickname} {t('screens.emoji_selction.title')}
        </ExtendedText>

        {/*
        // TODO: uncomment when modify EmojiSlider
        <View>{emoji}</View>
        <EmojiSlider selectedEmoji={emoji} setSelectedEmoji={setEmoji} />
         */}
      </BottomButtonView>
    </ImageBackground>
  );
};
