import React, { useEffect, useMemo } from 'react';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { styles } from './NotificationAlert.styles';
import { appSlice } from '../../redux/slices';
import { ErrorInfoIcon } from '../../assets/svg/errorInfoIcon/ErrorInfoIcon';

export const NotificationAlert: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const statusBarHeight = useSafeAreaInsets();
  const { t } = useTranslation();

  const errors = useAppSelector(state => state.app.errors);
  const currentError = useMemo(
    () => _.find(Object.values(errors), Boolean),
    [errors],
  );

  useEffect(() => {
    if (currentError) {
      showMessage({
        message: t(currentError),
        style: {
          ...styles.container,
          marginTop: statusBarHeight.top,
          paddingTop: -statusBarHeight.top + 12,
        },
        titleStyle: styles.title,
        textStyle: styles.message,
        duration: 5000,
        // TODO: types
        icon: () => <ErrorInfoIcon />,
      });
      dispatch(appSlice.actions.resetErrors());
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentError]);

  return <FlashMessage position="top" />;
};
