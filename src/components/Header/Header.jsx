import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/Logo";
import { Container, Wrapper, Left, Center, Botoes } from './styles'
import './header.scss'

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
    <button className="lupa" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
    </Center>


    <Botoes>
    <button className="cadastre-se">
    <NavLink to="/login"><i className="fa fa-user-plus me-1"></i></NavLink>
      <NavLink to="/login" className="link-cadastre">Entre ou Cadastre-se</NavLink> 
    </button>
    <button className="cadastre-se">
    <NavLink to="/carrinho"><i className="fa fa-shopping-cart me-1"></i> </NavLink>
    <NavLink to="/carrinho">(0)</NavLink>
    </button>
    </Botoes>

          </Wrapper>
        </Container>
    )
}
