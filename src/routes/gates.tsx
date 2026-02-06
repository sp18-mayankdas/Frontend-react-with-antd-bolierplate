import { PrivateLayout } from '@/components';
import { Outlet } from 'react-router-dom';

export const AuthGate = () => {
  return <Outlet />;
};

export const PrivateGate = () => {
  return <PrivateLayout />;
};
