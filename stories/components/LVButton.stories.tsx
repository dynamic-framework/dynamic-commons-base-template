import type { Meta, StoryObj } from '@storybook/react-vite';

import { LVButton } from '../../src';

const colorPalette = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
] as const;

const meta: Meta<typeof LVButton> = {
  title: 'Components/LVButton',
  component: LVButton,
  args: {
    children: 'Continuar',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        component: 'LVButton extiende DButton y agrega la prop rounded para aplicar la clase rounded-pill. Puedes mezclar rounded con variantes base como soft y outline.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'link', 'soft'],
      description: 'Variantes base de DButton.',
      table: {
        type: { summary: "'outline' | 'link' | 'soft'" },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Aplica rounded-pill y se puede combinar con cualquier variant.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    color: {
      control: 'text',
      description: 'Color del boton (API de DButton).',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LVButton>;

export const Default: Story = {
  name: 'Default',
};

export const Rounded: Story = {
  name: 'Rounded',
  args: {
    rounded: true,
  },
};

export const Outline: Story = {
  name: 'Outline',
  args: {
    variant: 'outline',
  },
};

export const Soft: Story = {
  name: 'Soft',
  args: {
    variant: 'soft',
  },
};

export const SmallSize: Story = {
  name: 'Size sm',
  args: {
    size: 'sm',
    children: 'Boton pequeno',
  },
};

export const SmallWithIconStart: Story = {
  name: 'Size sm + iconStart',
  args: {
    size: 'sm',
    iconStart: 'Home',
    children: 'Confirmar',
  },
};

export const SmallWithIconEnd: Story = {
  name: 'Size sm + iconEnd',
  args: {
    size: 'sm',
    iconEnd: 'ArrowRight',
    children: 'Siguiente',
  },
};

export const SmallWithStartAndEndIcons: Story = {
  name: 'Size sm + iconStart + iconEnd',
  args: {
    size: 'sm',
    iconStart: 'Download',
    iconEnd: 'ArrowRight',
    children: 'Descargar reporte',
  },
};

export const SmallColorPalette: Story = {
  name: 'Size sm + colores',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colorPalette.map((color) => (
        <LVButton key={`small-${color}`} size="sm" color={color}>
          {color}
        </LVButton>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      story: {
        description: 'Muestra variantes de color para LVButton en size="sm".',
      },
    },
  },
};

export const SmallOutlineColorPalette: Story = {
  name: 'Size sm + outline + colores',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colorPalette.map((color) => (
        <LVButton key={`small-outline-${color}`} size="sm" variant="outline" color={color}>
          {`outline ${color}`}
        </LVButton>
      ))}
    </div>
  ),
};

export const SmallSoftColorPalette: Story = {
  name: 'Size sm + soft + colores',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colorPalette.map((color) => (
        <LVButton key={`small-soft-${color}`} size="sm" variant="soft" color={color}>
          {`soft ${color}`}
        </LVButton>
      ))}
    </div>
  ),
};

export const RoundedColorPalette: Story = {
  name: 'Rounded + colores',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colorPalette.map((color) => (
        <LVButton key={`rounded-${color}`} size="sm" rounded color={color}>
          {`rounded ${color}`}
        </LVButton>
      ))}
    </div>
  ),
};

export const RoundedWithOutlineAndColors: Story = {
  name: 'Rounded + outline + colores',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colorPalette.map((color) => (
        <LVButton key={`rounded-outline-${color}`} size="sm" rounded variant="outline" color={color}>
          {`rounded outline ${color}`}
        </LVButton>
      ))}
    </div>
  ),
};

export const RoundedWithSoftAndColors: Story = {
  name: 'Rounded + soft + colores',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {colorPalette.map((color) => (
        <LVButton key={`rounded-soft-${color}`} size="sm" rounded variant="soft" color={color}>
          {`rounded soft ${color}`}
        </LVButton>
      ))}
    </div>
  ),
};

export const RoundedWithIcons: Story = {
  name: 'Rounded + iconStart + iconEnd',
  args: {
    rounded: true,
    size: 'sm',
    color: 'primary',
    iconStart: 'Home',
    iconEnd: 'ArrowRight',
    children: 'Acceder',
  },
};
