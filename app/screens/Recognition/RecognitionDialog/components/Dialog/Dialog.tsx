import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity, View } from 'react-native';

import { IDialogProps } from './Dialog.types';
import { styles } from './Dialog.styles';
import { ExtendedText } from '../../../../../components';
import { IMAGES } from '../../../../../assets';
import { useNavigation } from '@react-navigation/native';

export const Dialog: React.FC<IDialogProps> = ({
  data,
  currentIndex,
  setCurrentIndex,
}) => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  const onNextPress = useCallback(() => {
    if (data.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // TODO: change to correct
      navigation.navigate('ComingSoon');
    }
  }, [currentIndex, data.length, navigation, setCurrentIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        {_.map(
          data,
          (item, index) =>
            index === currentIndex && (
              <ExtendedText style={styles.title} key={item.textKey}>
                {t(item.textKey)}
              </ExtendedText>
            ),
        )}
      </View>
      <TouchableOpacity style={styles.roundButton} onPress={onNextPress}>
        <Image
          // TODO: change to real image
          source={IMAGES.WHITE_PENCIL}
        />
      </TouchableOpacity>
    </View>
  );
};
