import React from 'react';
import { node } from 'prop-types';

import * as S from './styles';

export const Title = ({ children, ...rest }) => <S.Title { ...rest }>{ children }</S.Title>

Title.propTypes = {
  children: node.isRequired,
};
