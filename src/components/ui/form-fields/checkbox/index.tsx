import { cn } from '@/utils';
import { Checkbox as AntCheckbox, type CheckboxProps as AntCheckboxProps } from 'antd';
import type { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/es/checkbox';

export type { AntCheckboxProps as CheckboxProps };
export type { AntCheckboxGroupProps as CheckboxGroupProps };

const Group = ({ className, ...rest }: AntCheckboxGroupProps) => (
  <AntCheckbox.Group className={cn(className)} {...rest} />
);

export const Checkbox = ({ className, children, ...rest }: AntCheckboxProps) => (
  <AntCheckbox className={cn(className)} {...rest}>
    {children}
  </AntCheckbox>
);

Checkbox.Group = Group;
