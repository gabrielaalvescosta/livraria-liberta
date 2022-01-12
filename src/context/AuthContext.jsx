import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const { loading, autenticado, handleLogin, handleLogout, handleDeletaConta } = useAuth();

  return (
    <Context.Provider value={{ loading, autenticado, handleLogin, handleLogout, handleDeletaConta }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
