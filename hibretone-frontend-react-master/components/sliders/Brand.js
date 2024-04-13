import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import dynamic from "next/dynamic";

SwiperCore.use([Navigation]);

const BrandSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-9 swiper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                    }}
                    centeredSlides={true}
                    // when window width is >= 320px
                    breakpoints={{
                        640: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/Aston_Uni.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/Tech-Nation-logo.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/UoB_Crest_Logo_RGB_POS_Stacked.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/NatWest-Logo.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/somerset house.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/womanwho_logo.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/TheDataCompany_logo-2.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/WMEH.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/alison online.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/big5Logo.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/drop logo.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/disabled entrepreneur logo.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/IAWM-website-logo.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/bcu-birmingham-city-university8936.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/race equality matters logo.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/Birmingham-Tech-Mobile-LOGO.png"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/mlabs.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/Kaleida-logo-q0jv6rpoxjt8plekprdri4ssa7982hzrxbt2zasfxc.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/bda dyslexialogo.jpg"
                            alt="HibretOne"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BrandSlider;
