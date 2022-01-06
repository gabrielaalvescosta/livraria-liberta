import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/Logo";
import { Container, Wrapper, Left, Center, Botoes } from './styles'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
 
    return (
        <Container>
          <Wrapper>
    <Left>
    <NavLink to="/"><Logo/></NavLink>
    </Left>

    <Center>
    <form className="formulario">
    <input className="pesquisar" type="search" placeholder="O que você procura?" aria-label="Search"/>
    <button className="lupa" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
    </Center>


    <Botoes>
    <button className="cadastre-se">
    <NavLink to="/login"><FontAwesomeIcon icon={faUserCircle} className="fa-user" /></NavLink>
      <NavLink to="/login" className="link-cadastre">Entre ou Cadastre-se</NavLink> 
    </button>
    <button className="cadastre-se">
    <NavLink to="/carrinho"><FontAwesomeIcon icon={faShoppingCart} className="fa-cart" /></NavLink>
    <NavLink to="/carrinho" className="carrinho-cont">0</NavLink>
    </button>
    </Botoes>

          </Wrapper>
        </Container>
    )
}
