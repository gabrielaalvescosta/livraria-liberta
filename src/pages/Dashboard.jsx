import React, { useState } from 'react';
import { Main, Dados, FundoProfile, FotoPerfil, Perfil, DadosPerfil, TituloPerfil, TopoPerfil, LinhaPerfil, ColunaPerfil, EditaPerfil } from '../components/Main/styles';
import Loading from '../components/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {


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
      <FontAwesomeIcon icon={faEdit} />
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
  )
}

export default Dashboard;
