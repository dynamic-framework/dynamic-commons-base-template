import type { Meta, StoryObj } from '@storybook/react';

import { SimpleComponent } from '../../src';

const meta = {
  title: 'Components/SimpleComponent',
  component: SimpleComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    soft: {
      control: 'boolean',
    },
    type: {
      control: 'text',
    },
  },
} satisfies Meta<typeof SimpleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SoftInfoFalse: Story = {
  args: {
    soft: false,
    type: 'info',
  },
};

export const SoftDangerTrue: Story = {
  args: {
    soft: true,
    type: 'danger',
  },
};
