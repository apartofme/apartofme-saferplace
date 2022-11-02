import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { BottomButtonView, ExtendedText } from '../../../components';
import { useNavigateNextQuest } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ReusableElixirInstruction.styles';
import { IReusableElixirInstructionScreenProps } from './ReusableElixirInstruction.types';

export const ReusableElixirInstructionScreen: React.FC<IReusableElixirInstructionScreenProps> =
  ({ route }) => {
    const { title, buttonTitle } = route.params.data;
    const { t } = useTranslation();
    const navigateToNextQuest = useNavigateNextQuest();

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={navigateToNextQuest}>
            <View style={styles.container}>
              <ExtendedText
                preset="title"
                style={[generalStyles.brilliantWhiteCenter, styles.title]}>
                {title}
              </ExtendedText>
              <ElixirThreeIcon />
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
