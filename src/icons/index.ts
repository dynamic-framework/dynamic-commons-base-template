/**
 * Icon system.
 *
 * Every `.svg` file in this folder is turned into a React component at build
 * time by `@svgr/rollup` (see `rollup.config.mjs`). Drop your own svg here and
 * re-export it below following the `Icon<Name>` convention.
 *
 * Icons are rendered with `fill="none" stroke="currentColor"` and no intrinsic
 * width/height (`dimensions: false`), so they inherit the color and the size of
 * their container via css (`font-size`, `width`/`height` or a utility class).
 */
export { default as IconCheckCircle } from './check-circle.svg';
export { default as IconCreditCard } from './credit-card.svg';
export { default as IconPiggyBank } from './piggy-bank.svg';
