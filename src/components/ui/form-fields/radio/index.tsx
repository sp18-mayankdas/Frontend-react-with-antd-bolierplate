import {
  Radio as AntRadio,
  type RadioProps as AntRadioProps,
  type RadioGroupProps as AntRadioGroupProps,
} from 'antd';
import { cn } from '@/utils';

export interface RadioProps extends AntRadioProps {
  className?: string;
}

export const Radio = (props: RadioProps) => {
  const { children, className, checked, disabled, ...rest } = props;
  return (
    <AntRadio className={cn(className)} checked={checked} disabled={disabled} {...rest}>
      {children}
    </AntRadio>
  );
};

const Group = (props: AntRadioGroupProps) => {
  const { className, ...rest } = props;
  return <AntRadio.Group className={cn(className)} {...rest} />;
};

Radio.Group = Group;
