import React, { Fragment } from "react";
import "fontsource-inter"
import "fontsource-ubuntu"

import { GlobalStyles } from 'styles';

export const wrapPageElement = ({ element }) => (
  <Fragment>
    <GlobalStyles />
    { element }
  </Fragment>
);
