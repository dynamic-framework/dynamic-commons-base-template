import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComplexComponent } from '../../src';

const meta: Meta<typeof ComplexComponent> = {
  title: 'Components/ComplexComponent',
  component: ComplexComponent,
  parameters: {
    docs: {
      description: {
        component:
          'ComplexComponent is a composition example that brings together multiple subcomponents and a custom hook.\n\n**Use this component to:**\n- Demonstrate advanced composition patterns\n- Group related UI elements (like chips, badges, etc.)\n- Show how to use custom hooks for side effects or logic.\n\n**Structure:**\n- Renders three chip elements (Element1, Element2, Element3)\n- Uses `useConsoleLogEffect` to log a message on mount.\n- Useful as a pattern for building more complex, reusable UI blocks.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComplexComponent>;

export const Default: Story = {
  name: 'Element composition',
  args: {},
  parameters: {
    docs: {
      story: {
        description: 'Example usage of the complex component that groups several chips and runs a side effect.',
      },
    },
  },
};
