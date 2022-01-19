import React, { useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import verificaSenha from '../utils/verificaSenha';
import toastOptions from '../utils/toastOptions';
import { buscaUsuarioPeloId, atualizaUsuario } from '../services/usuarioApi';
import { AuthContext } from '../context/AuthContext';

import Loading from '../components/Loading/Loading';
import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { BoxCadastro } from '../components/SignIn/styles';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';

function EditarConta() {
  const { handleDeletaConta } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({});
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBuscaUsuario = async () => {
      try {
        const idUsuario = localStorage.getItem('idUsuario');
        const dados = await buscaUsuarioPeloId(idUsuario);
        setUsuario(dados.usuario);
      } catch (err) {
        console.log('Erro na requisição:', err.message);
      } finally {
        setIsLoaded(true);
      }
    }
    handleBuscaUsuario();
  }, []);

  const handleOnChange = event => {
    const input = event.target;
    
    if (input.name === 'confirmaSenha') {
      setConfirmaSenha(input.value);
    } else {
      setUsuario({
        ...usuario, [input.name]: input.value,
      });
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const id = toast.loading('Verificando dados...', toastOptions);

    if (confirmaSenha && !verificaSenha(usuario.senha, confirmaSenha)) {
      toast.update(id, {
        ...toastOptions,
        render: 'As senhas precisam ser iguais.',
        type: 'error',
        isLoading: false,
      });
    } else {
      const res = await atualizaUsuario(usuario.id_usuario, usuario);

      if (res.erro) {
        toast.update(id, {
          ...toastOptions,
          render: res.msg,
          type: 'error',
          isLoading: false,
        });
      } else {
        toast.update(id, {
          ...toastOptions,
          render: 'Dados atualizados com sucesso!',
          type: 'success',
          position: 'top-right',
          isLoading: false,
        });

        navigate('/dashboard');
      }
    }
  }

  let cliquesParaDeletar = 0;

  const handleDeletarConta = async (event) => {
    cliquesParaDeletar++;
    
    if (cliquesParaDeletar === 1) {
      event.target.textContent = 'Clique novamente';
      setTimeout(() => {
        event.target.textContent = 'Deletar Conta';
        cliquesParaDeletar = 0;
      }, 3000);
      return;
    }

    handleDeletaConta(usuario.id_usuario);
  }

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Main>
      <Titulo>Editar Conta</Titulo>
      <Barra/>
      <BoxCadastro>
        <form className="cadastro" onSubmit={handleSubmit}>
          <Input
            className="form" name="nome" type="text" placeholder="Nome"
            onChange={handleOnChange} value={usuario.nome}
          />
          <Input
            className="form" name="email" type="email" placeholder="Email"
            onChange={handleOnChange} value={usuario.email}
          />

          <div className="cadastro-senha">
            <Input 
              className="form" name="senha" type="password" placeholder="Senha" metade 
              onChange={handleOnChange}
            />
            <Input
              className="form" name="confirmaSenha" type="password" placeholder="Repita a senha" metade
              onChange={handleOnChange}
            />
          </div>

          <Input
            className="form" name="endereco" type="text" placeholder="Endereço"
            onChange={handleOnChange} value={usuario.endereco}
          />

          <LabelInput>Foto de perfil:</LabelInput>
          <Input
            className="form" name="url_img" type="url" placeholder="Foto de perfil"
            onChange={handleOnChange} value={usuario.url_img}
          />
          
          <Button type="submit">Atualizar</Button>
        </form>
        <LabelInput>Área de perigo:</LabelInput>
        <Button vermelho type="button" onClick={handleDeletarConta}>
          Deletar Conta
        </Button>
      </BoxCadastro>
    </Main>
  );
}

export default EditarConta;
