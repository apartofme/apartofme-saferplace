import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './Alert.styles';
import { IAlertScreenProps } from './Alert.types';

export const AlertScreen: React.FC<IAlertScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  const title = useMemo(() => {
    const titleText = t('screens.alert');
    const firstLine = titleText.slice(0, titleText.indexOf('\n'));
    const restText = titleText.slice(titleText.indexOf('\n'), titleText.length);
    return (
      <>
        <ExtendedText preset="secondary-text" style={generalStyles.boldText}>
          {firstLine}
        </ExtendedText>
        <ExtendedText preset="secondary-text">{restText}</ExtendedText>
      </>
    );
  }, [t]);

  return (
    <SafeAreaView style={[generalStyles.flex]}>
      <BottomButtonView
        buttonTitle={t('buttons.ok').toUpperCase()}
        onSubmit={navigation.goBack}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>{title}</ExtendedText>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
