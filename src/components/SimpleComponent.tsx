import { DAlert } from '@dynamic-framework/ui-react';

import type { ComponentProps } from 'react';

type Props = Pick<ComponentProps<typeof DAlert>, 'color'>;

export function SimpleComponent({ color = 'info' }: Props) {
  return (
    <DAlert color={color}>
      Simple Component
    </DAlert>
  );
}
