import { render, screen } from '@testing-library/react';

import { LVProgressStatus } from '.';

it('should render title, value and helper texts', () => {
  render(
    <LVProgressStatus
      title="Tipo de cambio"
      valueText="$ 855,15"
      helperText="Tienes 74 segundos para comprar"
      currentValue={63}
      maxValue={100}
    />,
  );

  expect(screen.queryByText('Tipo de cambio')).toBeTruthy();
  expect(screen.queryByText(': $ 855,15')).toBeTruthy();
  expect(screen.queryByText('Tienes 74 segundos para comprar')).toBeTruthy();
});
