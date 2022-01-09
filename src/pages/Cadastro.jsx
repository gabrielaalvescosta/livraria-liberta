import React from 'react';
import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { BoxCadastro } from '../components/SignIn/styles';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';

import '../components/SignIn/signin.scss';

function Cadastro() {
  return (
    <Main>
      <Titulo>Cadastro</Titulo>
      <Barra/>
      <BoxCadastro>
      <div className="cadastro">
      <Input type="number" className="form" placeholder="CPF 000.000.000-00"/>
      <Input type="text" className="form" placeholder="Email"/>
      <div className="cadastro-senha">
      <Input metade type="password" className="form" placeholder="Senha"/>
      <Input metade type="password" className="form" placeholder="Repita a senha"/>
      </div>
      <Input type="text" className="form" placeholder="Endereço"/>
      <LabelInput>Foto de perfil:</LabelInput>
      <Input type="file" className="form" placeholder="Foto de perfil"/>
      <Button>Cadastrar</Button>
      </div>
      </BoxCadastro>
    </Main>
  )
}

export default Cadastro;
 