import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

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

SwiperCore.use([Navigation]);

import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider1 = () => {
    // const [data, setData] = useState([]);
    // const getCategories = async () => {
    //     const reqOptions = {
    //         method: "get",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };

    //     try {
    //         const data = await axiosFetchWithRetry({
    //             url: "/grants/grant-categories",
    //             reqOptions: reqOptions,
    //             timeout: 2000,
    //         });
    //         setData(data);
    //     } catch (error) {
    //         console.error({ error: error.message });
    //     }
    // };

    // useEffect(() => {
    //     getCategories();
    // }, []);
    const data = [
        {
            category_id: 11,
            category_name: "Arts",
            total_num: 0,
        },
        {
            category_id: 12,
            category_name: "Rural",
            total_num: 0,
        },
        {
            category_id: 13,
            category_name: "Equality & Diversity",
            total_num: 0,
        },
        {
            category_id: 14,
            category_name: "Regeneration",
            total_num: 0,
        },
        {
            category_id: 15,
            category_name: "Religion",
            total_num: 0,
        },
        {
            category_id: 16,
            category_name: "Social Enterprise",
            total_num: 0,
        },
        {
            category_id: 17,
            category_name: "Leisure & Tourism",
            total_num: 0,
        },
        {
            category_id: 18,
            category_name: "Employment",
            total_num: 0,
        },
        {
            category_id: 19,
            category_name: "Crime",
            total_num: 0,
        },
        {
            category_id: 20,
            category_name: "Young People",
            total_num: 0,
        },
    ];

    const iconsMap = {
        "Disability": TbDisabled,
        "People & Families": MdFamilyRestroom,
        "Equality & Diversity": MdOutlineDiversity1,
        "Health": GiHealthNormal,
        "Arts": PiPaintBrushBold,
        "Rural": LuTrees,
        "Religion": FaHandsPraying,
        "Social Enterprise": FaUserFriends,
        "Leisure & Tourism": FaHotel,
        "Employment": GrUserWorker,
        "Crime": GiConvict,
        "Young People": FaRunning,
        "Community": RiCommunityLine,
        "Environment": FaEnvira,
        "Research": GiArchiveResearch,
        "Technology": GiTechnoHeart,
        "Education": MdOutlineCastForEducation,
        "Business": MdOutlineBusinessCenter,
        "Regeneration": GiRegeneration,
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
                                    href={`/grant-finder/search?category_id=${item.category_id}&page=1&limit=10`}
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
                                                <h4>{item.category_name}</h4>
                                                <p className="font-xs">
                                                    {item.total_num}
                                                    <span>
                                                        {" "}
                                                        Grants Available
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

export default CategorySlider1;
