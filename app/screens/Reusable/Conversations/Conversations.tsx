import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { ExtendedButton, ExtendedText, RadioButton } from '../../../components';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './Conversations.styles';
import { IConversationsScreenProps } from './Conversations.types';

export const ConversationsScreen: React.FC<IConversationsScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
    backgroundImage,
  } = route.params.data;

  const { t } = useTranslation();

  const [isConfirm, setIsConfirm] = useState(false);
  const onSubmit = useNavigateNextQuest();

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const onConfirmPress = useCallback(() => {
    setIsConfirm(!isConfirm);
  }, [isConfirm]);

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.container}>
            <ExtendedText style={styles.title} preset="large-title">
              {title}
            </ExtendedText>
            <ExtendedText style={styles.subtitle} preset="body-regular">
              {description}
            </ExtendedText>
            <RadioButton
              title={t('buttons.confirm_read_guidance')}
              isActive={isConfirm}
              onPress={onConfirmPress}
            />
          </View>

          <ExtendedButton
            title={buttonTitle || t('buttons.next')}
            style={styles.button}
            disabled={!isConfirm}
            isArrow
            onPress={onSubmit}
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
