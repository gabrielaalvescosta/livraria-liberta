import React, { useState, useContext } from 'react';

import { Navigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

import { BoxCadastro } from '../components/SignIn/styles';
import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';

function ResetarSenha() {
  const { handleResetaSenha } = useContext(AuthContext);
  const [senhas, setSenhas] = useState({
    senha: '',
    confirmaSenha: '',
  });
  const token = new URLSearchParams(window.location.search).get('token');

  if (!token) {
    return <Navigate to="/" />
  }

  const handleOnChange = event => {
    setSenhas({ ...senhas, [event.target.name]: event.target.value });
  }

  const handleOnSubmit = async event => {
    event.preventDefault();
    
    const { senha, confirmaSenha } = senhas;
    await handleResetaSenha(senha, confirmaSenha, token);
  }

  return (
    <Main>
      <Titulo>Resete sua senha</Titulo>
      <Barra/>
      <BoxCadastro>
        <form onSubmit={handleOnSubmit}>
          <LabelInput>Digite sua nova senha:</LabelInput>
          <Input
            className="form" name="senha" type="password" placeholder="Senha" required
            onChange={handleOnChange}
          />
          <Input
            className="form" name="confirmaSenha" type="password" placeholder="Repita a senha" required
            onChange={handleOnChange}
          />
          
          <Button type="submit">Resetar senha</Button>
        </form>
      </BoxCadastro>
    </Main>
  );
}

export default ResetarSenha;
