import type { Meta, StoryObj } from '@storybook/react-vite';

import { LVSegmentedControl } from '../../src';

const meta: Meta<typeof LVSegmentedControl> = {
  title: 'Components/LVSegmentedControl',
  component: LVSegmentedControl,
  parameters: {
    docs: {
      description: {
        component: 'LVSegmentedControl es un grupo de seleccion unica (radio) con UI de botones pegados, ideal para casos como Moneda / Tipo de operacion.',
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
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LVSegmentedControl>;

export const Default: Story = {
  name: 'Default',
  args: {
    options: [
      { label: 'Dolar', value: 'usd' },
      { label: 'Euro', value: 'eur' },
    ],
    defaultValue: 'usd',
  },
};

export const FourOptions: Story = {
  name: 'Cuatro opciones',
  args: {
    options: [
      {
        label: 'Dolar',
        value: 'usd',
      },
      {
        label: 'Euro',
        value: 'eur',
      },
      {
        label: 'Libra',
        value: 'gbp',
      },
      {
        label: 'Yen',
        value: 'jpy',
      },
    ],
    defaultValue: 'usd',
  },
};
