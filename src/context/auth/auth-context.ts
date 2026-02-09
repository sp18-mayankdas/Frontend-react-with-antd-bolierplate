import { createContext } from 'react';

type AuthValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthValue | null>(null);
