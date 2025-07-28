import type { Meta, StoryObj } from '@storybook/react-vite';

import { ComplexComponent } from '../../src';

const meta = {
  title: 'Components/ComplexComponent',
  component: ComplexComponent,
} satisfies Meta<typeof ComplexComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
