import { render } from '@testing-library/react';

import { SimpleComponent } from '.';

it('should render', () => {
  const { container } = render(
    <SimpleComponent />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="alert alert-info"
      role="alert"
    >
      <i
        class="d-icon bi bi-info-circle alert-icon"
        style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
      />
      <div
        class="alert-text"
      >
        Simple Component
      </div>
    </div>
  </div>
  `);
});
