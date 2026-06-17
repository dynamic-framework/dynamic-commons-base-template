import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScssComponent } from '../../src';

const meta: Meta<typeof ScssComponent> = {
  title: 'Components/ScssComponent',
  component: ScssComponent,
  parameters: {
    docs: {
      description: {
        component:
          'ScssComponent demonstrates how to use custom SCSS styles within a React component.\n\n**Use this component to:**\n- Prototype wireframes with visual guides (red borders)\n- Test and showcase custom SCSS integration\n- Serve as a starting point for visually-driven layout components.\n\n**Features:**\n- Uses a `.wireframe-red` class for red borders\n- Responsive layout blocks for quick prototyping.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScssComponent>;

export const WireframeRed: Story = {
  name: 'Red Wireframe',
  args: {},
  parameters: {
    docs: {
      story: {
        description: 'Wireframe visualization with red border using SCSS.',
      },
    },
  },
};
