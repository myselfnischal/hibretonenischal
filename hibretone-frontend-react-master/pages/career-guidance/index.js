import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import GetFullAccess from "../../components/elements/GetFullAccess";
import Subscription from "../../components/Layout/Subscription";
import { Grid } from "@mui/material";

export default function Index() {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero bg-img-career-guidance">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="mb-20 text-main-heading">
                                            Career Guidance
                                        </h2>
                                        <p className="font-lg color-text-paragraph-2 color-white wow animate__animated animate__fadeInUp">
                                            Fail-forward for{" "}
                                            <span className="color-blue">
                                                not-yet-ready entrepreneurs
                                            </span>
                                            , or failing entrepreneurs wanting a
                                            career change.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10">
                                    Rebuild Your Career
                                </h2>
                                <p className="fw-bold w-lg-50 mx-auto">
                                    Just 3 simple steps
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb5 meetourteamcard">
                                    <div className="swiper-slide hover-up">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src="assets/imgs/page/career-guidance/step1.jpeg"
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <p className="image-text image-text-step1">
                                                Step 1
                                            </p>
                                            <p className="article-description-career">
                                                "Discover your strengths and
                                                optimum career choices, with our
                                                Personality Assessment"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb5 meetourteamcard">
                                    <div className="swiper-slide hover-up">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src="assets/imgs/page/career-guidance/step2.jpg"
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <p className="image-text image-text-step2">
                                                Step 2
                                            </p>
                                            <p className="article-description-career">
                                                "Find your perfect career.
                                                Explore 600+ career paths with
                                                related vocational and
                                                professional courses"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb5 meetourteamcard">
                                    <div className="swiper-slide hover-up">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src="assets/imgs/page/career-guidance/step3.jpg"
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <p className="image-text image-text-step3">
                                                Step 3
                                            </p>
                                            <p className="article-description-career">
                                                "Create a job winning CV with
                                                our CV builder to apply for your
                                                dream job, until you’re ready to
                                                go again!"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50">
                        <div className="container">
                            <button className="btn btn-success btn-career">
                                Rebuild Your Career
                            </button>
                        </div>
                    </section>

                    <div
                        className="background-random"
                        style={{ position: "relative" }}
                    >
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
                                            <iframe
                                                width=""
                                                height="450"
                                                src="https://www.youtube.com/embed/BAFOHSHqXJQ"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderRadius: "16px",
                                                }}
                                            ></iframe>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={6}
                                            sx={{
                                                paddingLeft: { lg: "75px" },
                                            }}
                                        >
                                            <h2 className="section-header">
                                                Guidance into a New Fulfilling
                                                Career
                                            </h2>
                                            <div>
                                                <p className="font-md color-text-paragraph mt-40 justify-content">
                                                    {" "}
                                                    hibretOne aims to provide
                                                    high-quality career guidance
                                                    to all aspirers 24 hours a
                                                    day, 7 days a week through
                                                    our platform content. We
                                                    dont’ promise to have all
                                                    the answers, but we do aim
                                                    to provide as much of a
                                                    soft-landing as our cushions
                                                    allow. James Dyson created
                                                    5126 prototypes of his
                                                    vacuum cleaner before
                                                    success. We learn from our
                                                    success, which is why we
                                                    embrace all our
                                                    not-yet-ready entrepreneurs
                                                    with options.{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {showMore1
                                                        ? "Listen to somone who has found joy after a painful and expensive journey through entrepreneurship. Not everyone will succeed in running their own business, but everyone has the opportunity to succeed in acheiving life-goals."
                                                        : "Listen to somone who has found joy after a painful and expensive journey through entrepreneurship "}
                                                    <button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore1(
                                                                !showMore1
                                                            )
                                                        }
                                                    >
                                                        {showMore1
                                                            ? "show less"
                                                            : "...more"}
                                                    </button>
                                                </p>
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
                                        <Grid item xs={12} md={12}>
                                            <h2 className="section-header">
                                                Guidance into a New Fulfilling
                                                Career
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <iframe
                                                width=""
                                                height="450"
                                                src="https://www.youtube.com/embed/BAFOHSHqXJQ"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderRadius: "16px",
                                                }}
                                            ></iframe>
                                        </Grid>

                                        <Grid item xs={12} md={12}>
                                            <div>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    hibretOne aims to provide
                                                    high-quality career guidance
                                                    to all aspirers 24 hours a
                                                    day, 7 days a week through
                                                    our platform content. We
                                                    dont’ promise to have all
                                                    the answers, but we do aim
                                                    to provide as much of a
                                                    soft-landing as our cushions
                                                    allow. James Dyson created
                                                    5126 prototypes of his
                                                    vacuum cleaner before
                                                    success. We learn from our
                                                    success, which is why we
                                                    embrace all our
                                                    not-yet-ready entrepreneurs
                                                    with options.{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    Listen to somone who has
                                                    found joy after a painful
                                                    and expensive journey
                                                    through entrepreneurship.
                                                    Not everyone will succeed in
                                                    running their own business,
                                                    but everyone has the
                                                    opportunity to succeed in
                                                    acheiving life-goals.{" "}
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>

                        <section className="section-box mt-75">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10">
                                        Salary & Job Vacancy Data
                                    </h2>
                                    <p className="fw-bold w-lg-50 mx-auto">
                                        Information to help you decide your
                                        career and location
                                    </p>
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
                                            <iframe
                                                width=""
                                                height="450"
                                                src="https://www.youtube.com/embed/BAFOHSHqXJQ"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderRadius: "16px",
                                                }}
                                            ></iframe>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={6}
                                            sx={{
                                                paddingLeft: { lg: "75px" },
                                            }}
                                        >
                                            <h2 className="section-header">
                                                Guidance into a New Fulfilling
                                                Career
                                            </h2>
                                            <div>
                                                <p className="font-md color-text-paragraph mt-40 justify-content">
                                                    {" "}
                                                    hibretOne aims to provide
                                                    high-quality career guidance
                                                    to all aspirers 24 hours a
                                                    day, 7 days a week through
                                                    our platform content. We
                                                    dont’ promise to have all
                                                    the answers, but we do aim
                                                    to provide as much of a
                                                    soft-landing as our cushions
                                                    allow. James Dyson created
                                                    5126 prototypes of his
                                                    vacuum cleaner before
                                                    success. We learn from our
                                                    success, which is why we
                                                    embrace all our
                                                    not-yet-ready entrepreneurs
                                                    with options.{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {showMore1
                                                        ? "Listen to somone who has found joy after a painful and expensive journey through entrepreneurship. Not everyone will succeed in running their own business, but everyone has the opportunity to succeed in acheiving life-goals."
                                                        : "Listen to somone who has found joy after a painful and expensive journey through entrepreneurship "}
                                                    <button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore1(
                                                                !showMore1
                                                            )
                                                        }
                                                    >
                                                        {showMore1
                                                            ? "show less"
                                                            : "...more"}
                                                    </button>
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>

                        <section className="section-box mt-100">
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
                                                paddingRight: { lg: "75px" },
                                            }}
                                        >
                                            <h2 className="section-header">
                                                New Occupation Guide
                                            </h2>
                                            <div>
                                                <p className="font-md color-text-paragraph mt-40 justify-content">
                                                    {" "}
                                                    Our Career Guidance is
                                                    designed to make restarting
                                                    your career as an employee
                                                    is simple as possible.
                                                    Providing the opportunity to
                                                    review any career, to
                                                    understand qualifications
                                                    needed and where in the UK
                                                    pays the best. New
                                                    Occupation Guides make
                                                    changing career after
                                                    entrepreneurship, as if it
                                                    was a first choice.{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {showMore2
                                                        ? "Combined with the other resources on our platform, assessing skills, free training courses, connecting you to job opportunities, we prepare you for a better-paying career. Whenever you’re ready you can come back and try entrepreneurship again, using the valuable new skills to improve likelihood of success."
                                                        : "Combined with the other resources on our platform, assessing skills, free training courses, connecting you to "}
                                                    <button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore2(
                                                                !showMore2
                                                            )
                                                        }
                                                    >
                                                        {showMore2
                                                            ? "show less"
                                                            : "...more"}
                                                    </button>
                                                </p>
                                            </div>
                                            <div className="mt-40">
                                                <button
                                                    href="/business-plan-wizard"
                                                    className="btn btn-default fs-6"
                                                >
                                                    Find Career Guidance
                                                </button>
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={6}
                                            className="d-flex justify-content-center"
                                        >
                                            <img
                                                className="content-media"
                                                src="assets/imgs/page/career-guidance/new-occupation-guide.jpeg"
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
                                        <Grid item xs={12} md={12}>
                                            <h2 className="section-header">
                                                New Occupation Guide
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="grid__thumb w-img mt-30 fix grid_thumb_height grid_thumb">
                                                <img
                                                    className="content-media"
                                                    src="assets/imgs/page/career-guidance/new-occupation-guide.jpeg"
                                                    alt="joxBox"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div>
                                                <p className="font-md color-text-paragraph mt-40 justify-content">
                                                    {" "}
                                                    Our Career Guidance is
                                                    designed to make restarting
                                                    your career as an employee
                                                    is simple as possible.
                                                    Providing the opportunity to
                                                    review any career, to
                                                    understand qualifications
                                                    needed and where in the UK
                                                    pays the best. New
                                                    Occupation Guides make
                                                    changing career after
                                                    entrepreneurship, as if it
                                                    was a first choice.{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {" "}
                                                    Combined with the other
                                                    resources on our platform,
                                                    assessing skills, free
                                                    training courses, connecting
                                                    you to job opportunities, we
                                                    prepare you for a
                                                    better-paying career.
                                                    Whenever you’re ready you
                                                    can come back and try
                                                    entrepreneurship again,
                                                    using the valuable new
                                                    skills to improve likelihood
                                                    of success.{" "}
                                                </p>
                                            </div>
                                            <div className="mt-40">
                                                <button
                                                    href="/business-plan-wizard"
                                                    className="btn btn-default fs-6"
                                                >
                                                    Find Career Guidance
                                                </button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>

                        <section className="section-box mt-100">
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
                                                src="assets/imgs/page/career-guidance/upskilling.jpeg"
                                                alt="joxBox"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            lg={6}
                                            sx={{ paddingLeft: { lg: "75px" } }}
                                        >
                                            <h2 className="section-header">
                                                Upskilling
                                            </h2>
                                            <div className="mt-40">
                                                <p className="font-md color-text-paragraph justify-content">
                                                    {" "}
                                                    Take one of the personality
                                                    assessments to understand
                                                    where our data feels you
                                                    could have a great career
                                                    pivot. In minutes you can
                                                    review all the details you
                                                    need for that career switch,
                                                    then book onto one of over
                                                    6000 free online courses.
                                                    Paying a small fee to our
                                                    education partner will even
                                                    get you a fancy certificate!{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {showMore3
                                                        ? "A better-paying career will enable you to save even more, so you’ve got even more money to use to build try entrepreneurship again. "
                                                        : "A better-paying career will enable you to save even more, so you’ve got even more money to use to build try "}
                                                    {showMore3 && (
                                                        <p className="color-text-paragraph mt-30 justify-content">
                                                            The pathway from
                                                            failure to a
                                                            better-paying career
                                                            could not be any
                                                            more easy.
                                                        </p>
                                                    )}
                                                    <button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore3(
                                                                !showMore3
                                                            )
                                                        }
                                                    >
                                                        {showMore3
                                                            ? "show less"
                                                            : "...more"}
                                                    </button>
                                                </p>
                                            </div>
                                            <div className="mt-40">
                                                <button
                                                    href="/business-plan-wizard"
                                                    className="btn btn-default fs-6"
                                                >
                                                    Read More
                                                </button>
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
                                        <Grid item xs={12} md={12}>
                                            <h2 className="section-header">
                                                Upskilling
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="grid__thumb w-img mt-30 fix grid_thumb_height grid_thumb">
                                                <img
                                                    className="content-media"
                                                    src="assets/imgs/page/career-guidance/upskilling.jpeg"
                                                    alt="joxBox"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="mt-40">
                                                <p className="font-md color-text-paragraph justify-content">
                                                    {" "}
                                                    Take one of the personality
                                                    assessments to understand
                                                    where our data feels you
                                                    could have a great career
                                                    pivot. In minutes you can
                                                    review all the details you
                                                    need for that career switch,
                                                    then book onto one of over
                                                    6000 free online courses.
                                                    Paying a small fee to our
                                                    education partner will even
                                                    get you a fancy certificate!{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {" "}
                                                    A better-paying career will
                                                    enable you to save even
                                                    more, so you’ve got even
                                                    more money to use to build
                                                    your new business, when you
                                                    try entrepreneurship again.{" "}
                                                </p>
                                                <p className="font-md color-text-paragraph mt-30 justify-content">
                                                    {" "}
                                                    The pathway from failure to
                                                    a better-paying career could
                                                    not be any more easy.{" "}
                                                </p>
                                            </div>
                                            <div className="mt-40">
                                                <button
                                                    href="/business-plan-wizard"
                                                    className="btn btn-default fs-6"
                                                >
                                                    Read More
                                                </button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="section-box mt-75">
                        <GetFullAccess />
                    </section>
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}
