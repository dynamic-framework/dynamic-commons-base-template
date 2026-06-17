import type { Preview } from '@storybook/react-vite';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.min.css';
import { DContextProvider } from '@dynamic-framework/ui-react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      defaultName: 'Quick Start',
      defaultPath: '/docs/quick-start--docs',
    },
    options: {},
  },
  decorators: [
    (Story) => (
      <DContextProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </DContextProvider>
    ),
  ],
  tags: ['autodocs']
};

export default preview;

