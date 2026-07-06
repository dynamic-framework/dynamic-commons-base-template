import type { Meta, StoryObj } from '@storybook/react-vite';
import { SimpleComponent } from '../../src';

const meta: Meta<typeof SimpleComponent> = {
  title: 'Components/SimpleComponent',
  component: SimpleComponent,
  parameters: {
    docs: {
      description: {
        component:
          'SimpleComponent is a wrapper around the DAlert component from Dynamic Framework.\n\n**Use this component to:**\n- Show contextual feedback messages (info, danger, success, warning, etc.)\n- Maintain consistent alert styles across your app\n- Integrate with forms, notifications, or any UI that needs user feedback.\n\n**Props:**\n- `color`: Controls the alert type (info, danger, success, warning, primary, secondary).',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'danger', 'success', 'warning', 'primary', 'secondary'],
      description: 'Alert message color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleComponent>;

export const Info: Story = {
  name: 'Info (default)',
  args: {
    color: 'info',
  },
  parameters: {
    docs: {
      story: {
        description: 'Example of an informational alert.',
      },
    },
  },
};

export const Danger: Story = {
  name: 'Danger',
  args: {
    color: 'danger',
  },
  parameters: {
    docs: {
      story: {
        description: 'Example of a danger alert.',
      },
    },
  },
};

export const Success: Story = {
  name: 'Success',
  args: {
    color: 'success',
  },
  parameters: {
    docs: {
      story: {
        description: 'Example of a success alert.',
      },
    },
  },
};

export const Warning: Story = {
  name: 'Warning',
  args: {
    color: 'warning',
  },
  parameters: {
    docs: {
      story: {
        description: 'Example of a warning alert.',
      },
    },
  },
};
