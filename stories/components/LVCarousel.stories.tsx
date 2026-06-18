import type { Meta, StoryObj } from '@storybook/react-vite';

import { DCarousel } from '@dynamic-framework/ui-react';
import { LVCardPost, LVCarousel } from '../../src';

const meta: Meta<typeof LVCarousel> = {
  title: 'Components/LVCarousel',
  component: LVCarousel,
  parameters: {
    docs: {
      description: {
        component: 'LVCarousel es una fachada de DCarousel con dots estilizados (outline por defecto, relleno cuando activo) en color primario. Soporta configuración de slides por página en desktop y mobile, con flechas de navegación incluidas. El espacio entre slides se controla con `slideGap` (default `1rem`).',
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
          backgroundColor: '#f5f5f5',
        }}
      >
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LVCarousel>;

// Slide component for demo
const DemoSlide = ({ number }: { number: number }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f93549',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold',
      padding: '3rem',
      borderRadius: '0.5rem',
      minHeight: '300px',
      textAlign: 'center',
    }}
  >
    Slide
    {' '}
    {number}
  </div>
);

export const Default: Story = {
  name: 'Default - 1 slide por página',
  render: () => (
    <LVCarousel>
      <DCarousel.Slide>
        <DemoSlide number={1} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={2} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={3} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={4} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={5} />
      </DCarousel.Slide>
    </LVCarousel>
  ),
};

export const MultipleSlides: Story = {
  name: '3 slides en desktop, 1 en mobile',
  render: () => (
    <LVCarousel perPageDesktop={3} perPageMobile={1} slideGap="1rem">
      <DCarousel.Slide>
        <DemoSlide number={1} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={2} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={3} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={4} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={5} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={6} />
      </DCarousel.Slide>
    </LVCarousel>
  ),
};

export const TwoSlides: Story = {
  name: '2 slides en desktop, 1 en mobile',
  render: () => (
    <LVCarousel perPageDesktop={2} perPageMobile={1}>
      <DCarousel.Slide>
        <DemoSlide number={1} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={2} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={3} />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <DemoSlide number={4} />
      </DCarousel.Slide>
    </LVCarousel>
  ),
};

export const WithCardPostItems: Story = {
  name: 'Con LVCardPost (2 visibles)',
  render: () => (
    <LVCarousel perPageDesktop={2} perPageMobile={1} slideGap="1rem">
      <DCarousel.Slide>
        <LVCardPost
          imageSrc="https://picsum.photos/1200/700?random=11"
          category="Artículos"
          title="Los escenarios que se abren para el petróleo con el acuerdo en Medio Oriente"
          publishDate="17/06/2026"
          readTime="4 Min"
          views={54}
        />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <LVCardPost
          imageSrc="https://picsum.photos/1200/700?random=12"
          category="Artículos"
          title="Inflación y tasas: qué esperar para la segunda mitad del año"
          publishDate="16/06/2026"
          readTime="6 Min"
          views={87}
        />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <LVCardPost
          imageSrc="https://picsum.photos/1200/700?random=13"
          category="Mercados"
          title="Tecnología y energía lideran la jornada en las bolsas internacionales"
          publishDate="15/06/2026"
          readTime="5 Min"
          views={103}
        />
      </DCarousel.Slide>
      <DCarousel.Slide>
        <LVCardPost
          imageSrc="https://picsum.photos/1200/700?random=14"
          category="Economía"
          title="Nuevas proyecciones del PIB regional para el cierre de 2026"
          publishDate="14/06/2026"
          readTime="3 Min"
          views={41}
        />
      </DCarousel.Slide>
    </LVCarousel>
  ),
};
