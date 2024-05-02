import { DAlert } from '@dynamic-framework/ui-react';

import type { ComponentProps } from 'react';

type Props = Pick<ComponentProps<typeof DAlert>, 'soft'>;

export function SimpleComponent({ soft }: Props) {
  return (
    <DAlert type="info" soft={soft}>
      Simple Component
    </DAlert>
  );
}
