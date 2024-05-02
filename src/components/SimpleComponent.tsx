import { DAlert } from '@dynamic-framework/ui-react';

import type { ComponentProps } from 'react';

type Props = Pick<ComponentProps<typeof DAlert>, 'soft' | 'type'>;

export function SimpleComponent({ soft, type = 'info' }: Props) {
  return (
    <DAlert type={type} soft={soft}>
      Simple Component
    </DAlert>
  );
}
