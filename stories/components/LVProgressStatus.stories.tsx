import type { Meta, StoryObj } from '@storybook/react-vite';

import { LVProgressStatus } from '../../src';

const meta: Meta<typeof LVProgressStatus> = {
  title: 'Components/LVProgressStatus',
  component: LVProgressStatus,
  args: {
    title: 'Tipo de cambio',
    valueText: '$ 855,15',
    helperText: 'Tienes 74 segundos para comprar',
    currentValue: 63,
    minValue: 0,
    maxValue: 100,
  },
  parameters: {
    docs: {
      description: {
        component: 'LVProgressStatus es una fachada de DProgress para mostrar progreso junto con textos de contexto (titulo/valor y mensaje inferior).',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story: () => React.ReactNode) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          backgroundColor: '#f5f6f8',
        }}
      >
        <div style={{ width: '100%', maxWidth: '700px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LVProgressStatus>;

export const Default: Story = {
  name: 'Default',
};

export const WithoutHelper: Story = {
  name: 'Sin texto inferior',
  args: {
    helperText: undefined,
    currentValue: 80,
  },
};
