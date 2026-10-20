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
 *
 * Each icon is re-exported as an explicitly typed constant rather than with
 * `export { default as … } from './x.svg'`. A bare re-export leaks the `.svg`
 * specifier into `dist/types`, and the published package ships no svg sources
 * and no ambient `*.svg` declaration — consumers would hit TS2307, or resolve
 * the icon to `string` if their own declaration types svg as a url. Annotating
 * the constant keeps the emitted declaration dependent on React types only.
 */
import type { FC, SVGProps } from 'react';

import CheckCircle from './check-circle.svg';
import CreditCard from './credit-card.svg';
import PiggyBank from './piggy-bank.svg';

export const IconCheckCircle: FC<SVGProps<SVGSVGElement>> = CheckCircle;
export const IconCreditCard: FC<SVGProps<SVGSVGElement>> = CreditCard;
export const IconPiggyBank: FC<SVGProps<SVGSVGElement>> = PiggyBank;
