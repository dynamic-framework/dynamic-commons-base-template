import { render } from '@testing-library/react';

import { SimpleComponent } from '.';

it('should render', () => {
  const { container } = render(
    <SimpleComponent theme="info" />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="alert alert-info"
      role="alert"
    >
      <i
        class="d-icon bi bi-info-circle alert-icon"
        style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
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
