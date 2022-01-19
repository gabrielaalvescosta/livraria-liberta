import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import toastOptions from '../utils/toastOptions';
import verificaSenha from '../utils/verificaSenha';

import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { BoxCadastro } from '../components/SignIn/styles';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';
import { criaUsuario } from '../services/usuarioApi';

import '../components/SignIn/signin.scss';

function Cadastro() {
  const [data, setData] = useState({
    CPF: '',
    nome: '',
    email: '',
    senha: '',
    endereco: '',
    url_img: '',
  });
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleOnChange = event => {
    const input = event.target;
    if (input.name === 'confirmaSenha') {
      setConfirmaSenha(input.value);
    } else {
      setData({
        ...data, [input.name]: input.value,
      });
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const id = toast.loading('Verificando dados...', toastOptions);

    if (!verificaSenha(data.senha, confirmaSenha)) {
      toast.update(id, {
        ...toastOptions,
        render: 'As senhas precisam ser iguais.',
        type: 'error',
        isLoading: false,
      });
    } else {
      const res = await criaUsuario(data);

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
          render: 'Conta criada com sucesso, faça login abaixo!',
          type: 'success',
          position: 'top-right',
          isLoading: false,
        });

        navigate('/login');
      }
    }
  }

  return (
    <Main>
      <Titulo>Cadastro</Titulo>
      <Barra/>
      <BoxCadastro>
        <form onSubmit={handleSubmit}>
          <Input
            className="form" name="CPF" type="text" placeholder="CPF 00000000000" required
            onChange={handleOnChange}
          />
          <Input
            className="form" name="nome" type="text" placeholder="Nome" required
            onChange={handleOnChange}
          />
          <Input
             className="form" name="email" type="email" placeholder="Email" required
            onChange={handleOnChange}
          />

          <div className="cadastro-senha">
            <Input 
              className="form" name="senha" type="password" placeholder="Senha" required metade 
              onChange={handleOnChange}
            />
            <Input
              className="form" name="confirmaSenha" type="password" placeholder="Repita a senha" required metade
              onChange={handleOnChange}
            />
          </div>

          <Input
            className="form" name="endereco" type="text" placeholder="Endereço"
            onChange={handleOnChange}
          />

          <LabelInput>Foto de perfil:</LabelInput>
          <Input
            className="form" name="url_img" type="url" placeholder="Foto de perfil" required
            onChange={handleOnChange}
          />
          
          <Button type="submit">Cadastrar</Button>
        </form>
      </BoxCadastro>
    </Main>
  );
}

export default Cadastro;
 