import { cn } from '@/utils';
import { Switch as AntSwitch, type SwitchProps as AntSwitchProps } from 'antd';
import React from 'react';

export type SwitchProps = AntSwitchProps;

export const Switch: React.FC<SwitchProps> = ({ className = '', ...rest }) => {
  return <AntSwitch {...rest} className={cn(className)} />;
};
