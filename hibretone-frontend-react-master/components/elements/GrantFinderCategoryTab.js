import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosFetchWithRetry from "./fetchWithRetry";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiCommunityLine } from "react-icons/ri";
import { FaEnvira } from "react-icons/fa";
import { GiArchiveResearch, GiTechnoHeart } from "react-icons/gi";

const GrantFinderCategoryTab = () => {
    const [active, setActive] = useState(1);
    const [data, setData] = useState([]);
    const [grantDetails, setGrantDetails] = useState([]);

    useEffect(() => {
        const fetchGrantDetails = async () => {
            const grantDetailsPromises = [];
            for (let i = 1; i <= 4; i++) {
                grantDetailsPromises.push(
                    axiosFetchWithRetry({
                        url: "/grants/grant-details/" + i + "/items",
                        reqOptions: {
                            method: "get",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        },
                        timeout: 2000,
                    }).catch((error) => console.error({ error: error.message }))
                );
            }
            Promise.all(grantDetailsPromises).then((grantDetails) => {
                // This ensures you're updating the state based on the results of all promises.
                setGrantDetails(
                    grantDetails.filter((detail) => detail !== undefined)
                );
            });
        };

        fetchGrantDetails();
    }, []);

    const handleOnClick = (index) => {
        setActive(index);
    };

    return (
        <>
            <div className="box-swiper mt-50">
                <div className="swiper-container">
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
                        <SwiperSlide>
                            <div
                                className="swiper-slide hover-up"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleOnClick("1")}
                            >
                                <a>
                                    <div className="item-logo">
                                        <div className="image-left">
                                            <RiCommunityLine
                                                size={50}
                                                style={{ color: "#4294FF" }}
                                            />
                                        </div>
                                        <div className="text-info-right">
                                            <h4>Community</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="swiper-slide hover-up"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleOnClick("2")}
                            >
                                <a>
                                    <div className="item-logo">
                                        <div className="image-left">
                                            <FaEnvira
                                                size={50}
                                                style={{ color: "#4294FF" }}
                                            />
                                        </div>
                                        <div className="text-info-right">
                                            <h4>Environment</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="swiper-slide hover-up"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleOnClick("3")}
                            >
                                <a>
                                    <div className="item-logo">
                                        <div className="image-left">
                                            <GiArchiveResearch
                                                size={50}
                                                style={{ color: "#4294FF" }}
                                            />
                                        </div>
                                        <div className="text-info-right">
                                            <h4>Research</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="swiper-slide hover-up"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleOnClick("4")}
                            >
                                <a>
                                    <div className="item-logo">
                                        <div className="image-left">
                                            <GiTechnoHeart
                                                size={50}
                                                style={{ color: "#4294FF" }}
                                            />
                                        </div>
                                        <div className="text-info-right">
                                            <h4>Technology</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="tab-content mt-10" id="myTabContent-1">
                    {grantDetails.map((item, i) => (
                        <div
                            className={`tab-pane fade ${
                                active == i + 1 && "show active"
                            }`}
                        >
                            <div className="row ">
                                {item.map((grant, j) => (
                                    <Link
                                        legacyBehavior
                                        href={`/grant-finder/grant/${grant.grant_id}`}
                                    >
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 card-height clickable">
                                            <div className="card-grid-2 grid-bd-16 hover-up card-overflow">
                                                <div className="card-block-info">
                                                    <h5>
                                                        {/* <Link
                                                        legacyBehavior
                                                        href={`/grant-finder/grant/${grant.grant_id}`}
                                                    > */}
                                                        <a>{grant.title}</a>
                                                        {/* </Link> */}
                                                    </h5>
                                                    <div className="mt-5">
                                                        <span className="card-location mr-15">
                                                            {grant.location}
                                                        </span>
                                                        <span className="card-time">
                                                            closing date:{" "}
                                                            {grant.closing_date}
                                                        </span>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-md-7 mb-2">
                                                                {grant.category_name.map(
                                                                    (
                                                                        one_category_name
                                                                    ) => (
                                                                        // <Link
                                                                        //     legacyBehavior
                                                                        //     href=""
                                                                        // >
                                                                        <a className="btn btn-tags-sm mr-5">
                                                                            {
                                                                                one_category_name
                                                                            }
                                                                        </a>
                                                                        // </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="col-xl-4 col-md-5 text-lg-end">
                                                                <span className="card-text-price">
                                                                    {
                                                                        grant.total_size_of_grant_scheme
                                                                    }
                                                                </span>
                                                                <span className="text-muted"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="font-sm color-text-paragraph mt-20">
                                                        {grant.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GrantFinderCategoryTab;
