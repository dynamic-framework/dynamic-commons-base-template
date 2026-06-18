import type { Meta, StoryObj } from '@storybook/react-vite';

import type { ReactNode } from 'react';

import { LVDropdown } from '../../src';

const meta: Meta<typeof LVDropdown> = {
  title: 'Components/LVDropdown',
  component: LVDropdown,
  args: {
    label: 'Ingresar',
    items: [
      {
        label: 'Personas',
        icon: 'UserRound',
        onClick: () => undefined,
      },
      {
        label: 'Empresas',
        icon: 'Building2',
        onClick: () => undefined,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: 'LVDropdown es una fachada de DDropdown con clases base preformateadas, soporte de icono por item y una prop trigger para heredar opciones de LVButton (size, variant, color, rounded, etc.).',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story: () => ReactNode) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          minHeight: '300px',
          padding: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LVDropdown>;

export const Default: Story = {
  name: 'Default',
};

export const WithCustomClasses: Story = {
  name: 'Con clases personalizadas',
  args: {
    className: 'w-100',
    classNameMenu: 'mt-2',
  },
};

export const TriggerAsLVButton: Story = {
  name: 'Trigger heredado de LVButton',
  args: {
    trigger: {
      size: 'sm',
      variant: 'outline',
      color: 'secondary',
      rounded: false,
      className: 'fw-semibold',
    },
  },
};
