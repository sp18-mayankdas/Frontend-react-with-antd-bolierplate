import { cn } from '@/utils';
import { Switch as AntSwitch, type SwitchProps as AntSwitchProps } from 'antd';

export type { AntSwitchProps as SwitchProps };

export const Switch = ({ className, ...rest }: AntSwitchProps) => (
  <AntSwitch className={cn(className)} {...rest} />
);
