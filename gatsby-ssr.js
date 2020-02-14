import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
 setHeadComponents([
     <script
        key="boxicons"
        type="text/javascript"
        src="https://unpkg.com/boxicons@latest/dist/boxicons.js"
      />,
  ]);
}