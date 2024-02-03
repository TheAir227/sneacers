import banner from "../../../public/baner/banner.jpg"
import Button from "../Button/Button"
import './Banner.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



export default function Banner() {
    return (
        <>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="banner">
                    <img className="banner-img" src={banner} alt="" />
                    <div className="banner-text">
                        <h1>Stan Smith, <br />
                            <span>Forever!</span></h1>
                        <Button href="/banner" padding="40px" bradius="110px">КУПИТЬ</Button>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner">
                    <img className="banner-img" src={banner} alt="" />
                    <div className="banner-text">
                        <h1>Stan Smith, <br />
                            <span>Forever!</span></h1>
                        <Button href="/banner" padding="40px" bradius="110px">КУПИТЬ</Button>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}