import React from "react";
import { styled } from "styled-components";
import { ContenidoParcial, Logo } from "../../UI/Estilos";
import logo from "../../assets/img/Logo.png";
import { Link } from 'react-router-dom';


const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.primero};
    text-align: center;
`;

const HeaderContenido = styled(ContenidoParcial)`
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;

const HeaderBoton = styled(Link)`
    text-transform: capitalize;
    text-align: center;
    padding: .5rem 2rem;
    line-height: 1;
    box-sizing: border-box;
    border-radius: .25rem;
    font-weight: 300;
    font-size: 1rem;
    text-decoration: none;
    ${({ type, color }) => {
        switch (type) {
            case 'lineas':
                return `
                    display: inline-block;
                    border: 1px solid ${color}; 
                    color: ${color};
                `
            default:
                return `
                    display: inline-block;
                    background-color: ${color}; 
                    color: black;
                `
        }
    }
    };
    display: none;
    @media screen and (min-width: 1024px) {
        display: initial;
    }
`;

const HeaderLink = styled(Link)`
    display: flex;
    align-items: center;
`;


export function HeaderCabecera() {
    return (
        <Header>
            <HeaderContenido>
                <HeaderLink to="/">
                    <Logo src={logo} alt="Logo aluraflix" />
                </HeaderLink>
                <HeaderBoton type='lineas' color="#fff" to='/video'>
                    Nuevo Video
                </HeaderBoton>
            </HeaderContenido>
        </Header>
    );
}