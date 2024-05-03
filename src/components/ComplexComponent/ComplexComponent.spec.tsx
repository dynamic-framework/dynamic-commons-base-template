import { render } from '@testing-library/react';

import { ComplexComponent } from '.';

it('should render', () => {
  const { container } = render(
    <ComplexComponent />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="d-flex flex-column gap-2"
    >
      <span
        class="d-chip d-chip-secondary"
      >
        <span>
          Element 1
        </span>
      </span>
      <span
        class="d-chip d-chip-primary"
      >
        <span>
          Element 2
        </span>
      </span>
      <span
        class="d-chip d-chip-danger"
      >
        <span>
          Element 3
        </span>
      </span>
    </div>
  </div>
  `);
});
