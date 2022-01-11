import React, { useState, useEffect } from 'react';
import { buscaUsuarioPeloId } from '../services/usuarioApi';

import { Main, Dados, FundoProfile, FotoPerfil, Perfil, DadosPerfil, TituloPerfil, TopoPerfil, LinhaPerfil, ColunaPerfil, EditaPerfil } from '../components/Main/styles';
import Loading from '../components/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal/Modal';

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
    <div>
    <FundoProfile />
   
    <Perfil>
    <FotoPerfil />
    <DadosPerfil>
      <TituloPerfil>Minha conta</TituloPerfil>
      <h3>Gabriela Costa</h3>
    </DadosPerfil>
    </Perfil>
   
    <Dados>
      <TopoPerfil>
      <h2>Meus dados</h2>
      <EditaPerfil>
        <button onClick={e => {this.showModal()}}> <FontAwesomeIcon icon={faEdit} /><Modal/></button>
       
     
      </EditaPerfil>
      </TopoPerfil>

      <LinhaPerfil>
      <ColunaPerfil titulo>Endereço:</ColunaPerfil>
      <ColunaPerfil>Rua Geraldina Carlos dos Santos, 67 - Núcleo Residencial Isabela - Taboão da Serra / SP
      </ColunaPerfil>
      </LinhaPerfil>


      <LinhaPerfil>
      <ColunaPerfil titulo>Email:</ColunaPerfil>
      <ColunaPerfil>gabrielaaalvescosta@gmail.com</ColunaPerfil>
      </LinhaPerfil>

    
      <LinhaPerfil>
      <ColunaPerfil titulo>Senha</ColunaPerfil>
      <ColunaPerfil>***********</ColunaPerfil>
      </LinhaPerfil>


      <LinhaPerfil>
      <ColunaPerfil titulo>CPF</ColunaPerfil>
      <ColunaPerfil>***********94</ColunaPerfil>
      </LinhaPerfil>

    </Dados>
    </div>
  );
}

export default Dashboard;
