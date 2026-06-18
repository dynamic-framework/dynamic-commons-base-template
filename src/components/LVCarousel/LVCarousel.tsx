import type { ComponentProps, ReactNode } from 'react';

import { DCarousel } from '@dynamic-framework/ui-react';
import './lv-carousel.css';

export interface LVCarouselProps extends Omit<ComponentProps<typeof DCarousel>, 'children'> {
  children?: ReactNode;
  perPageDesktop?: number;
  perPageMobile?: number;
  autoHeight?: boolean;
  slideGap?: string | number;
}

export function LVCarousel({
  children,
  perPageDesktop = 1,
  perPageMobile = 1,
  autoHeight = true,
  slideGap,
  options,
  ...props
}: LVCarouselProps) {
  const resolvedGap = slideGap ?? options?.gap ?? '1rem';

  return (
    <DCarousel
      options={{
        perPage: perPageDesktop,
        perMove: 1,
        pagination: true,
        arrows: true,
        autoHeight,
        breakpoints: {
          768: {
            perPage: perPageMobile,
          },
        },
        ...options,
        gap: resolvedGap,
      }}
      className="lv-carousel"
      {...props}
    >
      {children}
    </DCarousel>
  );
}

LVCarousel.displayName = 'LVCarousel';
