import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { ISelectPlayerScreenProps } from './SelectPlayer.types';
import { styles } from './SelectPlayer.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../components';
import { useTranslation } from 'react-i18next';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';

export const SelectPlayerScreen: React.FC<ISelectPlayerScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState<string[]>([]);
  const { t } = useTranslation();

  const data = route.params.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t('buttons.ready')}
        onSubmit={data && data.onSubmit}
        isDisabledButton={!selectedPlayer.length}
        style={styles.container}>
        <ExtendedText preset="title" style={styles.title}>
          {t(data && data.titleKey)}
        </ExtendedText>
        <RadioButtonList
          data={data && data.radioButtonList}
          type={RadioButtonListType.Single}
          setSelected={setSelectedPlayer}
          radioButtonStyle={styles.radioButton}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
