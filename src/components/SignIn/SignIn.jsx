import React, { useState } from 'react';
import { BoxLogin } from './styles';
import { Button, ButtonLink } from '../Button/button';

import './signin.scss'


function SignIn() {
 
    return (
        <BoxLogin>
         <div className="cadastrar"><h2>Ainda não tem cadastro aqui?</h2>
         <Button><ButtonLink to="/cadastro">Cadastre-se</ButtonLink></Button>
         </div>

         <div className="entrar">
         <input type="text" className="form" placeholder="Email"/>
         <input type="password" className="form" placeholder="Senha"/>
         <p className="paragrafo">Esqueci minha senha</p>
         <Button azul>Login</Button>
         </div>
        </BoxLogin>
    )
}

export default SignIn;