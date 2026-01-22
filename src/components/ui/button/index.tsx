import { cn } from '@/utils';
import { Button as AntButton, type ButtonProps as AntButtonProps } from 'antd';
import React from 'react';

export type ButtonProps = AntButtonProps;

export const Button: React.FC<ButtonProps> = ({
  size,
  type,
  className = '',
  children,
  ...rest
}) => {
  return (
    <AntButton className={cn(className)} size={size ?? 'large'} type={type ?? 'primary'} {...rest}>
      {children}
    </AntButton>
  );
};
