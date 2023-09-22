import { createContext, useEffect, useState } from "react";
import { listarCategorias } from "./services/categorias.services";
import { listarVideos } from "./services/videos.services";

export const Contexto = createContext();

export function ProveedorContexto({ children }) {
    const [videos, setVideos] = useState();
    const [categorias, setCategorias] = useState();

    useEffect(() => {
        listarVideos("/videos", setVideos);
    }, []);

    useEffect(() => {
        listarCategorias("/categorias", setCategorias);
    }, []);

    if (videos && categorias) {
        return (
            <Contexto.Provider
                value={{ videos: videos.data, categorias: categorias.data }}
            >
                {children}
            </Contexto.Provider>
        );
    }
}