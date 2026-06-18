import { fireEvent, render, screen } from '@testing-library/react';

import { LVSegmentedControl } from '.';

it('should render options and change selected value', () => {
  const onChange = jest.fn();

  render(
    <LVSegmentedControl
      name="currency"
      defaultValue="usd"
      onChange={onChange}
      options={[
        { label: 'Dolar', value: 'usd' },
        { label: 'Euro', value: 'eur' },
      ]}
    />,
  );

  const dolar = screen.getByRole('radio', { name: 'Dolar' });
  const euro = screen.getByRole('radio', { name: 'Euro' });

  expect((dolar as HTMLInputElement).checked).toBe(true);
  expect((euro as HTMLInputElement).checked).toBe(false);

  fireEvent.click(euro);

  expect(onChange).toHaveBeenCalledWith('eur');
  expect((euro as HTMLInputElement).checked).toBe(true);
});
