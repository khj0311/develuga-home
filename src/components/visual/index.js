import React from 'react';
import {Navigation, Pagination} from 'swiper';
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
                        <Swiper
                            className='dvg-visual__swiper'
                            modules={[Navigation, Pagination]}
                            slidesPerView={3}
                            navigation
                            pagination={{
                            clickable: true
                        }}
                            loop={true}
                            centeredSlides={true}>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        // src='/images/visual/visual-galaxy-s23-ultra-pc.jpg'
                                        src='/images/common/blank.gif'
                                        data-img-src-pc='/images/visual/visual-galaxy-s23-ultra-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-s23-ultra-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-s23-ultra-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-s23-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-s23-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-s23-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-s23-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-watch5-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-watch5-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-watch5-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-watch5-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-watch5-pro-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-watch5-pro-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-watch5-pro-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-watch5-pro-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-buds2-pro-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-buds2-pro-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-buds2-pro-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-buds2-pro-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-tab-s8-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-tab-s8-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-tab-s8-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-tab-s8-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-watch4-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-watch4-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-watch4-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-watch4-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-watch4-classic-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-watch4-classic-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-watch4-classic-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-watch4-classic-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-buds2-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-buds2-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-buds2-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-buds2-mo.jpg'></img>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide className='dvg-visual__swiper-slide'>
                                <figure>
                                    <img
                                        className='js-img-res js-img-lazy'
                                        alt=''
                                        src='/images/visual/visual-galaxy-buds-pro-pc.jpg'
                                        data-img-src-pc='/images/visual/visual-galaxy-buds-pro-pc.jpg'
                                        data-img-src-tb='/images/visual/visual-galaxy-buds-pro-tb.jpg'
                                        data-img-src-mo='/images/visual/visual-galaxy-buds-pro-mo.jpg'></img>
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