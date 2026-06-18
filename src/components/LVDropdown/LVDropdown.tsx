import { DDropdown } from '@dynamic-framework/ui-react';

import type { ComponentProps } from 'react';

import { LVButton, type LVButtonProps } from '../LVButton';

import './lv-dropdown.css';

type DDropdownProps = ComponentProps<typeof DDropdown>;

export type LVDropdownItem = DDropdownProps['actions'][number] & {
  icon?: string;
};

export type LVDropdownTriggerProps = Omit<
LVButtonProps,
'children' | 'onClick' | 'iconEnd' | 'className'
> & {
  className?: string;
};

export type LVDropdownProps = Omit<
DDropdownProps,
'actions' | 'dropdownToggle' | 'className' | 'classNameMenu'
> & {
  items: LVDropdownItem[];
  label?: string;
  className?: string;
  classNameMenu?: string;
  toggleClassName?: string;
  trigger?: LVDropdownTriggerProps;
  useChevron?: boolean;
};

function getToggleClassName(baseClassName: string, useChevron: boolean, open: boolean): string {
  return [
    baseClassName,
    useChevron && open ? 'isActive' : undefined,
  ].filter(Boolean).join(' ');
}

export function LVDropdown({
  items,
  label = 'Ingresar',
  className,
  classNameMenu,
  toggleClassName,
  trigger,
  useChevron = true,
}: LVDropdownProps) {
  const resolvedClassName = ['lv-dropdown', className].filter(Boolean).join(' ');
  const resolvedClassNameMenu = ['lv-dropdown-menu', classNameMenu].filter(Boolean).join(' ');
  const {
    className: triggerClassName,
    rounded: triggerRounded = true,
    ...triggerProps
  } = trigger ?? {};
  const resolvedToggleClassName = ['lv-dropdown-toggle', triggerClassName, toggleClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <DDropdown
      actions={items}
      className={resolvedClassName}
      classNameMenu={resolvedClassNameMenu}
      // eslint-disable-next-line react/no-unstable-nested-components
      dropdownToggle={({ open, toggle }) => (
        <LVButton
          {...triggerProps}
          color={triggerProps.color ?? 'primary'}
          rounded={triggerRounded}
          className={getToggleClassName(resolvedToggleClassName, useChevron, open)}
          iconEnd={useChevron ? 'ChevronDown' : undefined}
          onClick={toggle}
        >
          {label}
        </LVButton>
      )}
    />
  );
}
