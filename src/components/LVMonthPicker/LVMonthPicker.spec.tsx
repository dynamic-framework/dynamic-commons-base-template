import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';

import { LVMonthPicker } from '.';

jest.mock('@dynamic-framework/ui-react', () => ({
  DIcon: ({ icon }: { icon: string }) => <span>{icon}</span>,
  DDatePicker: ({
    renderCustomHeader,
  }: {
    renderCustomHeader: (props: {
      date: Date;
      decreaseYear: () => void;
      increaseYear: () => void;
      prevYearButtonDisabled: boolean;
      nextYearButtonDisabled: boolean;
    }) => ReactNode;
  }) => {
    const header = renderCustomHeader({
      date: new Date(2026, 3, 1),
      decreaseYear: () => undefined,
      increaseYear: () => undefined,
      prevYearButtonDisabled: false,
      nextYearButtonDisabled: false,
    });

    return (
      <div>
        {header}
        <div>mock-content</div>
      </div>
    );
  },
}));

it('should render month picker header controls', () => {
  render(
    <LVMonthPicker
      defaultValue={new Date(2026, 3, 1)}
    />,
  );

  fireEvent.click(screen.getByRole('button', { name: 'Anio anterior' }));
  fireEvent.click(screen.getByRole('button', { name: 'Anio siguiente' }));

  expect(screen.queryByText('2026')).toBeTruthy();
  expect(screen.queryByText('mock-content')).toBeTruthy();
});
