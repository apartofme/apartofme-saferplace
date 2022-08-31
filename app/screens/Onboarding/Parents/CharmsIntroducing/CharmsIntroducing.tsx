import _ from 'lodash';
import React, { useState } from 'react';
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
import { ICharmsIntroducingScreenProps } from './CharmsIntroducing.props';

export const CharmsIntroducingScreen: React.FC<ICharmsIntroducingScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const [currentPossition, setCurrentPossition] = useState<number>(0);

    return (
      // TODO: remove noop to real function
      <SafeAreaView style={generalStyles.whFlex}>
        <BottomButtonView
          buttonTitle={t(
            currentPossition > ABSOLUTE_PROGRESS_VALUE
              ? 'buttons.ready'
              : 'buttons.next',
          ).toUpperCase()}
          onSubmit={_.noop}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
          <Carousel
            data={CHARMS_CAROUSEL}
            preset={CarouselType.ImageTitleSubTitle}
            setCurrentPossition={setCurrentPossition}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
