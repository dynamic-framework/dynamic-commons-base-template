import type { Meta, StoryObj } from '@storybook/react-vite';

import { SimpleComponent } from '../../src';

const meta = {
  title: 'Components/SimpleComponent',
  component: SimpleComponent,
  argTypes: {
    color: {
      control: 'text',
    },
  },
} satisfies Meta<typeof SimpleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SoftInfoFalse: Story = {
  args: {
    color: 'info',
  },
};

export const SoftDangerTrue: Story = {
  args: {
    color: 'danger',
  },
};
