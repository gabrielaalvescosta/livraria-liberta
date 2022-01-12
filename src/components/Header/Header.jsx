import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Context } from '../../context/AuthContext';
import { PesquisaContext } from '../../context/PesquisaContext';
import { useCart } from '../Carrinho/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingCart, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Logo";

import { Container, Wrapper, Left, Center, Botoes } from './styles';
import './header.scss';

function Header() {
  const { autenticado, handleLogout } = useContext(Context);
  const { handlePesquisa } = useContext(PesquisaContext);
  const items = useCart();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/pesquisa');
  }
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to="/">
            <Logo/>
          </NavLink>
        </Left>

        <Center>
          <form className="formulario" onSubmit={handleSubmit}>
            <input
              className="pesquisar" type="search" placeholder="Pesquise pelo seu livro" aria-label="Search"
              onChange={handlePesquisa}
            />
            <button className="lupa" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
          </form>
        </Center>

        <Botoes>
          {
            autenticado
            ?
            <button className="cadastre-se" onClick={handleLogout} title="Sair">
              <FontAwesomeIcon icon={faSignOutAlt} className="fa-user" />
              <span className="link-cadastre">Sair</span> 
            </button>
            :
            <button className="cadastre-se" title="Entre ou Cadastre-se">
              <NavLink to="/login">
                <FontAwesomeIcon icon={faUserCircle} className="fa-user" />
              </NavLink>
              <NavLink to="/login" className="link-cadastre">Entre ou Cadastre-se</NavLink> 
            </button>
          }

          <button className="cadastre-se" title="Carrinho">
            <NavLink to="/carrinho">
              <FontAwesomeIcon icon={faShoppingCart} className="fa-cart" />
            </NavLink>
            <NavLink to="/carrinho" className="carrinho-cont">{items.length}</NavLink>
          </button>
        </Botoes>
      </Wrapper>
    </Container>
  );
}

export default Header;
