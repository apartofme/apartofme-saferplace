import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

import { IConversationsCheckboxProps } from './ConversationsCheckbox.types';
import { styles } from './ConversationsCheckbox.styles';
import { ExtendedText } from '../../../../../components';

export const ConversationsCheckbox: React.FC<IConversationsCheckboxProps> = ({
  isConfirm,
  setIsConfirm,
}) => {
  const { t } = useTranslation();

  const onPress = useCallback(() => {
    setIsConfirm(!isConfirm);
  }, [isConfirm, setIsConfirm]);

  return (
    <TouchableOpacity
      // TODO: change to correct styles
      style={[styles.container, isConfirm && styles.whiteBackground]}
      onPress={onPress}>
      <ExtendedText>{t('buttons.confirm_read_guidance')}</ExtendedText>
    </TouchableOpacity>
  );
};
