import React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Action } from 'redux';

export const navigationRef = React.createRef<NavigationContainerRef>();

export class StaticNavigator {
  static dispatch(action: Action) {
    if (navigationRef?.current) {
      navigationRef.current.dispatch(action);
    }
  }

  static navigateTo(routeName: string, params?: object) {
    if (navigationRef?.current) {
      navigationRef.current.navigate(routeName, params);
    }
  }

  static push(routeName: string, params?: object) {
    if (navigationRef?.current) {
      const pushAction = StackActions.push(routeName, params);
      navigationRef.current.dispatch(pushAction);
    }
  }

  static getCurretRoute() {
    if (navigationRef?.current) {
      return navigationRef.current.getCurrentRoute();
    }
  }
  static reset(routeName: string) {
    if (navigationRef?.current) {
      const resetAction: CommonActions.Action = CommonActions.reset({
        index: 0,
        routes: [{ name: routeName }],
      });

      return navigationRef.current.dispatch(resetAction);
    }
  }
}
