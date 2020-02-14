import React from "react";

import * as S from './styles';

const Avatar = ({image, label}) => (
  <S.AvatarImage
    src={image}
    alt={label}
  />
);
export default Avatar