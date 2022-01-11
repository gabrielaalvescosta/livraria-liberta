import React, { useState } from 'react';
import { Input, LabelInput } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { BoxCadastro } from '../components/SignIn/styles';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';
import { criaUsuario } from '../services/usuarioApi';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import '../components/SignIn/signin.scss';
import { useNavigate } from 'react-router-dom';

function Cadastro() {

  const [data, setData] = useState({
    "CPF": "",
    "nome": "",
    "email": "",
    "senha": "",
    "endereco": "",
    "url_img": "",
  });

  function onChange(e) {
    setData({...data, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    console.log(data);

  
      const res = await criaUsuario(data);
      console.log(res);

      if(res.erro) {
        toast(res.msg);
      } else {
        navigate('/login');
        console.log(res);
      }
   
  }

  

  return (
    <Main>
      <Titulo>Cadastro</Titulo>
      <Barra/>
      <BoxCadastro>
      <form onSubmit={submit} className="cadastro">
      <Input required onChange={onChange} name="CPF" type="text" className="form" placeholder="CPF 00000000000"/>
      <Input required onChange={onChange} name="nome" type="text" className="form" placeholder="Nome"/>
      <Input required onChange={onChange}  name="email" type="email" className="form" placeholder="Email"/>
      <div className="cadastro-senha">
      <Input required onChange={onChange} metade  name="senha" type="password" className="form" placeholder="Senha"/>
      <Input required metade type="password" className="form" placeholder="Repita a senha"/>
      </div>
      <Input required onChange={onChange}  name="endereco" type="text" className="form" placeholder="Endereço"/>
      <LabelInput>Foto de perfil:</LabelInput>
      <Input required onChange={onChange} name="url_img" type="url" className="form" placeholder="Foto de perfil"/>
      <Button type="submit">Cadastrar</Button>
      <ToastContainer />
      </form>
      </BoxCadastro>
    </Main>
  )
}

export default Cadastro;
 