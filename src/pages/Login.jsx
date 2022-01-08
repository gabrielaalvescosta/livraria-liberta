import React from 'react';
import { Main } from '../components/Main/styles';
import SignIn from '../components/SignIn/SignIn';
import { Titulo, Barra } from '../components/Headings/styles';

function Login() {
  return (
    <Main>
      <Titulo>Compre já!</Titulo>
      <Barra/>
      <SignIn/>
    </Main>
  )
}

export default Login;
