import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPrayingHands, faBook, faScroll, faHandsHelping, faRobot } from '@fortawesome/free-solid-svg-icons';
import { CardsCategorias, Categoria } from './styles';

const Categorias = () => {
    return (
       
        <CardsCategorias>
        <Categoria>
        <FontAwesomeIcon icon={faHeart} className="fa-user" />
        <p>Romance</p>
        </Categoria>
        <Categoria>
        <FontAwesomeIcon icon={faPrayingHands} className="fa-user" />
        <p>Religioso</p>
        </Categoria>
        <Categoria>
        <FontAwesomeIcon icon={faBook} className="fa-user" />
        <p>Didático</p>
        </Categoria>
        <Categoria>
        <FontAwesomeIcon icon={faScroll} className="fa-user" />
        <p>Biografia</p>
        </Categoria>
        <Categoria>
        <FontAwesomeIcon icon={faHandsHelping} className="fa-user" />
        <p>Ajuda</p>
        </Categoria>
        <Categoria>
        <FontAwesomeIcon icon={faRobot} className="fa-user" />
        <p>Ficção</p>
        </Categoria>
        </CardsCategorias>
       
    );
}

export default Categorias;