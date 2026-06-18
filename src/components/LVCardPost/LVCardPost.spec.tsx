import { render, screen } from '@testing-library/react';

import { LVCardPost } from '.';

it('should render post content text', () => {
  render(
    <LVCardPost
      category="Artículos"
      title="Los escenarios que se abren para el petróleo con el acuerdo en Medio Oriente"
      publishDate="17/06/2026"
      readTime="4 Min"
      views={54}
    />,
  );

  expect(screen.queryByText('Artículos')).toBeTruthy();
  expect(screen.queryByText('Los escenarios que se abren para el petróleo con el acuerdo en Medio Oriente')).toBeTruthy();
  expect(screen.queryByText('17/06/2026')).toBeTruthy();
  expect(screen.queryByText('4 Min')).toBeTruthy();
  expect(screen.queryByText('54')).toBeTruthy();
});
