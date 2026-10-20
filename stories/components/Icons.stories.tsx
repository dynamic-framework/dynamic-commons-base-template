import { DContextProvider, DIcon } from '@dynamic-framework/ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  IconCheckCircle,
  IconCreditCard,
  IconPiggyBank,
  iconRegistry,
} from '../../src';

const SIZES = [16, 24, 32, 48] as const;
const FONT_SIZES = ['fs-5', 'fs-3', 'fs-1'] as const;
const COLORED = [
  { Icon: IconCreditCard, color: 'text-primary' },
  { Icon: IconPiggyBank, color: 'text-success' },
  { Icon: IconCheckCircle, color: 'text-danger' },
] as const;

const meta: Meta<typeof IconCreditCard> = {
  title: 'Icons/Icon System',
  component: IconCreditCard,
  // The attached docs page lives in `Icons.mdx`; autodocs would collide with it.
  tags: ['!autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    width: {
      control: 'number',
      description: 'Rendered width. Forwarded straight to the `<svg>`.',
    },
    height: {
      control: 'number',
      description: 'Rendered height. Forwarded straight to the `<svg>`.',
    },
    strokeWidth: {
      control: {
        type: 'range', min: 0.5, max: 4, step: 0.5,
      },
      description: 'Overrides the stroke width baked into the svg.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconCreditCard>;

export const Default: Story = {
  name: 'Icon System',
  args: {
    width: 32,
    height: 32,
  },
  render: (args) => (
    <div className="d-flex flex-column gap-5">
      <section className="d-flex flex-column gap-3">
        <h6 className="m-0">Fixed size — width / height props</h6>
        <div className="d-flex align-items-end gap-4 text-primary">
          {SIZES.map((size) => (
            <div key={size} className="d-flex flex-column align-items-center gap-2">
              <IconCreditCard width={size} height={size} strokeWidth={args.strokeWidth} />
              <code className="small">{`${size}px`}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="d-flex flex-column gap-3">
        <h6 className="m-0">Relative size — 1em tracks the font-size</h6>
        <div className="d-flex flex-column gap-2">
          {FONT_SIZES.map((fontSize) => (
            <p key={fontSize} className={`${fontSize} d-flex align-items-center gap-2 m-0`}>
              <IconPiggyBank width="1em" height="1em" strokeWidth={args.strokeWidth} />
              <span>{`Text with .${fontSize}`}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="d-flex flex-column gap-3">
        <h6 className="m-0">Color — inherited from currentColor</h6>
        <div className="d-flex align-items-center gap-4">
          {COLORED.map(({ Icon, color }) => (
            <div key={color} className="d-flex flex-column align-items-center gap-2">
              <Icon {...args} className={color} />
              <code className="small">{`.${color}`}</code>
            </div>
          ))}
          <div className="d-flex flex-column align-items-center gap-2 text-warning">
            <IconCheckCircle {...args} />
            <code className="small">inherited</code>
          </div>
        </div>
      </section>

      <section className="d-flex flex-column gap-3">
        <h6 className="m-0">By name — DIcon with an iconRegistry</h6>
        <DContextProvider iconRegistry={iconRegistry}>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex flex-column align-items-center gap-2">
              <DIcon icon="CreditCard" size="2rem" color="primary" />
              <code className="small">CreditCard</code>
              <span className="small text-secondary">registry (overrides Lucide)</span>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <DIcon icon="BrandCheck" size="2rem" color="success" hasCircle />
              <code className="small">BrandCheck</code>
              <span className="small text-secondary">registry (new name)</span>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <DIcon icon="House" size="2rem" color="secondary" />
              <code className="small">House</code>
              <span className="small text-secondary">Lucide fallback</span>
            </div>
          </div>
        </DContextProvider>
      </section>
    </div>
  ),
};
