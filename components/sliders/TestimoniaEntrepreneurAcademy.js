import SwiperCore, { Navigation } from "swiper";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
;
SwiperCore.use([Navigation]);

const TestimoniaEntrepreneurAcademy = () => {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false)
    const [showMore5, setShowMore5] = useState(false);
    const [showMore6, setShowMore6] = useState(false);
    const [showMore7, setShowMore7] = useState(false);

    return (
        <>
            <div className="swiper-container swiper-group-4-border swiper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{ 640: {
                        slidesPerView: 3
                      }}}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/entrepreneur-academy/2.jfif" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Sophie-Marie Bennett</h5>
                                    <p className="font-xs">Founder</p>
                                    <p className="font-xs">Black Owned Birmingham</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore1 ? "To maintain the West Midlands largest Black Business and Community network, we add great value in sharing hibretOne resources with our users" : "To maintain the West Midlands largest Black Business and Community network, we add great value in sharing hibretOne resources"}
                                    <button className="btn-show-more" onClick={() => setShowMore1(!showMore1)}>{showMore1 ? "show less" : "...more"}</button>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/entrepreneur-academy/1.jfif" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Alisha Fernandes</h5>
                                    <p className="font-xs">Entrepreneur & Former Intern </p>
                                    <p className="font-xs">Aston University Graduate</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore2 ? "I started off working as an intern at hibretOne. Following the programme I have had 5 job offers, 3 in the same week. In addition to working" : "I started off working as an intern at hibretOne. Following the programme I have had 5 job offers, 3 in the same week."}
                                    <button className="btn-show-more" onClick={() => setShowMore2(!showMore2)}>{showMore2 ? "show less" : "...more"}</button>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/entrepreneur-academy/3.jfif" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Tina Salt</h5>
                                    <p className="font-xs">Founder</p>
                                    <p className="font-xs">Making Animals Important</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore3 ? "I have attended a number of hibretOne’s in-person training events. Receiving valuable funding and business advice" : "I have attended a number of hibretOne’s in-person training events. Receiving valuable funding"}
                                    <button className="btn-show-more" onClick={() => setShowMore3(!showMore3)}>{showMore3 ? "show less" : "...more"}</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/4.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Oyinkansola Adebayo</h5>
                                    <p className="font-xs">CEO & Founder</p>
                                    <p className="font-xs">Niyo Group</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore4 ? "Through the support of hibretOne we were able to access a substantial grant package from the West Midlands Combined Authority (WMCA). This support and funding came at a time when we were really struggling with our business. Since that funding we have gone from strength-to-strength. Training over 650 Black females in tech in 2 years. Some of them achieving higher-paid jobs at places like Goldman Sachs, others have started their own business. Over 7000 women benefit from support from our tech focussed programmes every year. All of this with a little, much-needed kickstart from hibretOne." : "Through the support of hibretOne we were able to access a substantial grant package from the West Midlands Combined Authority"}
                                    <button className="btn-show-more" onClick={() => setShowMore4(!showMore4)}>{showMore4 ? "show less" : "...more"}</button>
                                </div>                            
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/5.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Ashley Meninelli</h5>
                                    <p className="font-xs">Vice Consul Technology</p>
                                    <p className="font-xs">Department for Business and Trade (DBT)</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore5 ? "Drew was an absolutely pivotal connector for the UK's first Black Tech Founders Mission, a 2-month long accelerator programme focused on supporting 12 Black founded UK tech companies enter the US market and raise US VC. hibretOne provided critical programme feedback that allowed us to design the accelerator to best support our target founders, and opened up his vast UK network that enabled us to secure strategic partnerships for recruitment and programming." : "Drew was an absolutely pivotal connector for the UK's first Black Tech Founders Mission, a 2-month long accelerator programme"}
                                    <button className="btn-show-more" onClick={() => setShowMore5(!showMore5)}>{showMore5 ? "show less" : "...more"}</button>
                                </div>                            
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/6.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Conor McManus</h5>
                                    <p className="font-xs">Founder</p>
                                    <p className="font-xs">Collective Fitness</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore6 ? "I was introduced to hibretOne through the NatWest Entrepreneur Accelerator. Through the hibretOne monthly newsletter, I found the Supertech Incubator. I was one of the lucky ones, and am currently having my MVP built through Supertech. This has led me to do a seed round this summer. Thank you hibretOne for all your support and directing me to sources of support!" : "I was introduced to hibretOne through the NatWest Entrepreneur Accelerator. Through the hibretOne monthly newsletter, I"}
                                    <button className="btn-show-more" onClick={() => setShowMore6(!showMore6)}>{showMore6 ? "show less" : "...more"}</button>
                                </div>                            
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/7.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Prof Monder Ram OBE</h5>
                                    <p className="font-xs">Director of the Centre of Research in Ethnic Minority Entrepreneurship in Aston University</p>
                                    {/* <p className="font-xs">Aston University</p> */}
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore7 ? "The potential for this entrepreneur-led business model to reach out and be inclusive to all, regardless of background, puts into practise what the Centre of Research in Ethnic Minority Entrepreneurship at Aston aims to highlight. I believe this collaborative project matches our mission to 'make diversity and enterprise everyone's business." : "The potential for this entrepreneur-led business model to reach out and be inclusive to all, regardless of background, puts into"}
                                    <button className="btn-show-more" onClick={() => setShowMore7(!showMore7)}>{showMore7 ? "show less" : "...more"}</button>
                                </div>                            
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default TestimoniaEntrepreneurAcademy;
