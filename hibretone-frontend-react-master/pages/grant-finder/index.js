/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import GrantFinderCategoryTab from "../../components/elements/GrantFinderCategoryTab";
import CategorySlider from "../../components/sliders/Category";
import TestimonialSlider from "../../components/sliders/Testimonial1";
import Location from "../../components/elements/Location";
import YellowBanner from "../../components/elements/YellowBanner";
import KickstartButton from "../../components/elements/KickstartButton";
import TestimonialSliderHomePage from "./../../components/sliders/TestimonialHomepage";
import Subscription from "../../components/Layout/Subscription";
import GrantFinderSearchBox from "./../../components/elements/GrantFinderSearchBox";
import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import { Link as MUILink } from "@mui/material";
const NoSSRGrantFinderCategoryTab = dynamic(
    () => import("../../components/elements/GrantFinderCategoryTab"),
    { ssr: false }
);
const NoSSRCategorySlider = dynamic(
    () => import("../../components/sliders/Category"),
    { ssr: false }
);
const NoSSRCategorySlider1 = dynamic(
    () => import("../../components/sliders/Category1"),
    { ssr: false }
);
const NoSSRTestimonialSliderHomePage = dynamic(
    () => import("../../components/sliders/TestimonialHomepage"),
    { ssr: false }
);
export default function Index2() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className=" banner-hero bg-img-grant-finder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="mb-10">Grant Finder</h2>
                                        <p className="font-lg color-text-paragraph-2">
                                            Search for the latest personal,
                                            public, private, academic and
                                            voluntary sector grant funding
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container">
                            <div className="banner-hero">
                                <div className="block-banner">
                                    <div className="text-center">
                                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                            Grant Funding for Every Type of
                                            Enterprise
                                        </h2>
                                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                            Find the right grant for you and
                                            your business
                                        </p>
                                    </div>
                                    <div className="container mt-70">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                <div className="text-center">
                                                    <h2 className="color-brand-2 color-background-1">
                                                        <span className="count">
                                                            £173b+
                                                        </span>
                                                    </h2>
                                                    <h6>
                                                        Total UK grants value
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                <div className="text-center">
                                                    <h2 className="color-brand-2 color-background-2">
                                                        <span className="count">
                                                            186,200+
                                                        </span>
                                                    </h2>
                                                    <h6>Number of UK grants</h6>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                <div className="text-center">
                                                    <h2 className="color-brand-2 color-background-3">
                                                        <span className="count">
                                                            56,500+
                                                        </span>
                                                    </h2>
                                                    <h6>
                                                        Number of UK funders
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                <div className="text-center">
                                                    <h2 className="color-brand-2 color-background-4">
                                                        <span className="count">
                                                            £7.3m+
                                                        </span>
                                                    </h2>
                                                    <h6>
                                                        Directed to by hibretOne
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <GrantFinderSearchBox />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mb-40">
                        <YellowBanner />
                    </section>
                    <section className="section-box mt-0">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                    Explore a Selection of our Show Me The Money
                                    Grants
                                </h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                    Over 20 new grants uploaded everyday
                                </p>
                            </div>
                            <div className="mt-0">
                                <NoSSRGrantFinderCategoryTab />
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                        New grants uploaded everyday
                                    </h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                        Find the grant that’s perfect for you.
                                        about 800+ new grants everyday
                                    </p>
                                </div>
                                <div className="box-swiper mt-50 grant-category">
                                    <div>
                                        <NoSSRCategorySlider />
                                        <NoSSRCategorySlider1 />
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            md: "none",
                                            lg: "flex",
                                        },
                                    }}
                                >
                                    <Grid item lg={6}>
                                        <iframe
                                            className="content-media"
                                            width="663"
                                            height="504"
                                            src="https://www.youtube.com/embed/WQ1vFJln8gQ?si=bOwb3RxJJK2UJrIc"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen
                                        ></iframe>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <h4>Grants reduce development risk</h4>
                                        <div className="mt-10">
                                            <p className="color-text-paragraph mt-10">
                                                Hear from entrepreneurs who have
                                                successfully used grant funding
                                                to develop their product. Then
                                                applying for additional grant
                                                funding to increase staff and
                                                grow their business.
                                            </p>
                                            <p className="color-text-paragraph mt-10">
                                                Grants can be for innovative
                                                ideas, but grants are also
                                                available for traditional
                                                businesses looking to survive
                                                through troubled times, or to
                                                grow. Our Grant Finder will
                                                point you in the right direction
                                                with a few words. The Grant
                                                Finder will also find similar
                                                grants which you may also be
                                                eligible for.
                                            </p>
                                        </div>
                                        <div className="mt-20">
                                            <Link
                                                href="/grant-finder/grant"
                                                className="btn btn-start fs-6"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "flex",
                                            md: "flex",
                                            lg: "none",
                                        },
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        sx={{ marginBottom: "20px" }}
                                    >
                                        <h4>Grants reduce development risk</h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <iframe
                                            className="content-media"
                                            width="663"
                                            height="504"
                                            src="https://www.youtube.com/embed/WQ1vFJln8gQ?si=bOwb3RxJJK2UJrIc"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen
                                        ></iframe>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="mt-10">
                                            <p className="color-text-paragraph mt-10">
                                                Hear from entrepreneurs who have
                                                successfully used grant funding
                                                to develop their product. Then
                                                applying for additional grant
                                                funding to increase staff and
                                                grow their business.
                                            </p>
                                            <p className="color-text-paragraph mt-10">
                                                Grants can be for innovative
                                                ideas, but grants are also
                                                available for traditional
                                                businesses looking to survive
                                                through troubled times, or to
                                                grow. Our Grant Finder will
                                                point you in the right direction
                                                with a few words. The Grant
                                                Finder will also find similar
                                                grants which you may also be
                                                eligible for.
                                            </p>
                                        </div>
                                        <div className="mt-20">
                                            <Link
                                                href="/grant-finder"
                                                className="btn btn-start fs-6"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-75">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            md: "none",
                                            lg: "flex",
                                        },
                                    }}
                                >
                                    <Grid
                                        item
                                        lg={6}
                                        sx={{
                                            paddingLeft: { lg: "10px" },
                                            paddingRight: { lg: "75px" },
                                        }}
                                    >
                                        <Grid item>
                                            <h4>
                                                Grant Funding Could be Your
                                                Kickstarter
                                            </h4>
                                        </Grid>
                                        <Grid item sx={{ mb: 2 }}>
                                            <p className="color-text-paragraph mt-10">
                                                When an individual, business, or
                                                social enterprise is seeking to
                                                access finance, one of the first
                                                sources they should try is grant
                                                funding. A grant is an award,
                                                usually financial, to facilitate
                                                a goal or incentivise
                                                performance. Grants do not
                                                usually have to be paid back.
                                            </p>
                                            <p className="color-text-paragraph mt-10">
                                                Small-business grants are
                                                targeted to a variety of
                                                purposes, from starting a
                                                company or helping it run more
                                                efficiently to aiding its
                                                expansion. Grants are not simply
                                                free money, however. The funds
                                                must be used in accordance with
                                                the terms of the grant, and if
                                                they are not, they most likely
                                                have to be paid back.
                                            </p>
                                        </Grid>
                                        <Grid item sx={{ mt: 2 }}>
                                            <Link
                                                href="/grant-finder"
                                                className="btn btn-start fs-6"
                                            >
                                                Get Started
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <img
                                            className="content-media"
                                            src="assets/imgs/page/grant-finder/2.png"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "flex",
                                            md: "flex",
                                            lg: "none",
                                        },
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        sx={{ marginBottom: "20px" }}
                                    >
                                        <h4>
                                            Grant Funding Could be Your
                                            Kickstarter
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="content-media"
                                            src="assets/imgs/page/grant-finder/2.png"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="mt-20">
                                            <p className="color-text-paragraph mt-10">
                                                When an individual, business, or
                                                social enterprise is seeking to
                                                access finance, one of the first
                                                sources they should try is grant
                                                funding. A grant is an award,
                                                usually financial, to facilitate
                                                a goal or incentivise
                                                performance. Grants do not
                                                usually have to be paid back.
                                            </p>
                                            <p className="color-text-paragraph mt-10">
                                                Small-business grants are
                                                targeted to a variety of
                                                purposes, from starting a
                                                company or helping it run more
                                                efficiently to aiding its
                                                expansion. Grants are not simply
                                                free money, however. The funds
                                                must be used in accordance with
                                                the terms of the grant, and if
                                                they are not, they most likely
                                                have to be paid back.
                                            </p>
                                        </div>
                                        <div className="mt-20">
                                            <Link
                                                href="/grant-finder"
                                                className="btn btn-start fs-6"
                                            >
                                                Get Started
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-75">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            md: "none",
                                            lg: "flex",
                                        },
                                    }}
                                >
                                    <Grid item lg={6}>
                                        <img
                                            className="content-media"
                                            src="assets/imgs/page/grant-finder/3.png"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <h4>Top Tips for Grant Applications</h4>
                                        <div className="mt-10">
                                            <p className="color-text-paragraph mt-10">
                                                Finding the funding may actually
                                                be the easy part. To help you
                                                secure the funding you need, we
                                                have collated some tips on how
                                                to write a successful
                                                application:
                                            </p>
                                            <ul className="mt-10">
                                                <li className="color-text-paragraph">
                                                    &#8226; Check your
                                                    organisation and project are
                                                    eligible.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Show why there is a
                                                    need for your project or
                                                    service.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Explain clearly what
                                                    you will be doing.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Explain what
                                                    difference you will make to
                                                    your beneficiaries.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Show them why should
                                                    they fund you.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Ask for the right
                                                    amount of money.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Work on a full cost
                                                    recovery basis for
                                                    sustainability.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Give them what
                                                    they’ve asked for.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Make sure your
                                                    organisation stands up to
                                                    scrutiny.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Check the
                                                    application.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-20">
                                            <Link
                                                href="/grant-finder"
                                                className="btn btn-start fs-6"
                                            >
                                                Get Started
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "flex",
                                            md: "flex",
                                            lg: "none",
                                        },
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={12}
                                        sx={{ marginBottom: "20px" }}
                                    >
                                        <h4>
                                            Everyone with a good idea should
                                            have effective tools
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="content-media"
                                            src="assets/imgs/page/grant-finder/3.png"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="mt-10">
                                            <p className="color-text-paragraph mt-10">
                                                Finding the funding may actually
                                                be the easy part. To help you
                                                secure the funding you need, we
                                                have collated some tips on how
                                                to write a successful
                                                application:
                                            </p>
                                            <ul className="mt-10">
                                                <li className="color-text-paragraph">
                                                    &#8226; Check your
                                                    organisation and project are
                                                    eligible.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Show why there is a
                                                    need for your project or
                                                    service.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Explain clearly what
                                                    you will be doing.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Explain what
                                                    difference you will make to
                                                    your beneficiaries.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Show them why should
                                                    they fund you.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Ask for the right
                                                    amount of money.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Work on a full cost
                                                    recovery basis for
                                                    sustainability.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Give them what
                                                    they’ve asked for.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Make sure your
                                                    organisation stands up to
                                                    scrutiny.
                                                </li>
                                                <li className="color-text-paragraph">
                                                    &#8226; Check the
                                                    application.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-20">
                                            <Link
                                                href="/grant-finder"
                                                className="btn btn-start fs-6"
                                            >
                                                Get Started
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70 mb-40">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                    How It Works?
                                </h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                    3 Simple steps to gain access to £millions
                                    in grant funding
                                </p>
                            </div>
                            <div className="mt-70">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="box-step step-1">
                                            <h1 className="number-element">
                                                1
                                            </h1>
                                            <h4 className="mb-20">
                                                Subscribe to create
                                                <br className="d-none d-lg-block" />
                                                your account
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Gain access to a grant finder
                                                <br className="d-none d-lg-block" />
                                                for a host of personal ,
                                                <br className="d-none d-lg-block" />
                                                business and community funders
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step step-2">
                                            <h1 className="number-element">
                                                2
                                            </h1>
                                            <h4 className="mb-20">
                                                Explore grants suggested
                                                <br className="d-none d-lg-block" />
                                                by our Grant Finder
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                As well as grants you find,
                                                <br className="d-none d-lg-block" />
                                                we’ll show you similar grants to
                                                <br className="d-none d-lg-block" />
                                                your search criteria
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step">
                                            <h1 className="number-element">
                                                3
                                            </h1>
                                            <h4 className="mb-20">
                                                Select the most
                                                <br className="d-none d-lg-block" />
                                                suitable funder
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Regularly check grants, as every
                                                <br className="d-none d-lg-block" />
                                                week new ones are added, some
                                                <br className="d-none d-lg-block" />
                                                with short application windows
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-50 text-center">
                                <a className="btn btn-default">Get Started</a>
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
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    <NoSSRTestimonialSliderHomePage />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <button className="btn btn-sign-up-inverted fs-6 hover-up font-force-lg">
                                        Subscribe For Full Access
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}
