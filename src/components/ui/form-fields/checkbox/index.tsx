import { cn } from '@/utils';
import { Checkbox as AntCheckbox, type CheckboxProps as AntchecboxProps } from 'antd';
import type { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/es/checkbox';

export const Checkbox = (props: AntchecboxProps) => {
  const { children, className, ...rest } = props;

  return (
    <AntCheckbox className={cn(className)} {...rest}>
      {children}
    </AntCheckbox>
  );
};

const Group = (props: AntCheckboxGroupProps) => {
  const { className, ...rest } = props;
  return <AntCheckbox.Group className={cn(className)} {...rest} />;
};

Checkbox.Group = Group;
