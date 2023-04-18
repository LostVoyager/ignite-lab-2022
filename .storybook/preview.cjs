import {themes} from '@storybook/theming'

import '../src/styles/global.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
const options = {
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url: "./mockServiceWorker.js",
  },
};
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
