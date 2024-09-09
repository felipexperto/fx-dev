import React from 'react';
import { BoxIconProps } from './types';

const BoxIcon = ({ className, ...props }: BoxIconProps) => (
  <i className={`bx ${className}`} {...props}></i>
);

export default BoxIcon;
