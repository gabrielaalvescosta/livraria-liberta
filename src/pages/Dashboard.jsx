import React, { useState, useEffect } from 'react';
import { buscaUsuarioPeloId } from '../services/usuarioApi';

import {  
  Dados,
  FundoProfile,
  FotoPerfil,
  Perfil,
  DadosPerfil,
  TituloPerfil,
  TopoPerfil,
  LinhaPerfil,
  ColunaPerfil,
  EditaPerfil
} from '../components/Main/styles';
import Loading from '../components/Loading/Loading';

import mascaraDadosSensiveis from '../utils/mascaraDadosSensiveis';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [usuario, setUsuario] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleBuscaUsuario = async () => {
      try {
        const idUsuario = localStorage.getItem('idUsuario');
        const dados = await buscaUsuarioPeloId(idUsuario);
        setUsuario(dados.usuario);
      } catch (err) {
        console.log('Erro na requisição:', err.message);
      } finally {
        setIsLoaded(true);
      }
    }
    handleBuscaUsuario();
  }, []);
  
  if (!isLoaded) {
    return <Loading />;
  }
  
  return (
    <>
      <FundoProfile src={usuario.url_img} />
   
      <Perfil>
        <FotoPerfil src={usuario.url_img} />
        <DadosPerfil>
          <TituloPerfil>Minha conta</TituloPerfil>
          <h3>{usuario.nome}</h3>
        </DadosPerfil>
      </Perfil>
    
      <Dados>
        <TopoPerfil>
          <h2>Meus dados</h2>
          <EditaPerfil>
            <button type="button">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </EditaPerfil>
        </TopoPerfil>

        <LinhaPerfil>
          <ColunaPerfil titulo>Endereço:</ColunaPerfil>
          <ColunaPerfil>
            {usuario.endereco ? usuario.endereco : 'Sem endereço'}
          </ColunaPerfil>
        </LinhaPerfil>

        <LinhaPerfil>
          <ColunaPerfil titulo>Email:</ColunaPerfil>
          <ColunaPerfil>
            {usuario.email}
          </ColunaPerfil>
        </LinhaPerfil>

        <LinhaPerfil>
          <ColunaPerfil titulo>Senha:</ColunaPerfil>
          <ColunaPerfil>{mascaraDadosSensiveis(usuario.senha)}</ColunaPerfil>
        </LinhaPerfil>

        <LinhaPerfil>
          <ColunaPerfil titulo>CPF:</ColunaPerfil>
          <ColunaPerfil>{mascaraDadosSensiveis(usuario.CPF)}</ColunaPerfil>
        </LinhaPerfil>
      </Dados>
    </>
  );
}

export default Dashboard;
