import { render } from '@testing-library/react';

import { SimpleComponent } from '.';

it('should render', () => {
  const { container } = render(
    <SimpleComponent color="info" />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="alert alert-info"
      role="alert"
    >
      <span
        class="d-icon alert-icon"
      >
        <svg
          aria-hidden="true"
          class="lucide lucide-info"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path
            d="M12 16v-4"
          />
          <path
            d="M12 8h.01"
            />
        </svg>
      </span>
      <div
        class="alert-text"
      >
        Simple Component
      </div>
    </div>
  </div>
  `);
});
