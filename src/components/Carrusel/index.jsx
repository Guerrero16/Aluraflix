import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { CardVideo } from "../CardVideo";
import { useContext } from "react";
import { Contexto } from "../../Contexto";


export function Carrusel({ categoria_id, color }) {
    const datos = useContext(Contexto);
    const videos = datos.videos.filter((dato) => dato.categoria+'' === '' +categoria_id);
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {
                videos.map((video, indice) => {
                    return (
                        <SwiperSlide key={indice} >
                            <CardVideo link={video.link_video} src={video.link_imagen} color={color} />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
}