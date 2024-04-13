import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TestimonialSlider1 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-3">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">Thanks to Drew's support, I got a fully funded grant from Coventry University to update my company's logo, branding, and homepage, taking us to the next level.</p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="assets/imgs/page/about/customer1.jpg" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Ameesha Green</h6>
                                    <span>Director, The Book Shelf</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">Drew provides consistent and essential support to entrepreneurs in in our West Midlands Eco-system. This support provides essential lifeblood for entrepreneurial growth and ultimately their survival. Essential support on funding and access to finance.</p>
                                <p className="font-md color-text-paragraph">He is a super connector that pulls together the wide-reaching information available across the region and provides a single point of truth to entrepreneurs via his newsletter. His Show Me The Money workshops pull together experts and funders from across the region.</p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="assets/imgs/page/about/customer2.jpg" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Pam Sheemar</h6>
                                    <span>Director, Commercial Banking NatWest</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">I've just been part of the inaugural Department for International Trade's UK Black Founders Mission' to NYC. My face and company featured on the famous big screen on the Nasdaq Building in Times Square. </p>
                                <p className="font-md color-text-paragraph">Without Drew's introduction to the DIT programme it would never have happened, and we wouldn't have made the connections that are now enabling us to grow our business in the lucrative US market.</p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="assets/imgs/page/about/customer3.jpg" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Mark Adair</h6>
                                    <span>Businessmen</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="swiper-pagination swiper-pagination3" />
        </>
    );
};

export default TestimonialSlider1;
