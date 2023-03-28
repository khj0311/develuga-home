import React from 'react';
import { Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class Visual extends React.Component {
    render() {
        return (
            <section id='develuga-visual' className='dvg-visual'>
                <div className='dvg-visual__wrap'>
                    <div className='dvg-visual__container'>
                        <Swiper className='dvg-visual__swiper'
                            modules={[Navigation, Pagination]}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-s23-ultra.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-s23-ultra-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-s23-ultra-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-s23-ultra.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-s23.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-s23-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-s23-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-s23.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-watch5.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-watch5-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-watch5-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-watch5.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-buds2-pro.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-buds2-pro-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-buds2-pro-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-buds2-pro.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-tab-s8.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-tab-s8-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-tab-s8-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-tab-s8.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-watch4.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-watch4-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-watch4-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-watch4.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-watch4-classic.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-watch4-classic-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-watch4-classic-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-watch4-classic.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-buds2.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-buds2-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-buds2-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-buds2.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <picture>
                                        <source media='(min-width:1024px)' srcSet='/images/visual/visual-galaxy-buds-pro.jpg'></source>
                                        <source media='(min-width:768px)' srcSet='/images/visual/visual-galaxy-buds-pro-m.jpg'></source>
                                        <source media='(max-width:767px)' srcSet='/images/visual/visual-galaxy-buds-pro-s.jpg'></source>
                                        <img src='/images/visual/visual-galaxy-buds-pro.jpg' alt=''></img>
                                    </picture>
                                </figure>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        )
    }
}

export default Visual;