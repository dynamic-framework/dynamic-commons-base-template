import type { Meta, StoryObj } from '@storybook/react';

import { ComplexComponent } from '../../src';

const meta = {
  title: 'Components/ComplexComponent',
  component: ComplexComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ComplexComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
