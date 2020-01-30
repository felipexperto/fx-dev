import React from "react";
import PropTypes from "prop-types";

import * as S from './styles';

const Avatar = ({authorAvatar, authorName}) => (
  <S.AvatarImage
    src={authorAvatar}
    alt={authorName}
  />
);
export default Avatar