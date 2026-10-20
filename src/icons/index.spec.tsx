import { render } from '@testing-library/react';

import { IconCheckCircle } from '.';

it('should render an svg and forward props to it', () => {
  const { container } = render(
    <IconCheckCircle width={32} height={32} className="text-primary" />,
  );

  const svg = container.querySelector('svg');

  expect(svg).not.toBeNull();
  expect(svg?.getAttribute('width')).toBe('32');
  expect(svg?.getAttribute('height')).toBe('32');
  expect(svg?.getAttribute('class')).toBe('text-primary');
});
