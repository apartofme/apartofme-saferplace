import React, { useMemo } from 'react';
import { View } from 'react-native';

import {
  ElixirOneHalfIcon,
  ElixirOneIcon,
  ElixirThreeIcon,
  ElixirTwoHalfIcon,
  ElixirTwoIcon,
  ElixirZeroHalfIcon,
  ElixirZeroIcon,
} from '../../../../assets/images/dummySVG';
import { useAppSelector } from '../../../../hooks';
import { getElixirAnimationKeyByRange } from '../../../../utils';
import { ElixirKeysType } from '../../../../utils/types';
import { styles } from './Elixir.styles';

export const Elixir: React.FC = () => {
  const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

  const elixirImage = useMemo(() => {
    const elixirImageKey = getElixirAnimationKeyByRange(fullnessElixir);
    switch (elixirImageKey) {
      case ElixirKeysType.ElixirZeroHalf:
        return <ElixirZeroHalfIcon height={80} width={61} />;
      case ElixirKeysType.ElixirOne:
        return <ElixirOneIcon height={80} width={61} />;
      case ElixirKeysType.ElixirOneHalf:
        return <ElixirOneHalfIcon height={80} width={61} />;
      case ElixirKeysType.ElixirTwo:
        return <ElixirTwoIcon height={80} width={61} />;
      case ElixirKeysType.ElixirTwoHalf:
        return <ElixirTwoHalfIcon height={80} width={61} />;
      case ElixirKeysType.ElixirThree:
        return <ElixirThreeIcon height={80} width={61} />;
      default:
        return <ElixirZeroIcon height={80} width={61} />;
    }
  }, [fullnessElixir]);
  return <View style={styles.elixir}>{elixirImage}</View>;
};
