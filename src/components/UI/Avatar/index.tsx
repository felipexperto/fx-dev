import React from 'react';
import { AvatarProps } from './types';
import * as S from './styles';

const Avatar = ({ image, label, ...props }: AvatarProps) => (
  <S.AvatarImage src={image} alt={label} {...props} />
);

export default Avatar;
