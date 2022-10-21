import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import {
  ABSOLUTE_PROGRESS_VALUE,
  CHARMS_CAROUSEL,
} from './CharmsIntroducing.data';
import { ICharmsIntroducingScreenProps } from './CharmsIntroducing.types';
import { styles } from './CharmsIntroducing.styles';

export const CharmsIntroducingScreen: React.FC<ICharmsIntroducingScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const [currentPossition, setCurrentPossition] = useState<number>(0);

    const onSubmit = useCallback(() => {
      navigation.navigate('ParentGroundingStack');
    }, [navigation]);

    return (
      // TODO: remove noop to real function
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t(
            currentPossition > ABSOLUTE_PROGRESS_VALUE
              ? 'buttons.ready'
              : 'buttons.next',
          ).toUpperCase()}
          onSubmit={onSubmit}>
          <Carousel
            data={CHARMS_CAROUSEL}
            preset={CarouselType.ImageTitleSubtitle}
            setIndex={setCurrentPossition}
            carouselItemStyle={styles.container}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
