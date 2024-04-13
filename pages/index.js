/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";

import CategorySlider2 from "./../components/sliders/Category2";
import TopRekruterSlider from "./../components/sliders/TopRekruter";
import TestimonialSliderHomePage from "./../components/sliders/TestimonialHomepage";
import WhoWeHelp from "../components/elements/WhoWeHelp";
import Subscription from "../components/Layout/Subscription";
import KickstartButton from "../components/elements/KickstartButton";
import YellowBanner from "../components/elements/YellowBanner";
import dynamic from "next/dynamic";
const NoSSRBrandSlider = dynamic(
    () => import("./../components/sliders/Brand"),
    { ssr: false }
);
const NoSSRTestimonialSliderHomePage = dynamic(
    () => import("./../components/sliders/TestimonialHomepage"),
    { ssr: false }
);
// const [showMore1, setShowMore1] = useState(false);
// const [showMore2, setShowMore2] = useState(false);
// const [showMore3, setShowMore3] = useState(false);
// const [showMore4, setShowMore4] = useState(false)

export default function Home() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-2">
                            <div className="banner-inner">
                                <div className="block-banner">
                                    <img
                                        src="assets/imgs/page/homepage1/WHITE hibretOne Logo.png"
                                        alt=""
                                        style={{
                                            height: "100px",
                                            width: "auto",
                                        }}
                                    />
                                    <h1 className="text-30 color-white wow animate__animated animate__fadeInUp">
                                        <span className="color-blue">
                                            {" "}
                                            Empowering aspirers{" "}
                                        </span>
                                        to transform the economy, society and
                                        community through{" "}
                                        <span className="color-blue">
                                            {" "}
                                            entrepreneurship{" "}
                                        </span>{" "}
                                        & education.
                                        <span className="color-blue"> </span>
                                    </h1>
                                </div>
                                <div className="mt-60">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">
                                                        £430BN+
                                                    </span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">
                                                    Potential Boost
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">
                                                        26.7M+
                                                    </span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">
                                                    Prospective Aspirers
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">
                                                        18:1
                                                    </span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">
                                                    Return on Investment
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">
                                                        £1BN
                                                    </span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">
                                                    Annual Target
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="list-brands mt-40 mb-30">
                                <div className="box-swiper">
                                    <h2 className="text-center section-title mb-20 wow animate__animated animate__fadeInUp">
                                        Our Founding Supporters
                                    </h2>

                                    <div className="swiper-button-next swiper-button-margin" />
                                    <div className="swiper-button-prev swiper-button-margin" />
                                    <NoSSRBrandSlider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="background-random">
                        <section className="section-box mt-20">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                        Who we Help
                                    </h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                        Aspirers wanting to create wealth
                                        through enterprise
                                    </p>
                                </div>
                            </div>
                            <WhoWeHelp />
                        </section>
                        <section className="section-box mt-20">
                            <YellowBanner />
                        </section>
                        <section className="section-box mt-50">
                            <div className="section-box wow animate__animated animate__fadeIn">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                            How we Help
                                        </h2>
                                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                            Evidence-led resources & tools to
                                            build enterprise success
                                        </p>
                                    </div>
                                    <div className="box-swiper mt-50">
                                        <CategorySlider2 />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-box pt-50 pb-20 mt-10">
                            <div className="container">
                                <h2 className="section-title text-center mb-40 wow animate__animated animate__fadeInUp">
                                    Delivering Economic, Social and Moral impact
                                </h2>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mb-30 no-padding">
                                        <img
                                            className="img-job-search"
                                            src="assets/imgs/page/homepage1/Business.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="box-checkbox mb-30">
                                            <h6 style={{ color: "#3C65F5" }}>
                                                Economic
                                            </h6>
                                            <p
                                                className="font-md color-text-paragraph-2"
                                                style={{ textAlign: "justify" }}
                                            >
                                                Entrepreneurship is multifaceted
                                                - job creation, innovation,
                                                economic growth, wealth
                                                creation, tax revenue,
                                                diversity. A thriving
                                                entrepreneurial environment is
                                                often seen as a key driver of
                                                economic prosperity and societal
                                                progress.
                                            </p>
                                        </div>
                                        <div className="box-checkbox mb-30">
                                            <h6 style={{ color: "#3AAB67" }}>
                                                Social
                                            </h6>
                                            <p
                                                className="font-md color-text-paragraph-2"
                                                style={{ textAlign: "justify" }}
                                            >
                                                Entrepreneurship goes beyond
                                                economic impact. The potential
                                                to drive positive social change,
                                                address societal challenges, and
                                                contribute to the overall
                                                well-being of communities.
                                                Creating jobs which contribute
                                                to reducing unemployment rates
                                                and improving the economic
                                                well-being of communities.
                                            </p>
                                        </div>
                                        <div className="box-checkbox mb-30">
                                            <h6 style={{ color: "#F58A3C" }}>
                                                Moral
                                            </h6>
                                            <p
                                                className="font-md color-text-paragraph-2"
                                                style={{ textAlign: "justify" }}
                                            >
                                                Entrepreneurship involves
                                                leadership grounded in ethical
                                                principles. Many successful
                                                entrepreneurs engage in
                                                philanthropy and charitable
                                                activities, using their wealth
                                                and influence to address issues
                                                contributing to the society’s
                                                welfare. Valuing diversity and
                                                inclusion in more equitable and
                                                just societies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-box mt-10">
                            <div className="container">
                                <div className="row">
                                    <h2 className="text-center section-title mb-40 wow animate__animated animate__fadeInUp">
                                        Opportunities for entrepreneurs, at all
                                        stages of growth
                                    </h2>
                                    <div className="col-lg-6 col-md-12 mb-15 mb-lg-0">
                                        <div className="box-radius-8 bg-urgent hover-up">
                                            <div
                                                className="image"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/imgs/page/homepage1/opportunities/1.jpg"
                                                        alt="jobBox"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="text-info">
                                                <h3 className="pb-20">
                                                    Making entrepreneurship
                                                    inclusive
                                                </h3>
                                                <p className="font-sm color-text-paragraph-2">
                                                    Removing barriers for the
                                                    underrepresented, the
                                                    overlooked and the missing
                                                    entrepreneurs.‘Up to £250
                                                    billion of new value could
                                                    be added to the UK economy
                                                    if women started
                                                    <button className="btn-show-more">
                                                        ...more
                                                    </button>
                                                </p>
                                                {/* <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">
                                                        Read More
                                                    </a>
                                                </Link>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="box-radius-8 bg-9 hover-up">
                                            <div
                                                className="image"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/imgs/page/homepage1/opportunities/2.jpg"
                                                        alt="jobBox"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="text-info">
                                                <h3 className="pb-20">
                                                    Career pathways into
                                                    better-paid jobs
                                                </h3>
                                                <p className="font-sm color-text-paragraph-2">
                                                    Creating higher-skilled
                                                    employment opportunities for
                                                    low-paid and unsuccessful
                                                    entrepreneurs.‘Average
                                                    self-employed female worker
                                                    would earn just over 76%
                                                    more
                                                    <button className="btn-show-more">
                                                        ...more
                                                    </button>
                                                </p>
                                                {/* <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">
                                                        Read More
                                                    </a>
                                                </Link>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-15 mb-lg-0">
                                        <div className="box-radius-8 bg-16 hover-up">
                                            <div
                                                className="image"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/imgs/page/homepage1/opportunities/3.jpg"
                                                        alt="jobBox"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="text-info">
                                                <h3 className="pb-40">
                                                    Improving startup success
                                                </h3>
                                                <div className="empty-line"></div>
                                                <p className="font-sm color-text-paragraph-2">
                                                    Creating higher-skilled
                                                    employment opportunities for
                                                    low-paid and unsuccessful
                                                    entrepreneurs.‘80% of
                                                    cooperatives are still
                                                    trading after
                                                    <button className="btn-show-more">
                                                        ...more
                                                    </button>
                                                </p>
                                                {/* <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">
                                                        Read More
                                                    </a>
                                                </Link>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="box-radius-8 bg-17 hover-up">
                                            <div
                                                className="image"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <figure>
                                                    <img
                                                        src="assets/imgs/page/homepage1/opportunities/4.jpg"
                                                        alt="jobBox"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="text-info">
                                                <h3 className="pb-20">
                                                    Partnership and revenue
                                                    opportunities
                                                </h3>
                                                <p className="font-sm color-text-paragraph-2">
                                                    Creating startup and scale
                                                    up B2B  social capital
                                                    connections in a safe
                                                    space.‘80% of corporates
                                                    believe that startups can
                                                    have a positive impact on a
                                                    large company’s approach to
                                                    <button className="btn-show-more">
                                                        ...more
                                                    </button>
                                                </p>
                                                {/* <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">
                                                        Read More
                                                    </a>
                                                </Link>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    <section className="section-box mt-50">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                        Testimonials
                                    </h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                        Trusted feedback from the aspirers and
                                        the ecosystem
                                        {/* <br className="d-none d-lg-block" />
                                        and feed back to us! */}
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    <NoSSRTestimonialSliderHomePage />
                                </div>
                                <KickstartButton />
                            </div>
                        </div>
                    </section>
                    </div>
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}
