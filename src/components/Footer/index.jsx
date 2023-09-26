import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContenidoParcial } from "../../UI/Estilos";

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.oscuro};
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme.primero};
    @media (max-width: 800px){
        margin-bottom: 20px;
    }
`;
const LinkExterno = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primero};
    font-weight: 700;
`;

const FooterContenido = styled(ContenidoParcial)`
    text-align: center;
    color: ${({ theme }) => theme.texto};
`;

export function PiePagina() {
    return (
        <Footer>
            <FooterContenido>
                <a href='https://github.com/Guerrero16' target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize='large'/>
                </a>
                <a href="https://www.linkedin.com/in/ra%C3%BAl-jimenez-tellez-1469a7207/" target="_blank"
                                rel="noopener noreferrer">
                <LinkedInIcon fontSize='large'/>
                </a>
                <p>
                &copy;AluraLatam 2023 - Desarollador por{' '}
                <LinkExterno href='https://github.com/Guerrero16' target="_blank" rel="noopener noreferrer">Raul Jimenez</LinkExterno>
                </p>
            </FooterContenido>
        </Footer>
    );
} 