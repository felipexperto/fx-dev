import React from "react";
import { string } from "prop-types"

import * as S from './styles';

const Avatar = ({image, label}) => (
  <S.AvatarImage
    src={image}
    alt={label}
  />
);

Avatar.propTypes = {
  image: string.isRequired,
  label: string.isRequired,
};

export default Avatar;
