import React from 'react';
import { Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class Visual extends React.Component {
    render() {
        return (
            <div id='develuga-visual' className='dvg-visual'>
                <div className='dvg-visual__wrap'>
                    <Swiper className='dvg-visual__swiper'
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}>
                        <SwiperSlide className='dvg-visual__swiper-slide'>
                            <figure>
                                <picture>
                                    <source media='(min-width:1024px)' srcSet='/src/images/kv-galaxy-s23-ultra.jpg'></source>
                                </picture>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide className='dvg-visual__swiper-slide'>Slide 2</SwiperSlide>
                        <SwiperSlide className='dvg-visual__swiper-slide'>Slide 3</SwiperSlide>
                        <SwiperSlide className='dvg-visual__swiper-slide'>Slide 4</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default Visual;