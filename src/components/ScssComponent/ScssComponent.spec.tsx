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
        style="width: 300px; aspect-ratio: 4 / 3;"
      >
        <div
          style="width: 100px; aspect-ratio: 1 / 1;"
        />
        <div
          style="width: 100px; aspect-ratio: 1 / 1;"
        />
        <p
          class="float-end"
        >
          hola
        </p>
      </div>
      <div
        style="width: 100px; aspect-ratio: 1 / 1;"
      />
    </div>
  </div>
  `);
});
