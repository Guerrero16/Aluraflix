import axios from "axios";

export const api = axios.create({
    baseURL: 'https://fake-api-aluraflix.vercel.app/'
});

export const listarCategorias = async (url, setDatos) => {
    const respuesta = await api.get(url);
    setDatos(respuesta)
}