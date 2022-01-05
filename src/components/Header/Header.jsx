import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/Logo";
import { Container, Wrapper, Left, Center, Pesquisa, Botoes } from './styles'
import './header.scss'

export default function Header() {

 
    return (
        <Container>
          <Wrapper>
    <Left>
    <NavLink to="/"><Logo/></NavLink>
    </Left>

    <Center>
    <form className="d-flex">
    <input className="pesquisar" type="search" placeholder="O que você procura?" aria-label="Search"/>
    <button className="lupa" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
    </Center>


    <Botoes>
    <button className="cadastre-se">
    <i className="fa fa-user-plus me-1"></i>
      <NavLink to="/login">Entre ou Cadastre-se</NavLink> 
    </button>
    <NavLink to="/carrinho"> <i className="fa fa-shopping-cart me-1"></i> Carrinho (0)</NavLink>
    </Botoes>

          </Wrapper>
        </Container>
    )
}
