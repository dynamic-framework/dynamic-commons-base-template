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
    theme: {
      control: 'text',
    },
  },
} satisfies Meta<typeof SimpleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SoftInfoFalse: Story = {
  args: {
    theme: 'info',
  },
};

export const SoftDangerTrue: Story = {
  args: {
    theme: 'danger',
  },
};
