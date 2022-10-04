import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity, View } from 'react-native';

import { IDialogProps } from './Dialog.types';
import { styles } from './Dialog.styles';
import { ExtendedText } from '../../../../../components';
import { IMAGES } from '../../../../../assets';

export const Dialog: React.FC<IDialogProps> = ({
  data,
  onNextPress,
  currentIndex,
}) => {
  const { t } = useTranslation();

  const renderDialog = useCallback(() => {
    const currentDialogItem = _.find(data, currentIndex);
    console.log(currentDialogItem);
    if (currentDialogItem) {
      return (
        <ExtendedText style={styles.title} key={currentDialogItem.textKey}>
          {t(currentDialogItem.textKey)}
        </ExtendedText>
      );
    }
  }, [currentIndex, data, t]);

  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>{renderDialog()}</View>
      <TouchableOpacity style={styles.roundButton} onPress={onNextPress}>
        <Image
          // TODO: change to real image
          source={IMAGES.WHITE_PENCIL}
        />
      </TouchableOpacity>
    </View>
  );
};
