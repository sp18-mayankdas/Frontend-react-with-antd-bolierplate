import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, []);

  function login() {
    localStorage.setItem('token', 'logged-in');
    setIsAuthenticated(true);
  }

  function logout() {
    localStorage.clear();
    setIsAuthenticated(false);
    window.location.assign('/');
  }

  const value = useMemo(
    () => ({
      setIsAuthenticated,
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
