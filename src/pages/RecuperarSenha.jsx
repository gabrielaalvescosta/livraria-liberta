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

    event.target.reset();
  }

  return (
    <Main>
      <Titulo>Recuperar senha</Titulo>
      <Barra/>
      <BoxCadastro>
        <form onSubmit={handleOnSubmit}>
          <LabelInput>Digite seu email:</LabelInput>
          <Input
            className="form" name="email" type="email" placeholder="Email" required
            onChange={handleGetEmail}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </BoxCadastro>
    </Main>
  );
}

export default RecuperarSenha;
