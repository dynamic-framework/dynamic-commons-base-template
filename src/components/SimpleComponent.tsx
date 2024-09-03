import { DAlert } from '@dynamic-framework/ui-react';

import type { ComponentProps } from 'react';

type Props = Pick<ComponentProps<typeof DAlert>, 'theme'>;

export function SimpleComponent({ theme = 'info' }: Props) {
  return (
    <DAlert theme={theme}>
      Simple Component
    </DAlert>
  );
}
