import { ImageOrVideo } from 'react-native-image-crop-picker';

import { Nullable } from '../../utils';

export interface IPhotoPickerProps {
  selectedImage?: Nullable<ImageOrVideo>;
  setSelectedImage: (image: Nullable<ImageOrVideo>) => void;
}
