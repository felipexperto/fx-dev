import React, { Fragment } from "react";
import { GlobalStyles } from 'styles';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="boxicons"
      rel="stylesheet"
      href="https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css"
    />,
  ]);
}

export const wrapPageElement = ({ element }) => (
  <Fragment>
    <GlobalStyles />
    { element }
  </Fragment>
);
