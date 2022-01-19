import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import { BoxLogin } from './styles';
import { Button, ButtonLink } from '../Button/Button';
import { Subtitulo } from '../Headings/styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './signin.scss'

function SignIn() {
  const { handleLogin } = useContext(AuthContext);
  const [dados, setDados] = useState({
    email: '',
    senha: '',
  });

  const handleInputChange = (event) => {
    const input = event.target;
    setDados({
      ...dados, [input.name]: input.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(dados);
  }

  return (
    <BoxLogin>
      <div className="cadastrar">
        <Subtitulo>Ainda não tem cadastro aqui?</Subtitulo>
        <Button>
          <ButtonLink to="/cadastro">Cadastre-se</ButtonLink>
        </Button>
      </div>

      <div className="entrar">
        <Subtitulo>Ou entre agora.</Subtitulo>
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleInputChange}
          />
          <input
            className="form" 
            type="password" 
            name="senha" 
            placeholder="Senha"
            required
            onChange={handleInputChange}
          />
          
          <Link className="paragrafo" to="/recuperar-senha">
            <FontAwesomeIcon icon={faArrowRight} /> Esqueci minha senha
          </Link>
          
          <Button azul type='submit'>Entrar</Button>
        </form>
      </div>
    </BoxLogin>
  );
}

export default SignIn;
