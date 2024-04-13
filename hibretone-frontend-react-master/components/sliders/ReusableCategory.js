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
    MdHealthAndSafety,
    MdOutlineProductionQuantityLimits,
    MdOutlinePublic,
    MdOutlineVolunteerActivism,
    MdAutoGraph,
    MdSpeed,
    MdSell,
    MdSocialDistance,
    MdEvent
} from "react-icons/md";
import {
    GiHealthNormal,
    GiConvict,
    GiArchiveResearch,
    GiTechnoHeart,
    GiRegeneration,
} from "react-icons/gi";
import {
    PiPaintBrushBold,
    PiBooks,
    PiStrategyBold,
    PiStrategy
} from "react-icons/pi";
import { LuTrees } from "react-icons/lu";
import {
    FaHandsPraying,
    FaUserFriends,
    FaHotel,
    FaEnvira,
    FaChalkboardTeacher,
    FaMicroscope,
    FaUser,
    FaLeaf,
    FaLanguage,
    FaBusinessTime,
    FaPersonBooth
} from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { CiMoneyCheck1 } from "react-icons/ci";
import {
    GoLaw
} from 'react-icons/go'
import {
    FaEarthEurope,
    FaPerson
} from "react-icons/fa6"
import {
    IoBusiness
} from "react-icons/io5"
SwiperCore.use([Navigation]);
import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider = ({categories}) => {

    const iconStyle = {
        scale: "3",
        color: "#4294FF"
    }

    const iconsMap = {
        "Disability": <TbDisabled style={iconStyle} />,
        "People & Families": <MdFamilyRestroom style={iconStyle} />,
        "Equality & Diversity": <MdOutlineDiversity1 style={iconStyle} />,
        "Health": <GiHealthNormal style={iconStyle} />,
        "Arts": <PiPaintBrushBold style={iconStyle} />,
        "Rural": <LuTrees style={iconStyle} />,
        "Social Enterprise": <FaUserFriends style={iconStyle} />,
        "Leisure & Tourism": <FaHotel style={iconStyle} />,
        "Employment": <GrUserWorker style={iconStyle} />,
        "Crime": <GiConvict style={iconStyle} />,
        "Young People": <FaRunning style={iconStyle} />,
        "Community": <RiCommunityLine style={iconStyle} />,
        "Environment": <FaEnvira style={iconStyle} />,
        "Research": <GiArchiveResearch style={iconStyle} />,
        "Technology": <GiTechnoHeart style={iconStyle} />,
        "Education": <MdOutlineCastForEducation style={iconStyle} />,
        "Business": <MdOutlineBusinessCenter style={iconStyle} /> ,
        "Regeneration": <GiRegeneration style={iconStyle} />,
        "Funding & Finance": <CiMoneyCheck1 style={iconStyle} />,
        "Business Advice": <MdOutlineBusinessCenter style={iconStyle} />,
        "Mentoring": <FaChalkboardTeacher style={iconStyle} />,
        "Accelerator & Incubators": <MdSpeed style={iconStyle} />,
        "Business Space":  <MdOutlineBusinessCenter style={iconStyle} />,
        "Marketing & PR": <MdSell style={iconStyle} />,
        "Education": <PiBooks style={iconStyle} />,
        "Environmental, Social and Governance (ESG)": <MdSocialDistance style={iconStyle} />,
        "Business Development": <FaBusinessTime style={iconStyle} />,
        "Sustainability": <FaLeaf style={iconStyle} />,
        "Climate & Environment": <FaEarthEurope style={iconStyle} />,
        "Technical":  <GiTechnoHeart style={iconStyle} />,
        "Internships & Work Placements": <GrUserWorker style={iconStyle} /> ,
        "Strategy": <PiStrategyBold style={iconStyle} />,
        "Hiring & Personnel": <FaPersonBooth style={iconStyle} />,
        "Personal Development": <MdAutoGraph style={iconStyle} />,
        "Product": <MdOutlineProductionQuantityLimits style={iconStyle} />,
        "Customers & Users": <FaUser style={iconStyle} />,
        "Research & Development": <FaMicroscope style={iconStyle} />,
        "Health & Wellbeing": <MdHealthAndSafety style={iconStyle} />,
        "Language": <FaLanguage style={iconStyle} />,
        "Law": <GoLaw style={iconStyle} />,
        "Academia": <PiBooks style={iconStyle} />,
        "Voluntary Sector": <MdOutlineVolunteerActivism style={iconStyle} />,
        "Public Sector": <MdOutlinePublic style={iconStyle} />,
        "Equality, Diversity, Inclusion": <MdOutlineDiversity1 style={iconStyle} /> ,
        "Enterprise Resource Planning": <IoBusiness style={iconStyle} />,
        "Events": <MdEvent style={iconStyle} />,

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
                    className="swiper-wrapper pb-5 pt-5 swiper-grid-jobobx"
                >
                    {categories.map((item, i) => {
                        return (
                        <SwiperSlide key={i}>
                            <div className="category-slide hover-up pr-10 pl-10" onClick={() => handleClick(item.category_id)} style={{ cursor: 'pointer' }}>
                                <a>
                                    <div className="item">
                                        <div className="image-left">
                                            {iconsMap[item.category_name]}
                                        </div>
                                        <div className="text-info-right">
                                            <h4>{item.category_name}</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    )})}
                </Swiper>
            </div>
        </>
    );
};

export default CategorySlider;
