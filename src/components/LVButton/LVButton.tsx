import { DButton } from '@dynamic-framework/ui-react';

import type { ComponentProps } from 'react';

export type LVButtonProps = ComponentProps<typeof DButton> & {
  rounded?: boolean;
};

export function LVButton({
  className,
  rounded = false,
  ...props
}: LVButtonProps) {
  const resolvedClassName = [className, rounded ? 'rounded-pill' : undefined]
    .filter(Boolean)
    .join(' ');

  return (
    <DButton
      {...props}
      className={resolvedClassName}
    />
  );
}
