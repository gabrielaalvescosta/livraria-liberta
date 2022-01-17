import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import RecuperarSenha from './pages/RecuperarSenha';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import Produto from './pages/Produto';
import Pesquisa from './pages/Pesquisa';
import Dashboard from './pages/Dashboard';
import EditarConta from './pages/EditarConta';

function PrivateRoute({ children }) {
  const { loading, autenticado } = useContext(Context);

  if (loading) {
    return null;
  }

  if (!autenticado) {
    return <Navigate to="/login" />;
  }

  return children;
}

function CustomRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produto/:idLivro" element={<Produto />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/dashboard/editar" element={<PrivateRoute><EditarConta /></PrivateRoute>} />
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default CustomRoutes;
