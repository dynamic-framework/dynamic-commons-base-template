import type { Preview } from '@storybook/react';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui-non-root.css';
import { DContextProvider } from '@dynamic-framework/ui-react';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <DContextProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </DContextProvider>
    ),
  ],
};

export default preview;

