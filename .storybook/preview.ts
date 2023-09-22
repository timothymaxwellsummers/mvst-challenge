import type { Preview } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import "../src/styles/globals.css";

//added the primer theme and global styles to the preview so that the components are styled correctly
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [themeDecorator],
};

export default preview;
