import { useAuth } from '@/context/auth/useAuth';
import { NavLink } from 'react-router-dom';

export const LeftMenu = () => {
  const { logout } = useAuth();

  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">MyApp</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logs"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`
              }
            >
              Logs
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <button
          onClick={logout}
          className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
