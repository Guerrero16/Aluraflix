import { createContext, useEffect, useState } from "react";
import { listarCategorias } from "./services/categorias.services";
import { listarVideos } from "./services/videos.services";

export const Contexto = createContext();

export function ProveedorContexto({ children }) {
    const [videos, setVideos] = useState();
    const [categorias, setCategorias] = useState();
    const [actulizador, setActualizador] = useState(1);

    useEffect(() => {
        listarVideos("/videos", setVideos);
    }, [actulizador]);

    useEffect(() => {
        listarCategorias("/categorias", setCategorias);
    }, [actulizador]);

    if (videos && categorias) {
        return (
            <Contexto.Provider
                value={{
                    videos: videos.data,
                    categorias: categorias.data,
                    valor: actulizador,
                    recargar: setActualizador
                }}
            >
                {children}
            </Contexto.Provider>
        );
    }
}