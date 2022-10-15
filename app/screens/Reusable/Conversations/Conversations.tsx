import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ExtendedButton, ExtendedText } from '../../../components';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { ConversationsCheckbox } from './components';
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
  } = route.params.data;

  const { t } = useTranslation();

  const [isConfirm, setIsConfirm] = useState(false);
  const onSubmit = useNavigateNextQuest();

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <SafeAreaView style={generalStyles.flex}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <ExtendedText style={styles.title}>{title}</ExtendedText>
          <ExtendedText style={styles.subtitle}>{description}</ExtendedText>
          <ConversationsCheckbox
            isConfirm={isConfirm}
            setIsConfirm={setIsConfirm}
          />
        </View>

        <ExtendedButton
          title={buttonTitle ?? t('buttons.next')}
          style={styles.button}
          disabled={!isConfirm}
          onPress={onSubmit}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
