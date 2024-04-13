import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import { TbDisabled } from "react-icons/tb";
import { MdFamilyRestroom, MdOutlineDiversity1, MdOutlineCastForEducation, MdOutlineBusinessCenter } from "react-icons/md";
import { GiHealthNormal, GiConvict, GiArchiveResearch, GiTechnoHeart, GiRegeneration } from "react-icons/gi";
import { PiPaintBrushBold } from "react-icons/pi";
import { LuTrees } from "react-icons/lu"; 
import { FaUserFriends, FaHotel, FaEnvira } from "react-icons/fa";
import { FaHandsPraying } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { CiBank } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";

SwiperCore.use([Navigation]);

import "swiper/css/grid";

const OnlineCourse2 = () => {
    const data = [
        {
            category_id: 9,
            category_name: "Business",
            total_num: 890,
        },
        {
            category_id: 10,
            category_name: "Personal Development",
            total_num: 1194,
        },
        {
            category_id: 11,
            category_name: "Sales & Marketing",
            total_num: 353,
        },
        {
            category_id: 12,
            category_name: "Engineering & Construction",
            total_num: 741,
        },
        {
            category_id: 13,
            category_name: "Business",
            total_num: 890,
        },
        {
            category_id: 14,
            category_name: "Personal Development",
            total_num: 1194,
        },
        {
            category_id: 15,
            category_name: "Sales & Marketing",
            total_num: 353,
        },
        {
            category_id: 16,
            category_name: "Engineering & Construction",
            total_num: 741,
        },
    ];

    const iconsMap = {
        "Business": HiOutlineSpeakerphone,        
        "Personal Development": CiBank,
        "Sales & Marketing": MdPerson,
        "Engineering & Construction": HiOutlineDocumentText
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
                    className="swiper-wrapper pb-70 pt-5 swiper-grid-jobobx"
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
                                            <div className="image-left" style={{width:'20px'}}>
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

export default OnlineCourse2;
