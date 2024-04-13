/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import KickstartButton from "../../components/elements/KickstartButton";
import JobConnectSearchBox from "../../components/elements/JobConnectSearchBox";
import JobConnectHeader from "../../components/elements/JobConnectHeader";
import { Grid } from "@mui/material";

export default function Index() {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);

    return (
        <>
            <Layout>
                <div>
                    <JobConnectHeader />
                    <section className="section-box mt-50">
                        <JobConnectSearchBox />
                    </section>
                    <section className="section-box mt-75">
                        <YellowBanner />
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
                                        <Grid
                                            item
                                            lg={6}
                                            sx={{
                                                paddingRight: { lg: "75px" },
                                            }}
                                        >
                                            <h2 className="section-header">
                                                Entrepreneurship leading to a
                                                new career
                                            </h2>
                                            <div>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                                                    {" "}
                                                    What you learn on your
                                                    entrepreneurial journey, can
                                                    be the catalyst to start a
                                                    new career empowering others
                                                    to start their own business.
                                                    We can learn from everyone’s
                                                    journey and they can learn
                                                    from ours.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {" "}
                                                    Listen to Anita talk about
                                                    developing a novel product,
                                                    then pivoting careers into
                                                    supporting other
                                                    entrepreneurs.{" "}
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
                                        <Grid item lg={6}>
                                            <iframe
                                                width="663"
                                                height="450"
                                                src="https://www.youtube.com/embed/CIoWgp020B0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                    border: "1px solid #ccc",
                                                    borderRadius: "16px",
                                                }}
                                            ></iframe>
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
                                                Entrepreneurship leading to a
                                                new career
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <iframe
                                                width="663"
                                                height="450"
                                                src="https://www.youtube.com/embed/CIoWgp020B0"
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
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    What you learn on your
                                                    entrepreneurial journey, can
                                                    be the catalyst to start a
                                                    new career empowering others
                                                    to start their own business.
                                                    We can learn from everyone’s
                                                    journey and they can learn
                                                    from ours.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    Listen to Anita talk about
                                                    developing a novel product,
                                                    then pivoting careers into
                                                    supporting other
                                                    entrepreneurs.{" "}
                                                </p>
                                            </div>
                                            <div className="mt-40">
                                                <button
                                                    href="/business-plan-wizard"
                                                    className="btn btn-default fs-6"
                                                >
                                                    Get Started
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
                                                src="assets/imgs/page/job-connect/failing-entrepreneur.jpg"
                                                alt="joxBox"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            lg={6}
                                            sx={{ paddingLeft: { lg: "75px" } }}
                                        >
                                            <h2 className="section-header">
                                                A failing entrepreneur, is only
                                                a not-yet-ready one
                                            </h2>
                                            <div>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                                                    {" "}
                                                    We believe there’s no such
                                                    thing as a failing
                                                    entrepreneur, only a
                                                    not-yet-ready one. By
                                                    creating fail-forward
                                                    opportunities ingo better
                                                    paying careers, even when
                                                    you think you may have lost,
                                                    you have still won.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {showMore1
                                                        ? "1 in 4 entrepreneurs fail at least once before success. It takes entrepreneurs an average of three years for their business to begin supporting them financially."
                                                        : "1 in 4 entrepreneurs fail at least once before success. It takes entrepreneurs an average of three years for their "}
                                                    {showMore1 && (
                                                        <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                            With three years,
                                                            the average time for
                                                            a business to become
                                                            financially
                                                            profitable being,
                                                            it’s not surprising
                                                            nearly 40% of
                                                            entrepreneurs say
                                                            they had considered
                                                            quitting before
                                                            their business took
                                                            off.
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
                                                    )}
                                                    {!showMore1 && (
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
                                                    )}
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
                                            <h2 className="section-header mt-50">
                                                A failing entrepreneur, is only
                                                a not-yet-ready one
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="grid__thumb w-img mt-30 fix grid_thumb_height grid_thumb">
                                                <img
                                                    className="content-media"
                                                    src="assets/imgs/page/job-connect/failing-entrepreneur.jpg"
                                                    alt="joxBox"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                                                    {" "}
                                                    We believe there’s no such
                                                    thing as a failing
                                                    entrepreneur, only a
                                                    not-yet-ready one. By
                                                    creating fail-forward
                                                    opportunities ingo better
                                                    paying careers, even when
                                                    you think you may have lost,
                                                    you have still won.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {" "}
                                                    1 in 4 entrepreneurs fail at
                                                    least once before success.
                                                    It takes entrepreneurs an
                                                    average of three years for
                                                    their business to begin
                                                    supporting them financially.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {" "}
                                                    With three years, the
                                                    average time for a business
                                                    to become financially
                                                    profitable being, it’s not
                                                    surprising nearly 40% of
                                                    entrepreneurs say they had
                                                    considered quitting before
                                                    their business took off.{" "}
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
                                                Career Guidance
                                            </h2>
                                            <div>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                                                    {" "}
                                                    Using the best tools is
                                                    obvious. Find local salary
                                                    and hiring trends so you can
                                                    fail-forward.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {" "}
                                                    Wrapping-up a business can
                                                    take a lot out of anyone.
                                                    Years of work, bundles of
                                                    cash, appear to have gone
                                                    down the drain. So we
                                                    understand choices may
                                                    appear limited and decisions
                                                    may seem difficult to make.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {showMore2
                                                        ? "If you’re unsure what career choice to make, hibretOne can help with a Career Guidance tool. Creating options for you to decide from your skills, abilities and qualifications."
                                                        : "If you’re unsure what career choice to make, hibretOne "}
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
                                                    href="/career-guidance"
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
                                                src="assets/imgs/page/job-connect/career-guidance.jpg"
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
                                            <h2 className="section-header mt-50">
                                                Career Guidance
                                            </h2>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="grid__thumb w-img mt-30 fix grid_thumb_height grid_thumb">
                                                <img
                                                    className="content-media"
                                                    src="assets/imgs/page/job-connect/career-guidance.jpg"
                                                    alt="joxBox"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                                                    {" "}
                                                    Using the best tools is
                                                    obvious. Find local salary
                                                    and hiring trends so you can
                                                    fail-forward.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {" "}
                                                    Wrapping-up a business can
                                                    take a lot out of anyone.
                                                    Years of work, bundles of
                                                    cash, appear to have gone
                                                    down the drain. So we
                                                    understand choices may
                                                    appear limited and decisions
                                                    may seem difficult to make.{" "}
                                                </p>
                                                <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                                    {" "}
                                                    If you’re unsure what career
                                                    choice to make, hibretOne
                                                    can help with a Career
                                                    Guidance tool. Creating
                                                    options for you to decide
                                                    from your skills, abilities
                                                    and qualifications.{" "}
                                                </p>
                                            </div>
                                            <div className="mt-40">
                                                <button
                                                    href="/career-guidance"
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
                    </div>
                    <section className="section-box mt-75">
                        <KickstartButton />
                    </section>
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}
