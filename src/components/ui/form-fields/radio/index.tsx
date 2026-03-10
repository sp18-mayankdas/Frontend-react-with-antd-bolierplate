import { cn } from '@/utils';
import {
  Radio as AntRadio,
  type RadioProps as AntRadioProps,
  type RadioGroupProps as AntRadioGroupProps,
} from 'antd';

export type { AntRadioProps as RadioProps };
export type { AntRadioGroupProps as RadioGroupProps };

// ─── Radio.Button passthrough ─────────────────────────────────────────────────

const RadioButton = ({ className, ...rest }: AntRadioProps) => (
  <AntRadio.Button className={cn(className)} {...rest} />
);

// ─── Radio.Group ──────────────────────────────────────────────────────────────

const Group = ({ className, ...rest }: AntRadioGroupProps) => (
  <AntRadio.Group className={cn(className)} {...rest} />
);

// ─── Radio ────────────────────────────────────────────────────────────────────

export const Radio = ({ className, children, ...rest }: AntRadioProps) => (
  <AntRadio className={cn(className)} {...rest}>
    {children}
  </AntRadio>
);

Radio.Button = RadioButton;
Radio.Group = Group;
