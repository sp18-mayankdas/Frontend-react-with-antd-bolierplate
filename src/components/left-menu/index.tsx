import { DashboardOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '@/context/auth/useAuth';
import { Button } from '../ui';
import { NavItem } from './nav-item';

export const LeftMenu = () => {
  const { logout } = useAuth();

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Logo */}
      <div className="py-[22px] px-5 border-b border-slate-100">
        <h2 className="text-xl font-semibold text-slate-800 tracking-tight text-center">
          Health Dashboard
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3">
        <NavItem to="/dashboard" icon={<DashboardOutlined />} label="Dashboard" />
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200">
        <Button
          onClick={logout}
          className="w-full text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-all duration-200"
        >
          <LogoutOutlined />
          Logout
        </Button>
      </div>
    </div>
  );
};
