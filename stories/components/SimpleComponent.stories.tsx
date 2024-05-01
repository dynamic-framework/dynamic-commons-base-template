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
  },
} satisfies Meta<typeof SimpleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SoftFalse: Story = {
  args: {
    soft: false,
  },
};

export const SoftTrue: Story = {
  args: {
    soft: true,
  },
};
