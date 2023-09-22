import React from 'react';
import { styled } from 'styled-components';
import { useContext } from "react";
import { Contexto } from "../Contexto";
import { Banner } from '../components/Banner';
import { Categoria } from '../components/Categoria';

const Principal = styled.main`
    background: ${({ theme }) => theme.oscuro};
`;

export function Home() {
    const datos = useContext(Contexto);
    const { categorias } = datos
    return (
        <Principal>
            <Banner />
            {
                categorias.map((categoria, indice) => {
                    return (
                        <Categoria categoria_id={categoria.id} nombre={categoria.nombre} color={categoria.color} key={indice} />
                    );
                })
            }
        </Principal>
    );
}