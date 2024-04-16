/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import KickstartButton from "../../components/elements/KickstartButton";
import DiscoverButton from "../../components/elements/DiscoverButton";
import { Grid } from "@mui/material";

function useLockBodyScroll(open) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
}

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);

  return (
    <>
      <Layout>
        <div className="background-random-industry-intelligence">
          <DiscoverButton />
          <section className="section-box mt-25 mb-25">
            <YellowBanner />
          </section>

          <section className="section-box mt-25">
            <div className="post-loop-grid">
              <div className="container">
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                >
                  <Grid item lg={6} sx={{ paddingRight: { lg: "75px" } }}>
                    <h2
                      className="section-header"
                      style={{ fontSize: "36px !important" }}
                    >
                      Intelligence to Plan or Change Career
                    </h2>
                    <div className="title-details">
                      <p className="p-color">
                        {" "}
                        Our tool enables you to quickly gather the intelligence
                        and information you need to make informed decisions.
                        Validating each of your ideas, to decide which to take
                        forward.{" "}
                      </p>
                      <p className="p-color mt-10">
                        {" "}
                        Research which would normally take weeks, or even months
                        to gather, hibretOne can discover it for you in minutes.
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                      </p>
                    </div>
                    <div className="mt-20">
                      <button href="" className="btn btn-default fs-6">
                        Create Guide
                      </button>
                    </div>
                  </Grid>
                  <Grid item lg={6} className="d-flex justify-content-center">
                    <img
                      className="content-media"
                      src="assets/imgs/page/industry-intelligence/intelligence.jpg"
                      alt="joxBox"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                >
                  <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "24px !important" }}>Intelligence to Plan or Change Career</h3>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/intelligence.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                      <p className="p-color">
                        Our tool enables you to quickly gather the intelligence
                        and information you need to make informed decisions.
                        Validating each of your ideas, to decide which to take
                        forward.{" "}
                      </p>
                      <p className="p-color mt-10">
                        Research which would normally take weeks, or even months
                        to gather, hibretOne can discover it for you in minutes.
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                      </p>
                    </div>
                    <div className="mt-20 mb-30">
                      <button href="" className="btn btn-default fs-6">
                        Create Guide
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
                  sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                >
                  <Grid item lg={6}>
                    <img
                      className="content-media"
                      src="assets/imgs/page/industry-intelligence/market-sector-guide.jpg"
                      alt="joxBox"
                    />
                  </Grid>
                  <Grid
                    item
                    className="mt-30"
                    lg={6}
                    sx={{ paddingLeft: { lg: "75px" } }}
                  >
                    <h3 style={{ fontSize: "36px !important" }}>Market Sector Guide</h3>
                    <div className="title-details">
                      <p className="p-color">
                        Intelligence to support your idea, your market, or to
                        build your business plan. Helping you determine whether
                        your idea is worth exploring, without investing too much
                        time or money.
                      </p>
                      <p className="p-color mt-10">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </p>
                      <p className="p-color mt-10">
                        Comprehensive analysis and statistics at your
                        finger-tips.{" "}
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                >
                  <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "24px !important" }}>Market Sector Guide</h3>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/market-sector-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                      <p>
                        Intelligence to support your idea, your market, or to
                        build your business plan. Helping you determine whether
                        your idea is worth exploring, without investing too much
                        time or money.
                      </p>
                      <p className="p-color mt-10">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                      </p>
                      <p className="p-color mt-10">
                        Comprehensive analysis and statistics at your
                        finger-tips.{" "}
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
                  sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                >
                  <Grid
                    className="mt-40"
                    item
                    lg={6}
                    sx={{ paddingRight: { lg: "75px" } }}
                  >
                    <h3 style={{ fontSize: "36px !important" }}>New Occupation Guide</h3>
                    <div className="title-details">
                      <p className="p-color mt-10">
                        For not-yet-ready entrepreneurs seeking fail-forward
                        pathways into better-paying careers. hibretOne quickly
                        and at low-cost, provides intelligence on the chosen
                        career, qualifications, and skills needed to be
                        successful in the new career.{" "}
                      </p>
                      <p className="p-color mt-10">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                      </p>
                    </div>
                  </Grid>
                  <Grid item lg={6} className="d-flex justify-content-center">
                    <img
                      className="content-media"
                      src="assets/imgs/page/industry-intelligence/occupation-guide.jpg"
                      alt="joxBox"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                >
                  <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "24px !important" }}>New Occupation Guide</h3>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/occupation-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                      <p className="p-color mt-10">
                        For not-yet-ready entrepreneurs seeking fail-forward
                        pathways into better-paying careers. hibretOne quickly
                        and at low-cost, provides intelligence on the chosen
                        career, qualifications, and skills needed to be
                        successful in the new career.{" "}
                      </p>
                      <p className="p-color mt-10">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
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
                  sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                >
                  <Grid item lg={6}>
                    <img
                      className="content-media"
                      src="assets/imgs/page/industry-intelligence/business-idea.jpg"
                      alt="joxBox"
                    />
                  </Grid>
                  <Grid item lg={6} sx={{ paddingLeft: { lg: "75px" } }}>
                    <h3 className="mt-5" style={{ fontSize: "36px !important" }}>
                      Discover Business Idea
                    </h3>
                    <div className="title-details">
                      <p className="p-color mt-10">
                        If you are in need of inspiration to start a new
                        business, we've got you covered. You can discover the
                        most popular businesses in the country of your choice.
                        If one of them seems appealing, then generate a market
                        sector guide, or an occupation guide. It may be the push
                        you need to start a new business, or change for a new
                        career.
                      </p>
                      <p className="p-color mt-10">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                >
                  <Grid item xs={12} md={12}>
                    <h3 style={{fontSize:'24px !important'}}>Discover Business Idea</h3>
                  </Grid>
                  <Grid className="mt-10" item xs={12} md={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/business-idea.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div style={{ textAlign: "justify" }}>
                      <p className="p-color">
                        If you are in need of inspiration to start a new
                        business, we've got you covered. You can discover the
                        most popular businesses in the country of your choice.
                        If one of them seems appealing, then generate a market
                        sector guide, or an occupation guide. It may be the push
                        you need to start a new business, or change for a new
                        career.
                      </p>
                      <p className="p-color">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.{" "}
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
          <section className="section-box mt-0 mb-75">
            <div className="post-loop-grid">
              <div className="container"></div>
            </div>
          </section>
          <KickstartButton />
          <Subscription />
        </div>
      </Layout>
    </>
  );
}
