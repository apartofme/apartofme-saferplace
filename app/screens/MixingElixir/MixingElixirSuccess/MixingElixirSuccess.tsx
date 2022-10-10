import moment from 'moment';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView } from 'react-native';

import { PLANTS_IMAGES } from '../../../assets';
import { BottomButtonView, ExtendedText } from '../../../components';
import { useAppDispatch } from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { styles } from './MixingElixirSuccess.styles';
import { IMixingElixirSuccessScreenProps } from './MixingElixirSuccess.types';

export const MixingElixirSuccessScreen: React.FC<IMixingElixirSuccessScreenProps> =
  ({ navigation, route }) => {
    const { plantImage, selectedPlantArea, isFirstTimeGarden } = route.params;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSubmit = useCallback(() => {
      const nowSeconds = moment().format('X');

      dispatch(
        cacheSlice.actions.updatePlantArea({
          plantArea: selectedPlantArea,
          image: plantImage,
          plantedAt: nowSeconds,
        }),
      );

      navigation.push('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: isFirstTimeGarden,
          isPlanting: false,
          isFirstTimeGarden,
        },
      });
    }, [
      dispatch,
      isFirstTimeGarden,
      navigation,
      plantImage,
      selectedPlantArea,
    ]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.back_to_clearing')}
          onSubmit={onSubmit}>
          <Image
            source={PLANTS_IMAGES[`${plantImage}_START`]}
            style={styles.image}
          />
          <ExtendedText>
            {t('screens.mixing_exixir.success.title')}
          </ExtendedText>
          <ExtendedText>
            {t('screens.mixing_exixir.success.description')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
