import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { logaUsuario, deslogaUsuario } from '../../services/authApi';

import 'react-toastify/dist/ReactToastify.min.css';

function useAuth() {
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const toastOptions = {
    position: 'bottom-center',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAutenticado(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (usuario) => {
    const id = toast.loading('Autenticando...', toastOptions);

    const res = await logaUsuario(usuario);
    
    if (res.erro) {
      toast.update(id, {
        ...toastOptions,
        render: res.msg,
        type: 'error',
        isLoading: false,
      });
    } else {
      localStorage.setItem('token', JSON.stringify(res.token));
      localStorage.setItem('idUsuario', res.idUsuario);
      // Isso só é definido uma vez quando o usuário loga.
      api.defaults.headers.Authorization = `Bearer ${res.token}`;
      setAutenticado(true);

      // Mostra mensagem.
      toast.update(id, {
        ...toastOptions,
        render: 'Você foi autenticado com sucesso!',
        type: 'success',
        isLoading: false,
      });

      navigate('/dashboard');
    }
  }

  const handleLogout = async () => {
    const id = toast.loading('Saindo...', toastOptions);

    await deslogaUsuario();
    setAutenticado(false);
    localStorage.removeItem('token',);
    localStorage.removeItem('idUsuario');
    // Isso só é definido uma vez quando o usuário loga.
    api.defaults.headers.Authorization = undefined;

    // Mostra mensagem.
    toast.update(id, {
      ...toastOptions,
      render: 'Você foi deslogado!',
      type: 'success',
      isLoading: false,
    });

    navigate('/login');
  }

  return { loading, autenticado, handleLogin, handleLogout };
}

export default useAuth;
