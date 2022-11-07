import React, { useEffect, useMemo } from 'react';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import _ from 'lodash';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './NotificationAlert.styles';
import { appSlice } from '../../redux/slices';
import { ErrorInfoIcon } from '../../assets/svg/ErrorInfoIcon';

export const NotificationAlert: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const statusBarHeight = useSafeAreaInsets();

  const errors = useAppSelector(state => state.app.errors);
  const currentError = useMemo(
    () => _.find(Object.values(errors), Boolean),
    [errors],
  );

  useEffect(() => {
    if (currentError) {
      showMessage({
        message: currentError,
        style: {
          ...styles.container,
          marginTop: statusBarHeight.top,
          paddingTop: -statusBarHeight.top,
        },
        titleStyle: styles.title,
        // TODO: types
        icon: () => (
          <View style={styles.icon}>
            <ErrorInfoIcon />
          </View>
        ),
      });
      dispatch(appSlice.actions.resetErrors());
    }
  }, [currentError, dispatch, statusBarHeight.top]);

  return <FlashMessage position="top" icon="info" />;
};
