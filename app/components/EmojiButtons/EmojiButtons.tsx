import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './EmojiButtons.styles';
import { EmojiType, IEmojiButton, IEmojiButtons } from './EmojiButtons.types';
import { EMOTIONS_SVG } from '../../assets/svg';
import { BottomButtonView } from '../BottomButtonView';
import { EMOJI_BUTTONS_LIST } from './EmojiButtons.data';
import { ExtendedText } from '../ExtendedText';
import { generalStyles } from '../../utils/styles';

const EmotionalBlobDefaultIcon = EMOTIONS_SVG.EmotionalBlobDefaultIcon;
const EmotionalBlobSuperRelaxedIcon =
  EMOTIONS_SVG.EmotionalBlobSuperRelaxedIcon;
const EmotionalBlobRelaxedIcon = EMOTIONS_SVG.EmotionalBlobRelaxedIcon;
const EmotionalBlobOkIcon = EMOTIONS_SVG.EmotionalBlobOkIcon;
const EmotionalBlobStressedIcon = EMOTIONS_SVG.EmotionalBlobStressedIcon;
const EmotionalBlobVeryStressedIcon =
  EMOTIONS_SVG.EmotionalBlobVeryStressedIcon;

export const EmojiButtons: React.FC<IEmojiButtons> = ({
  buttonTitle,
  onSubmit,
  setEmojiKey,
}) => {
  const { t } = useTranslation();
  const [selectedEmoji, setSelectedEmoji] = useState(EmojiType.NO);
  const [emojiTextKey, setEmojiTextKey] = useState<string>(EmojiType.NO);

  const EmotionalBlobIcon = useMemo(() => {
    switch (selectedEmoji) {
      case EmojiType.NO:
        return EmotionalBlobDefaultIcon;

      case EmojiType.SuperRelaxed:
        return EmotionalBlobSuperRelaxedIcon;

      case EmojiType.Relaxed:
        return EmotionalBlobRelaxedIcon;

      case EmojiType.Ok:
        return EmotionalBlobOkIcon;

      case EmojiType.Stressed:
        return EmotionalBlobStressedIcon;

      case EmojiType.VeryStressed:
        return EmotionalBlobVeryStressedIcon;
    }
  }, [selectedEmoji]);

  useEffect(() => {
    setEmojiTextKey(`labels.emoji.${selectedEmoji}`);
    setEmojiKey(t(emojiTextKey));
  }, [emojiTextKey, selectedEmoji, setEmojiKey, t]);

  const renderItem = useCallback(
    ({ item }: { item: IEmojiButton }) => {
      const onEmojiPress = () => {
        setSelectedEmoji(item.id);
      };

      const isActive = item.id === selectedEmoji;

      return (
        <Pressable
          key={item.id}
          onPress={onEmojiPress}
          style={[styles.emojiButton, isActive && styles.emojiButtonActive]}>
          <View style={isActive && styles.emojiBorder} />
          <item.icon />
        </Pressable>
      );
    },
    [selectedEmoji],
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.blobIcon}>
        <EmotionalBlobIcon />
      </View>
      <BottomButtonView
        buttonTitle={buttonTitle}
        onSubmit={onSubmit}
        isDisabledButton={selectedEmoji === EmojiType.NO}
        style={styles.container}>
        <View style={generalStyles.row}>
          <View style={styles.indicator}>
            <ExtendedText
              preset="tertiary-text-medium"
              style={generalStyles.brilliantWhiteCenter}>
              {t(emojiTextKey)}
            </ExtendedText>
          </View>
        </View>
        <FlatList
          data={EMOJI_BUTTONS_LIST}
          renderItem={renderItem}
          horizontal={true}
          style={styles.emojiButtons}
        />
      </BottomButtonView>
    </View>
  );
};
