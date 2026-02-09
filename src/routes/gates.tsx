import { useAuth } from '@/context/auth/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicGate = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
};

export const PrivateGate = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
