import React, { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    loading,
    autenticado,
    handleLogin,
    handleLogout,
    handleDeletaConta,
    handleResetaSenha,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        loading,
        autenticado,
        handleLogin,
        handleLogout,
        handleDeletaConta,
        handleResetaSenha
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
