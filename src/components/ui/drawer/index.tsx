import { Drawer as AntDrawer, type DrawerProps as AntDrawerProps } from 'antd';

interface DrawerProps extends AntDrawerProps {
  children: React.ReactNode;
}

export const Drawer = ({ children, ...props }: DrawerProps) => {
  return <AntDrawer {...props}>{children}</AntDrawer>;
};
