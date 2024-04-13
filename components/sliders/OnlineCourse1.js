import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiLockKey } from "react-icons/pi";

SwiperCore.use([Navigation]);
import "swiper/css/grid";

const OnlineCourse1 = () => {
    const data = [
        {
            category_id: 1,
            category_name: "IT",
            total_num: 1028,
        },
        {
            category_id: 2,
            category_name: "Health",
            total_num: 806,
        },
        {
            category_id: 3,
            category_name: "Language",
            total_num: 297,
        },
        {
            category_id: 4,
            category_name: "English",
            total_num: 55,
        },
        {
            category_id: 5,
            category_name: "IT",
            total_num: 1028,
        },
        {
            category_id: 6,
            category_name: "Health",
            total_num: 806,
        },
        {
            category_id: 7,
            category_name: "Language",
            total_num: 297,
        },
        {
            category_id: 8,
            category_name: "English",
            total_num: 55,
        },
    ];

    const iconsMap = {
        "IT": SlEarphonesAlt,
        "Health": HiOutlineLightBulb,
        "Language": TbDeviceDesktopAnalytics,
        "English": PiLockKey
    };
    
    

    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1199: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link
                                    legacyBehavior
                                    href={`/online-courses/search?category_id=${item.category_id}`}
                                >
                                    <a>
                                        <div className="item-logo">
                                            <div className="image-left">
                                                {React.createElement(
                                                    iconsMap[
                                                        item.category_name
                                                    ],
                                                    {
                                                        size: 50,
                                                        style: {
                                                            color: "#4294FF",
                                                        },
                                                    }
                                                )}
                                            </div>
                                            <div className="text-info-right">
                                                <h4 style={{fontSize:'16px'}}>{item.category_name}</h4>
                                                <p className="font-xs">
                                                    {item.total_num}
                                                    <span>
                                                        {" "}
                                                       courses available
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default OnlineCourse1;
