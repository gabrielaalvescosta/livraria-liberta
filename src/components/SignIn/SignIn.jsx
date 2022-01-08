import React, { useState } from 'react';
import { BoxLogin } from './styles';
import { Button, ButtonLink } from '../Button/button';
import { Subtitulo, Titulo } from '../Headings/styles';

import './signin.scss'



const SignIn = () => {


    return (
        <BoxLogin>
         <div className="cadastrar">
        <Subtitulo>Ainda não tem cadastro aqui?</Subtitulo>
         <Button><ButtonLink to="/cadastro">Cadastre-se</ButtonLink></Button>
         </div>

         <div className="entrar">
         <Subtitulo>Ou entre agora.</Subtitulo>
         <input type="text" className="form" placeholder="Email"/>
         <input type="password" className="form" placeholder="Senha"/>
         <p className="paragrafo">Esqueci minha senha</p>
         <Button azul type='submit'>Entrar</Button>
         </div>
        </BoxLogin>
    )
}

export default SignIn;