import type { Meta, StoryObj } from '@storybook/react-vite';

import { useCallback, useState } from 'react';

import { DSelect } from '@dynamic-framework/ui-react';

const meta: Meta<typeof DSelect> = {
  title: 'Design System/DSelect',
  component: DSelect,
  parameters: {
    docs: {
      description: {
        component: 'Referencia visual del componente `DSelect` de Dynamic UI.',
      },
    },
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof DSelect>;

type SelectOption = { label: string; value: string };

const selectOptions = [
  { label: 'Opcion 1', value: '1' },
  { label: 'Opcion 2', value: '2' },
  { label: 'Opcion 3', value: '3' },
  { label: 'Opcion 4', value: '4' },
];

const DefaultExample = () => {
  const [selected, setSelected] = useState<SelectOption | null>(
    selectOptions[0],
  );

  const handleChange = useCallback((option: SelectOption | null) => {
    setSelected(option);
  }, []);

  return (
    <DSelect
      value={selected}
      onChange={handleChange}
      options={selectOptions}
    />
  );
};

export const Default: Story = {
  name: 'Default',
  render: () => <DefaultExample />,
};

const PlaygroundExample = () => {
  const [selected, setSelected] = useState<SelectOption | null>(
    selectOptions[0],
  );

  const handleChange = useCallback((option: SelectOption | null) => {
    setSelected(option);
  }, []);

  return (
    <div style={{ maxWidth: '400px' }}>
      <DSelect
        label="Selecciona una opcion"
        value={selected}
        onChange={handleChange}
        options={selectOptions}
      />
      <p style={{ marginTop: '1rem', color: '#666' }}>
        Seleccionado:
        {' '}
        <strong>{selected?.value || 'Ninguno'}</strong>
      </p>
    </div>
  );
};

export const Playground: Story = {
  name: 'Playground',
  render: () => <PlaygroundExample />,
};

const disabledOptions = [
  { label: 'Opcion 1', value: '1' },
  { label: 'Opcion 2', value: '2', disabled: true },
  { label: 'Opcion 3', value: '3' },
];

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <DSelect
        disabled
        options={selectOptions}
      />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  name: 'Con opciones deshabilitadas',
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <DSelect
        options={disabledOptions}
      />
    </div>
  ),
};

type SelectOptionMulti = { label: string; value: string };

const MultipleExample = () => {
  const [selected, setSelected] = useState<SelectOptionMulti[]>([
    selectOptions[0],
    selectOptions[1],
  ]);

  const handleChange = useCallback((options: SelectOptionMulti[] | null) => {
    setSelected(options || []);
  }, []);

  return (
    <div style={{ maxWidth: '300px' }}>
      <DSelect
        value={selected}
        onChange={handleChange}
        options={selectOptions}
        multi
      />
    </div>
  );
};

export const Multiple: Story = {
  name: 'Multiple',
  render: () => <MultipleExample />,
};
