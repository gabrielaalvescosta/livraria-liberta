import React, { useState } from 'react';
import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { BoxCadastro } from '../components/SignIn/styles';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import '../components/SignIn/signin.scss';

function Cadastro() {

  const { register, handleSubmit, formState: { erros } } = useForm();

  return (
    <Main>
      <Titulo>Cadastro</Titulo>
      <Barra/>
      <BoxCadastro>
      <form className="cadastro">
      <Input id="cpf" value={data.cpf} type="number" className="form" placeholder="CPF 000.000.000-00"/>
      <Input id="name" value={data.name} type="text" className="form" placeholder="Nome"/>
      <Input id="email" value={data.email} type="text" className="form" placeholder="Email"/>
      <div className="cadastro-senha">
      <Input id="password" value={data.password} metade type="password" className="form" placeholder="Senha"/>
      <Input metade type="password" className="form" placeholder="Repita a senha"/>
      </div>
      <Input id="address" value={data.adress} type="text" className="form" placeholder="Endereço"/>
      <LabelInput>Foto de perfil:</LabelInput>
      <Input id="photo" value={data.photo} type="url" className="form" placeholder="Foto de perfil"/>
      <Button type="submit">Cadastrar</Button>
      </form>
      </BoxCadastro>
    </Main>
  )
}

export default Cadastro;
 