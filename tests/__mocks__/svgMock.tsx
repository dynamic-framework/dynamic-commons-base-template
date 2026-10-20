/**
 * Jest counterpart of the `@svgr/rollup` build step: `.svg` imports resolve to
 * a React component, not to a url string, so components that render icons can
 * be asserted on in specs.
 *
 * Remove this file and its `moduleNameMapper` entry in `jest.config.js` when
 * removing the icon system.
 */
import type { SVGProps } from 'react';

export default function SvgMock(props: SVGProps<SVGSVGElement>) {
  return <svg data-testid="svg-mock" {...props} />;
}
