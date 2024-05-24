import { render } from '@testing-library/react';

import { ScssComponent } from '.';

it('should render', () => {
  const { container } = render(
    <ScssComponent />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="wireframe-red"
    >
      <div
        style="width: 300px;"
      >
        <div
          style="width: 100px;"
        />
        <div
          style="width: 100px;"
        />
        <p
          class="float-end"
        >
          hola
        </p>
      </div>
      <div
        style="width: 100px;"
      />
    </div>
  </div>
  `);
});
