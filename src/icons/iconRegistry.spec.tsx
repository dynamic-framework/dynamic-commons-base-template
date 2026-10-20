import { DContextProvider, DIcon } from '@dynamic-framework/ui-react';
import { render } from '@testing-library/react';

import type { ReactNode } from 'react';
import { iconRegistry } from './iconRegistry';

// `.svg` imports resolve to `tests/__mocks__/svgMock.tsx`, which tags its
// output with `data-testid="svg-mock"` — that is how a registry hit is told
// apart from a Lucide one.
const brandIcon = (container: HTMLElement) => container.querySelector('[data-testid="svg-mock"]');

const renderWithRegistry = (children: ReactNode) => render(
  <DContextProvider iconRegistry={iconRegistry}>{children}</DContextProvider>,
);

it('should override a Lucide name with the registered brand icon', () => {
  const { container } = renderWithRegistry(<DIcon icon="CreditCard" />);

  expect(brandIcon(container)).not.toBeNull();
});

it('should resolve a name that only exists in the registry', () => {
  const { container } = renderWithRegistry(<DIcon icon="BrandCheck" />);

  expect(brandIcon(container)).not.toBeNull();
});

it('should fall back to Lucide for an unregistered name', () => {
  const { container } = renderWithRegistry(<DIcon icon="House" />);

  expect(brandIcon(container)).toBeNull();
  expect(container.querySelector('svg')).not.toBeNull();
});

it('should render Lucide when no registry is provided', () => {
  const { container } = render(
    <DContextProvider>
      <DIcon icon="CreditCard" />
    </DContextProvider>,
  );

  expect(brandIcon(container)).toBeNull();
});
