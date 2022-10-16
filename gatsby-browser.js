import React, { Fragment } from "react";
import '@fontsource/fira-sans';

import { GlobalStyles } from 'styles';

export const wrapPageElement = ({ element }) => (
  <Fragment>
    <GlobalStyles />
    { element }
  </Fragment>
);
