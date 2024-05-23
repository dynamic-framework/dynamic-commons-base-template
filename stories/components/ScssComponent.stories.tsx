import type { Meta, StoryObj } from '@storybook/react';

import { ScssComponent } from '../../src';

const meta = {
  title: 'Components/ScssComponent',
  component: ScssComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScssComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
