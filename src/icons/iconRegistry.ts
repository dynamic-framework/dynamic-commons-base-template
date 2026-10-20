import type { DContextProvider } from '@dynamic-framework/ui-react';
import type { ComponentProps } from 'react';
import { IconCheckCircle, IconCreditCard, IconPiggyBank } from '.';

/**
 * Derived from the provider's own prop rather than imported: the framework
 * defines `IconComponent` but does not re-export it publicly.
 */
export type IconRegistry = NonNullable<ComponentProps<typeof DContextProvider>['iconRegistry']>;

/**
 * Icon name → component map for `DContextProvider`'s `iconRegistry` prop.
 *
 * `DIconBase` resolves its `icon` prop in three steps: the registry first, then
 * `lucide-react`, then the icon-font family. So a key that matches a Lucide
 * name (PascalCase) overrides that icon everywhere `DIcon` is used — including
 * inside framework components that render icons internally — while any other
 * key simply adds a new name.
 *
 * Keep this map hand-written and import only the icons you actually need
 * resolved by name: it is a single object literal, so every icon it references
 * is bundled and evaluated as soon as the registry is imported — there is no
 * per-icon tree-shaking inside it. Never build it from a barrel or a glob; at
 * ~890 B per icon a wholesale 200-icon set adds ~175 KB to every widget that
 * mounts the provider. Import the icon component directly everywhere name
 * resolution is not needed.
 *
 * Requires `@dynamic-framework/ui-react` >= 2.7.0.
 */
export const iconRegistry: IconRegistry = {
  // Overrides: these names exist in Lucide, so the brand icon wins.
  CreditCard: IconCreditCard,
  PiggyBank: IconPiggyBank,
  // Addition: not a Lucide name, only resolvable through the registry.
  BrandCheck: IconCheckCircle,
};
