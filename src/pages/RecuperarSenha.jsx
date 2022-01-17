import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { enviaEmail } from '../services/authApi';
import toastOptions from '../utils/toastOptions';

import { BoxCadastro } from '../components/SignIn/styles';
import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';

function RecuperarSenha() {
  const [email, setEmail] = useState('');

  const handleGetEmail = event => {
    setEmail(event.target.value);
  }

  const handleOnSubmit = async event => {
    event.preventDefault();
    const id = toast.loading('Enviando email...', toastOptions);
    
    // Mesmo que o email não exista envia uma mensagem dizendo que enviou o email.
    await enviaEmail(email);

    toast.update(id, {
      ...toastOptions,
      render: 'Email enviado com sucesso!',
      type: 'success',
      isLoading: false,
    });
  }

  return (
    <Main>
      <Titulo>Recuperar senha</Titulo>
      <Barra/>
      <BoxCadastro>
        <form className="cadastro" onSubmit={handleOnSubmit}>
          <LabelInput>Digite seu email:</LabelInput>
          <Input
            className="form" name="email" type="email" placeholder="Email" required
            onChange={handleGetEmail}
          />
          <Button type="submit">Enviar</Button>
        </form>
        
        {/* <form>
          <LabelInput>Digite sua nova senha:</LabelInput>
          <Input
            className="form" name="senha" type="password" placeholder="Senha" required
          />
          <Input
            className="form" name="confirmaSenha" type="password" placeholder="Repita a senha" required
          />
          
          <Button type="submit">Resetar senha</Button>
        </form> */}
      </BoxCadastro>
    </Main>
  );
}

export default RecuperarSenha;
