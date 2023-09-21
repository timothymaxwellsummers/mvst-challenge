import type { Preview } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import "../src/styles/globals.css";

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
