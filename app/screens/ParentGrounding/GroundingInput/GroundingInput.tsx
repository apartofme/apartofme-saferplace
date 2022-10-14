import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { GROUNDING_RADIO_BUTTON_ITEMS } from './GroundingInput.data';
import { styles } from './GroundingInput.styles';
import { IGroundingStartScreenProps } from './GroundingInput.types';

export const GroundingInputScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<string[]>([]);

  const onSubmit = useCallback(() => {
    navigation.navigate('GroundingInstruction');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView onSubmit={onSubmit} buttonTitle={t('buttons.next')}>
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('Did you find it easy to focus on the feelings in your feet?')}
          </ExtendedText>
          <RadioButtonList
            type={RadioButtonListType.Single}
            setSelected={setSelected}
            data={GROUNDING_RADIO_BUTTON_ITEMS}
          />
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
