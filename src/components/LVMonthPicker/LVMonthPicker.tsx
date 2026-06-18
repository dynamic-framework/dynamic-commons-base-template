import { DDatePicker, DIcon } from '@dynamic-framework/ui-react';

import { useCallback, useMemo, useState } from 'react';

import type { ComponentProps } from 'react';

import './lv-month-picker.css';

type DDatePickerProps = ComponentProps<typeof DDatePicker>;

export interface LVMonthPickerProps extends Omit<
DDatePickerProps,
'showMonthYearPicker' | 'inline' | 'selected' | 'onChange' | 'renderCustomHeader' | 'calendarContainer' | 'value' | 'defaultValue'
> {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

export function LVMonthPicker({
  value,
  defaultValue,
  onChange,
  className,
  ...props
}: LVMonthPickerProps) {
  const initialDate = useMemo(() => value ?? defaultValue ?? new Date(), [defaultValue, value]);
  const [internalDate, setInternalDate] = useState<Date>(initialDate);

  const selectedDate = value ?? internalDate;

  const handleMonthChange = useCallback((nextDate: Date | null) => {
    if (!nextDate) {
      return;
    }

    if (value === undefined) {
      setInternalDate(nextDate);
    }

    onChange?.(nextDate);
  }, [onChange, value]);

  const resolvedClassName = ['lv-month-picker', className].filter(Boolean).join(' ');

  return (
    <div className={resolvedClassName}>
      <DDatePicker
        {...props}
        inline
        selected={selectedDate}
        onChange={handleMonthChange}
        showMonthYearPicker
        showHeaderSelectors={false}
        // eslint-disable-next-line react/jsx-no-bind
        renderCustomHeader={({
          date,
          decreaseYear,
          increaseYear,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
        }) => (
          <div className="lv-month-picker__header">
            <button
              type="button"
              className="lv-month-picker__header-nav"
              onClick={decreaseYear}
              disabled={prevYearButtonDisabled}
              aria-label="Anio anterior"
            >
              <DIcon icon="ArrowLeft" />
            </button>

            <span className="lv-month-picker__year">{date.getFullYear()}</span>

            <button
              type="button"
              className="lv-month-picker__header-nav"
              onClick={increaseYear}
              disabled={nextYearButtonDisabled}
              aria-label="Anio siguiente"
            >
              <DIcon icon="ArrowRight" />
            </button>
          </div>
        )}
        // eslint-disable-next-line react/jsx-no-bind, react/no-unstable-nested-components
        calendarContainer={({ className: calendarClassName, children }) => (
          <div className={[calendarClassName, 'lv-month-picker__datepicker'].filter(Boolean).join(' ')}>
            {children}
          </div>
        )}
      />
    </div>
  );
}

LVMonthPicker.displayName = 'LVMonthPicker';
