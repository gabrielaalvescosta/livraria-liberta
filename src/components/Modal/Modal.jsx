import React from 'react';
import { Dados, TopoPerfil, LinhaPerfil, ColunaPerfil, EditaPerfil } from '../Main/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Modal = () => {
    return (
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
    );
}

export default Modal;
