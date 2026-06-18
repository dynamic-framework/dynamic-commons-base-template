import type { HTMLAttributes } from 'react';
import { useMemo, useState } from 'react';

import './lv-segmented-control.css';

export interface LVSegmentedControlOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface LVSegmentedControlProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: LVSegmentedControlOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

function getInitialValue(options: LVSegmentedControlOption[], defaultValue?: string) {
  if (defaultValue !== undefined) {
    return defaultValue;
  }

  const firstEnabled = options.find((option) => !option.disabled);

  return firstEnabled?.value;
}

export function LVSegmentedControl({
  options,
  name,
  value,
  defaultValue,
  onChange,
  className,
  ...props
}: LVSegmentedControlProps) {
  const generatedName = useMemo(
    () => name ?? `lv-segmented-${Math.random().toString(36).slice(2, 10)}`,
    [name],
  );
  const [internalValue, setInternalValue] = useState<string | undefined>(
    getInitialValue(options, defaultValue),
  );
  const selectedValue = value ?? internalValue;

  function handleChange(nextValue: string) {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  }

  const resolvedClassName = ['lv-segmented-control', className].filter(Boolean).join(' ');

  return (
    <div className={resolvedClassName} role="radiogroup" {...props}>
      {options.map((option) => {
        const isChecked = option.value === selectedValue;
        const inputId = `${generatedName}-${option.value}`;

        return (
          <label
            key={option.value}
            htmlFor={inputId}
            className={[
              'lv-segmented-control__item',
              isChecked ? 'is-active' : undefined,
              option.disabled ? 'is-disabled' : undefined,
            ].filter(Boolean).join(' ')}
          >
            <input
              id={inputId}
              type="radio"
              name={generatedName}
              value={option.value}
              checked={isChecked}
              disabled={option.disabled}
              onChange={() => handleChange(option.value)}
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

LVSegmentedControl.displayName = 'LVSegmentedControl';
