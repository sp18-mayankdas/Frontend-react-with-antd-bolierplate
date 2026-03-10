import { cn } from '@/utils';
import { Button as AntButton, type ButtonProps as AntButtonProps } from 'antd';

export type { AntButtonProps as ButtonProps };

export const Button = ({
  size = 'large',
  type = 'primary',
  className,
  children,
  ...rest
}: AntButtonProps) => (
  <AntButton size={size} type={type} className={cn(className)} {...rest}>
    {children}
  </AntButton>
);
