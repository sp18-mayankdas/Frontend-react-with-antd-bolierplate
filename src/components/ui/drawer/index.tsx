import { cn } from '@/utils';
import { Drawer as AntDrawer, type DrawerProps as AntDrawerProps } from 'antd';

export interface DrawerProps extends AntDrawerProps {
  isOpen?: boolean;
  width?: number | string;
}

export const Drawer = ({ isOpen, width = 480, className, children, ...rest }: DrawerProps) => (
  <AntDrawer
    open={isOpen ?? rest.open}
    width={width}
    className={cn(className)}
    destroyOnHidden
    {...rest}
  >
    {children}
  </AntDrawer>
);
