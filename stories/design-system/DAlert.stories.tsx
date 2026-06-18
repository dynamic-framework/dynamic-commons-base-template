import type { Meta, StoryObj } from '@storybook/react-vite';

import { DAlert, DIcon } from '@dynamic-framework/ui-react';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
] as const;

const meta: Meta<typeof DAlert> = {
  title: 'Design System/DAlert',
  component: DAlert,
  args: {
    color: 'info',
    children: 'Este es un alert base de Dynamic UI.',
  },
  parameters: {
    docs: {
      description: {
        component: 'Referencia visual del componente `DAlert` de Dynamic UI para revisar variantes del sistema de diseno.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    color: {
      control: 'select',
      options: variants,
      description: 'Variante de color del alert.',
      table: {
        type: {
          summary: variants.join(' | '),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DAlert>;

export const Playground: Story = {
  name: 'Playground',
};

export const AllVariants: Story = {
  name: 'Todas las variantes',
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {variants.map((color) => (
        <DAlert key={color} color={color}>
          {`DAlert ${color}`}
        </DAlert>
      ))}
    </div>
  ),
};

export const Success: Story = {
  name: 'Success',
  args: {
    color: 'success',
    children: 'Operacion completada correctamente.',
  },
};

export const Danger: Story = {
  name: 'Danger',
  args: {
    color: 'danger',
    children: 'Ha ocurrido un error al procesar la solicitud.',
  },
};

export const InfoLongText: Story = {
  name: 'Info - texto largo',
  render: () => (
    <DAlert color="info">
      <p style={{ margin: 0 }}>
        <span>
          Esta solicitud debe ser aprobada por los apoderados en LV Pass dentro de los proximos
          {' '}
        </span>
        <strong>2 minutos</strong>
        <span>
          {' '}
          para que la operacion pueda ejecutarse.
        </span>
      </p>
      <p style={{ margin: '0.25rem 0 0 0' }}>
        <span>Si el plazo expira sin todas las aprobaciones, </span>
        <strong>la solicitud sera rechazada automaticamente.</strong>
      </p>
    </DAlert>
  ),
};

export const InfoWithRichText: Story = {
  name: 'Info - formato enriquecido',
  render: () => (
    <DAlert color="info">
      <p style={{ margin: 0 }}>
        <span>Transferencia en revision. Estado actual: </span>
        <strong>Validando aprobaciones</strong>
        <span>.</span>
      </p>
      <p style={{ margin: '0.25rem 0 0 0' }}>
        <span>Tiempo estimado restante: </span>
        <strong>01:34</strong>
        <span>. Puedes continuar en esta pantalla o volver mas tarde.</span>
      </p>
    </DAlert>
  ),
};

export const WarningLongText: Story = {
  name: 'Warning - texto largo',
  render: () => (
    <DAlert color="warning">
      <span>
        El monto ingresado supera el limite recomendado para esta cuenta. Revisa los datos antes
        de continuar para evitar rechazos por politicas internas.
      </span>
    </DAlert>
  ),
};

export const InfoCustomStyle: Story = {
  name: 'Info - custom style (referencia)',
  render: () => (
    <DAlert
      color="info"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5rem 1fr',
          gap: '0.75rem',
          alignItems: 'start',
        }}
      >
        <span style={{ marginTop: '0.1rem', color: '#6b7280' }}>
          <DIcon icon="CircleInfo" />
        </span>

        <div className="small">
          <p style={{ margin: 0 }}>
            <span>
              Esta solicitud debe ser aprobada por los apoderados en LV Pass dentro de los proximos
              {' '}
            </span>
            <strong style={{ color: '#0a5784' }}>2 minutos</strong>
            <span> para que la operacion pueda ejecutarse.</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>Si el plazo expira sin todas las aprobaciones, </span>
            <strong>la solicitud sera rechazada automaticamente.</strong>
          </p>
        </div>
      </div>
    </DAlert>
  ),
};
