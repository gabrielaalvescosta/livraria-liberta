import React from 'react';
import { BoxLogin } from './styles';
import { ButtonP, ButtonA } from '../Button/Button';
import { NavLink } from 'react-router-dom';


import './signin.scss'

export default function SignIn() {
    return (
        <BoxLogin>
         <div className="cadastrar"><h2>Ainda não tem cadastro aqui?</h2>
         <ButtonP><NavLink to="/cadastro">Cadastre-se</NavLink></ButtonP>
         </div>

         <div className="entrar"><h2>Entre agora</h2>
         <input type="text" className="form" placeholder="Email"/>
         <input type="password" className="form" placeholder="Senha"/>
         <p className="paragrafo">Esqueci minha senha</p>
         <ButtonA> Login</ButtonA>
         </div>
        </BoxLogin>
    )
}
