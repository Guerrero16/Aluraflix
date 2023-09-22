import React from "react";
import styled from "styled-components";
import { Imagen } from "../../UI/Estilos";


const CardVideoLink = styled.a`

`;

const CarrucelImagen = styled(Imagen)`
    border: 1px solid ${({ color }) => color};
    box-sizing: border-box;
`;

export function CardVideo({ link, src, color }) {
    return (
        <CardVideoLink href={link} target="_blank" >
            <CarrucelImagen src={src} color={color} ></CarrucelImagen>
        </CardVideoLink>
    );
}