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
                            src="assets/imgs/page/scholarship/people/doug.png"
                            alt="HibretOne"
                            className="rounded-corners"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/patricia.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/alison online.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/gordon.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/jof.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/extendVentures.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/theo.jpeg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/melissa.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/legacy.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/dr-mark-esho.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/keith.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/Tech-Nation-logo.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/pam-2.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/profaleks.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/drop_logo.webp"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/dominique.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/nick.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/miss macaroon.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/maxine.webp"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/rose.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/womanwho_logo.jpg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/yiannis maos mbe.jpeg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>

                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/page/scholarship/people/paul scully.jpeg"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img
                            src="assets/imgs/slider/logo/TheDataCompany_logo-2.png"
                            alt="HibretOne"
                            className="rounded-corners"

                        />
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    );
};

export default BrandSlider;
