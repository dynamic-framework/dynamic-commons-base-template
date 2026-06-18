import type { ComponentProps } from 'react';

import { DProgress } from '@dynamic-framework/ui-react';

import './lv-progress-status.css';

type DProgressProps = ComponentProps<typeof DProgress>;

export interface LVProgressStatusProps extends Omit<DProgressProps, 'className'> {
  title: string;
  valueText?: string;
  helperText?: string;
  separator?: string;
  className?: string;
  progressClassName?: string;
}

export function LVProgressStatus({
  title,
  valueText,
  helperText,
  separator = ':',
  className,
  progressClassName,
  currentValue,
  minValue,
  maxValue,
  hideCurrentValue = true,
  enableStripedAnimation = false,
  height = 8,
  dataAttributes,
  style,
}: LVProgressStatusProps) {
  const resolvedClassName = ['lv-progress-status', className].filter(Boolean).join(' ');

  return (
    <section className={resolvedClassName}>
      <p className="lv-progress-status__title">
        <span>{title}</span>
        {valueText ? <strong>{` ${separator} ${valueText}`}</strong> : null}
      </p>

      <DProgress
        className={progressClassName}
        currentValue={currentValue}
        minValue={minValue}
        maxValue={maxValue}
        hideCurrentValue={hideCurrentValue}
        enableStripedAnimation={enableStripedAnimation}
        height={height}
        dataAttributes={dataAttributes}
        style={style}
      />

      {helperText ? <p className="lv-progress-status__helper">{helperText}</p> : null}
    </section>
  );
}

LVProgressStatus.displayName = 'LVProgressStatus';
