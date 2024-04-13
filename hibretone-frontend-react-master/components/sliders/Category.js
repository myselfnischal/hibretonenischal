import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { TbDisabled } from "react-icons/tb";
import {
    MdFamilyRestroom,
    MdOutlineDiversity1,
    MdOutlineCastForEducation,
    MdOutlineBusinessCenter,
} from "react-icons/md";
import {
    GiHealthNormal,
    GiConvict,
    GiArchiveResearch,
    GiTechnoHeart,
    GiRegeneration,
} from "react-icons/gi";
// 确保 PiPaintBrushBold 和 LuTrees 图标的正确导入路径，这里使用假设的路径作为示例
import { PiPaintBrushBold } from "react-icons/pi";
import { LuTrees } from "react-icons/lu"; // 请确认这是正确的导入语句
import {
    FaHandsPraying,
    FaUserFriends,
    FaHotel,
    FaEnvira,
} from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";

SwiperCore.use([Navigation]);
import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider = () => {
    const router = useRouter();
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
            category_id: 1,
            category_name: "Community",
            total_num: 24,
        },
        {
            category_id: 2,
            category_name: "Environment",
            total_num: 23,
        },
        {
            category_id: 3,
            category_name: "Research",
            total_num: 39,
        },
        {
            category_id: 4,
            category_name: "Technology",
            total_num: 21,
        },
        {
            category_id: 5,
            category_name: "Education",
            total_num: 19,
        },
        {
            category_id: 6,
            category_name: "Business",
            total_num: 21,
        },
        {
            category_id: 7,
            category_name: "Disability",
            total_num: 0,
        },
        {
            category_id: 8,
            category_name: "Equality & Diversity",
            total_num: 0,
        },
        {
            category_id: 9,
            category_name: "People & Families",
            total_num: 0,
        },
        {
            category_id: 10,
            category_name: "Health",
            total_num: 0,
        },
    ];

    const handleClick = (categoryId, page = 1, limit = 10) => {
        router.push(`/grant-finder/search?category=${categoryId}&page=${page}&limit=${limit}`);
      };

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
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up " onClick={() => handleClick(item.category_id)} style={{ cursor: 'pointer' }}>
                                {/* <Link
                                    legacyBehavior
                                    href={`/grant-finder/search?category_id=${item.category_id}&page=1&limit=10`}
                                > */}
                                <a>
                                    <div className="item-logo">
                                        <div className="image-left">
                                            {React.createElement(
                                                iconsMap[item.category_name],
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
                                                <span> Grants Available</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                {/* </Link> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CategorySlider;
