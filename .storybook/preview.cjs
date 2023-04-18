import {themes} from '@storybook/theming'

import '../src/styles/global.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
let options = {
  onUnhandledRequest: "bypass",
};
if (location.hostname === "lostvoyager.github.io") {
  options.serviceWorker = {
      url: "/storybook-react-login-screen/mockServiceWorker.js",
    };
  };
}
initialize(options);

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySort: {
    method: 'alphabetical',
    order: ['Pages', ['Login Screen'], 'React Components'], 
    locales: 'en-US',
  },
  docs: {
    theme: themes.dark,
  }
}
