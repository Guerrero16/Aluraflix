import { styled } from "styled-components";
import { ContenidoParcial, Logo } from "../../UI/Estilos";
import logo from "../../assets/img/Logo.png";
import React from "react";

const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.primero};
    text-align: center;
`;

// const HeaderContenido = styled(ContenidoParcial)`
//     display: flex;
//     justify-content: center;
//     justify-content: space-between;
// `;

// const HeaderLink = styled(Link)`
//     display: flex;
//     align-items: center;
// `;

export function HeaderCabecera() {
    return (
        <Header>
            <ContenidoParcial>

                <Logo src={logo} alt="Logo aluraflix" />

            </ContenidoParcial>
        </Header>
    )
}