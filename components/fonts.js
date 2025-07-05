import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
    `}
  />
);

export default Fonts;
