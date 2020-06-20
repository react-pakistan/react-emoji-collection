import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import customTheme from "./customTheme";

/* Decorators configuration */
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withScreenshot);
addDecorator(withInfo({
  header: false,
  text: "React Pakistan - React Emoji Collection",
  inline: true,
}));
addParameters({
  options: {
    theme: customTheme,
    sidebarAnimations: true,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

configure([
  require.context("../src", true, /\.story\.tsx$/),
  require.context("../src", true, /\.story\.mdx$/),
], module);
