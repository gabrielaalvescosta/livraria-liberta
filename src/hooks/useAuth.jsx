import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import toastOptions from '../utils/toastOptions';
import verificaSenha from '../utils/verificaSenha';

import api from '../services/api';
import { logaUsuario, deslogaUsuario, resetaSenha } from '../services/authApi';
import { deletaUsario } from '../services/usuarioApi';

function useAuth() {
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAutenticado(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async usuario => {
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
    localStorage.removeItem('token');
    localStorage.removeItem('idUsuario');
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

  const handleDeletaConta = async idUsuario => {
    const id = toast.loading('Deletando conta...', toastOptions);

    const res = await deletaUsario(idUsuario);

    if (res.erro) {
      toast.update(id, {
        ...toastOptions,
        render: res.msg,
        type: 'error',
        isLoading: false,
      });
    } else {
      await deslogaUsuario();
      setAutenticado(false);
      localStorage.removeItem('token');
      localStorage.removeItem('idUsuario');
      api.defaults.headers.Authorization = undefined;
      
      toast.update(id, {
        ...toastOptions,
        render: 'Conta deletada com sucesso!',
        type: 'success',
        isLoading: false,
      });

      navigate('/');
    }
  }

  const handleResetaSenha = async (senha, confirmaSenha, token) => {
    console.log(senha, confirmaSenha);
    const id = toast.loading('Atualizando senha...', toastOptions);
    
    if (!verificaSenha(senha, confirmaSenha)) {
      toast.update(id, {
        ...toastOptions,
        render: 'As senhas precisam ser iguais.',
        type: 'error',
        isLoading: false,
      });
    } else {
      const res = await resetaSenha({
        token: token || undefined,
        senha: senha,
      });

      if (res.erro) {
        toast.update(id, {
          ...toastOptions,
          render: res.msg,
          type: 'error',
          isLoading: false,
        });
      } else {
        // Caso o usuário esteja logado enquanto reseta a senha, desloga ele.
        if (autenticado) {
          await deslogaUsuario();
          setAutenticado(false);
          localStorage.removeItem('token');
          localStorage.removeItem('idUsuario');
          api.defaults.headers.Authorization = undefined;
        }

        toast.update(id, {
          ...toastOptions,
          render: res.msg,
          type: 'success',
          position: 'top-right',
          isLoading: false,
        });

        navigate('/login');
      }
    }
  }

  return {
    loading,
    autenticado,
    handleLogin,
    handleLogout,
    handleDeletaConta,
    handleResetaSenha,
  };
}

export default useAuth;
