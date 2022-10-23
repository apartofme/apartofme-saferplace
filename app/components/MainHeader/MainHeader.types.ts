import React from 'react';

export interface IMainHeaderProps {
  title?: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
}
