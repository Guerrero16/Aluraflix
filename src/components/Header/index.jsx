import React from "react";
import { styled } from "styled-components";
import { ContenidoParcial, Logo } from "../../UI/Estilos";
import logo from "../../assets/img/Logo.png";
import { Link, useLocation } from 'react-router-dom';


const Header = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.primero};
    text-align: center;
`;

const HeaderContenido = styled(ContenidoParcial)`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    @media (max-width: 800px) {
      justify-content: center;
`;

const HeaderBoton = styled(Link)`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 5px 14px;
    margin: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
    color: var(--colorLogo);
  }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
    }

`;

const HeaderLink = styled(Link)`
    display: flex;
    align-items: center;
    margin: 5px;
 
    @media (max-width: 800px){
        margin: 10px
    }
`;


export function HeaderCabecera() {
    const url = useLocation()
    return (
        <Header>
            <HeaderContenido>
                <HeaderLink to="/">
                    <Logo src={logo} alt="Logo aluraflix" />
                </HeaderLink>
                {url.pathname === '/' && <HeaderBoton  type='lineas' color="#fff" to='/video'>Nuevo Video</HeaderBoton>}
            </HeaderContenido>
        </Header>
    );
}