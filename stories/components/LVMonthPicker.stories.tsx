import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { LVMonthPicker } from '../../src';

const meta: Meta<typeof LVMonthPicker> = {
  title: 'Components/LVMonthPicker',
  component: LVMonthPicker,
  parameters: {
    docs: {
      description: {
        component: 'LVMonthPicker es una fachada de DDatePicker para seleccionar unicamente meses en formato panel, con navegacion por anio.',
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
        <div style={{ width: '100%', maxWidth: '560px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LVMonthPicker>;

const MonthPickerExample = () => {
  const [selected, setSelected] = useState(new Date(2026, 3, 1));

  return (
    <LVMonthPicker
      value={selected}
      onChange={setSelected}
    />
  );
};

export const Default: Story = {
  name: 'Default',
  render: () => <MonthPickerExample />,
};
