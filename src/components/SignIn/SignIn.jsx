import React, { useState } from 'react';
import { BoxLogin } from './styles';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';


import './signin.scss'


function SignIn() {
 
    return (
        <BoxLogin>
         <div className="cadastrar"><h2>Ainda não tem cadastro aqui?</h2>
         <Button><Link to="/cadastro">Cadastre-se</Link></Button>
         </div>

         <div className="entrar"><h2>Entre agora</h2>
         <input type="text" className="form" placeholder="Email"/>
         <input type="password" className="form" placeholder="Senha"/>
         <p className="paragrafo">Esqueci minha senha</p>
         <Button azul>Login</Button>
         </div>
        </BoxLogin>
    )
}

export default SignIn;