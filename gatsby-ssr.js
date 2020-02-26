import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
 setHeadComponents([
     <link
        key="boxicons"
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css"
      />,
  ]);
}