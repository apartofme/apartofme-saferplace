import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText } from '../../../components';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks/quest';
import { generalStyles } from '../../../utils/styles';
import { styles } from './Dialog.styles';
import { IDialogScreenProps } from './Dialog.types';

export const DialogScreen: React.FC<IDialogScreenProps> = ({ route }) => {
  const { title, crossHeader, titleHasNickname } = route.params.data;

  const onSubmit = useNavigateNextQuest();

  const Header = useRenderQuestHeader(crossHeader ?? false);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'body-regular',
    style: styles.title,
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <View style={styles.container}>
          <Image source={IMAGES.LOGO} style={styles.image} />

          <View style={styles.dialogContainer}>
            <Title />
          </View>
          <TouchableOpacity onPress={onSubmit} style={styles.roundButton}>
            <Image
              // TODO: change to real image
              source={IMAGES.WHITE_PENCIL}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
