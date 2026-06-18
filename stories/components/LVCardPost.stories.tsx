import type { Meta, StoryObj } from '@storybook/react-vite';

import { LVCardPost } from '../../src';

const meta: Meta<typeof LVCardPost> = {
  title: 'Components/LVCardPost',
  component: LVCardPost,
  args: {
    imageSrc: 'https://picsum.photos/1200/700?grayscale=1',
    imageAlt: 'Post image',
    category: 'Artículos',
    title: 'Los escenarios que se abren para el petróleo con el acuerdo en Medio Oriente',
    publishDate: '17/06/2026',
    readTime: '4 Min',
    views: 54,
  },
  parameters: {
    docs: {
      description: {
        component: 'LVCardPost renderiza una tarjeta de articulo con imagen superior, categoria, titulo y metadatos (fecha, tiempo de lectura y vistas).',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story: () => React.ReactNode) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          backgroundColor: '#f2f4f7',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LVCardPost>;

export const Default: Story = {
  name: 'Default',
};

export const WithoutImage: Story = {
  name: 'Sin imagen',
  args: {
    imageSrc: undefined,
  },
};
