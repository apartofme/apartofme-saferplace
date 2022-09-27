import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Modal from 'react-native-modal';

import { IMAGES } from '../../../assets';
import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
  TrySomethingCarousel,
} from '../../../components';
// TODO: refactor
import {
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../hooks/quest';
import { generalStyles } from '../../../utils/styles';
import { TrySomethingModal } from './components';
import { TRY_SOMETHING_ITEMS } from './TrySomethingNewCarousel.data';
import { styles } from './TrySomethingNewCarousel.styles';
import { ITrySomethingNewCarouselScreenProps } from './TrySomethingNewCarousel.types';

export const TrySomethingNewCarouselScreen: React.FC<ITrySomethingNewCarouselScreenProps> =
  ({}) => {
    // TODO: uncommented when release
    // const { title, description, backgroundImage } = route.params.data;
    const title = 'some';
    const description = 'description';
    const backgroundImage = IMAGES.WHITE_BACK_ARROW;

    const [activeItem, setActiveItem] = useState(TRY_SOMETHING_ITEMS[0]);

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [isModal, setIsModal] = useState(false);

    const { t } = useTranslation();

    const goBack = useNavigatePrevQuest();
    const onSubmit = useNavigateNextQuest();

    const setModalStatus = useCallback(() => {
      setIsModal(!isModal);
    }, [isModal]);

    useEffect(() => {
      setActiveItem(TRY_SOMETHING_ITEMS[activeItemIndex]);
    }, [activeItemIndex]);

    return (
      <ImageBackground source={backgroundImage} style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Modal isVisible={isModal} style={styles.modal}>
            <TrySomethingModal
              setModalStatus={setModalStatus}
              title={title}
              subtitle={description}
              data={TRY_SOMETHING_ITEMS[activeItemIndex]}
            />
          </Modal>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            rightIcon={IMAGES.WHITE_PENCIL}
            onLeftIconPress={goBack}
            onRightIconPress={onSubmit}
          />
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <ExtendedText>{title}</ExtendedText>
              <ExtendedText style={styles.subtitle}>{description}</ExtendedText>
            </View>
            <TrySomethingCarousel
              data={TRY_SOMETHING_ITEMS}
              setIndex={setActiveItemIndex}
            />
            <View style={styles.buttonsConainer}>
              <ExtendedButton
                style={styles.selectButton}
                title={t('buttons.select')}
              />
              <ExtendedButton
                title={t('buttons.create_your_own')}
                onPress={() => setIsModal(true)}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
