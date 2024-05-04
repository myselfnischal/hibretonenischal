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
  const [showMore1, setShowMore1] = useState(false);
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
                  sx={{ display: { xs: "none",sm:"none", md: "none", lg: "flex" } }}
                >
                  <Grid item lg={6} sx={{ paddingRight: { lg: "75px" } }}>
                    <h2 style={{ fontSize: "34px !important" }}>
                      Intelligence to Plan or Change Career
                    </h2>
                    <div className="title-details">
                    <p className="p-color">
                      Say goodbye to endless weeks of market research and gain access
                      to instant intelligence within minutes.
                      </p>
                      <p className="p-color mt-10">
                      Our cutting-edge Intelligence tools allow you to gather meaningful
                      insights, accelerating your decision-making process significantly. 
                      Whether you are analysing industry trends in your existing business, 
                      exploring new markets, or assessing potential competitors, condensing 
                      what would normally take weeks or even months into mere minutes.
                      </p>
                      <p className="p-color mt-10">
                      Embrace the power of our tool to validate each of your ideas efficiently
                      and leverage market research to identify the ideas, or the careers with 
                      the greatest potential for success. Seize the opportunity to turn your 
                      vision into reality today.
                      </p>
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
                  sx={{ display: { xs: "none",sm:"none", md: "flex", lg: "none" } }}
                >
                  <Grid item md={12} sx={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "28px !important" }}>Intelligence to Plan or Change Career</h3>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/intelligence.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                      <p className="p-color">
                      Say goodbye to endless weeks of market research and gain access
                      to instant intelligence within minutes.
                      </p>
                      <p className="p-color  mt-20">
                      Our cutting-edge Intelligence tools allow you to gather meaningful
                      insights, accelerating your decision-making process significantly. 
                      Whether you are analysing industry trends in your existing business, 
                      exploring new markets, or assessing potential competitors, condensing 
                      what would normally take weeks or even months into mere minutes.
                      </p>
                      <p className="p-color  mt-20">
                      Embrace the power of our tool to validate each of your ideas efficiently
                      and leverage market research to identify the ideas, or the careers with 
                      the greatest potential for success. Seize the opportunity to turn your 
                      vision into reality today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"flex", md: "none", lg: "none" } }}
                >
                  <Grid item sm={12} sx={{ marginBottom: "10px" }}>
                    <h3 style={{ fontSize: "20px !important" }}>Intelligence to Plan or Change Career</h3>
                  </Grid>
                  <Grid item sm={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/intelligence.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                      <p className="p-color">
                      Say goodbye to endless weeks of market research and gain access
                      to instant intelligence within minutes.
                      </p>
                      <p className="p-color  mt-20">
                      Our cutting-edge Intelligence tools allow you to gather meaningful
                      insights, accelerating your decision-making process significantly. 
                      Whether you are analysing industry trends in your existing business, 
                      exploring new markets, or assessing potential competitors, condensing 
                      what would normally take weeks or even months into mere minutes.
                      </p>
                      <p className="p-color  mt-20">
                      Embrace the power of our tool to validate each of your ideas efficiently
                      and leverage market research to identify the ideas, or the careers with 
                      the greatest potential for success. Seize the opportunity to turn your 
                      vision into reality today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "flex",sm:"none", md: "none", lg: "none" } }}
                >
                  <Grid item xs={12} sx={{ marginBottom: "10px" }}>
                    <h3 style={{ fontSize: "20px !important",marginTop:'-30px' }}>Intelligence to Plan or Change Career</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/intelligence.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                      <p className="p-color">
                      Say goodbye to endless weeks of market research and gain access
                      to instant intelligence within minutes.
                      </p>
                      <p className="p-color  mt-10">
                      Our cutting-edge Intelligence tools allow you to gather meaningful
                      insights, accelerating your decision-making process significantly. 
                      Whether you are analysing industry trends in your existing business, 
                      exploring new markets, or assessing potential competitors, condensing 
                      what would normally take weeks or even months into mere minutes.
                      </p>
                      <p className="p-color  mt-10">
                      Embrace the power of our tool to validate each of your ideas efficiently
                      and leverage market research to identify the ideas, or the careers with 
                      the greatest potential for success. Seize the opportunity to turn your 
                      vision into reality today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
          <section className="section-box mt-100-industry-grid">
            <div className="post-loop-grid">
              <div className="container">
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"none", md: "none", lg: "flex" } }}
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
                    <h3 style={{ fontSize: "34px !important" }}>Explore Your Market Sector</h3>
                    <div className="title-details">
                      <p className="p-color">
                      Let certainty drive you forward. Research your business idea and get
                      results back today on whether it’s worth exploring or discarding. Our 
                      Market Sector Guide tool can provide intelligent insights within minutes. 
                      </p>
                      <p className="p-color mt-10">
                      Imagine having all the information you need at your fingertips: From an insightful
                       overview to in-depth market analysis, industry trends, and key competitors, we've 
                       got you covered. Worried about legal hurdles or navigating legislation? Our tool 
                       provides valuable insights into potential legal issues, ensuring you're prepared 
                       every step of the way.
                      </p>
                      <p className="p-color mt-10">
                      The future of your entrepreneurial success starts now—try our tool and unlock your 
                      business idea potential today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"none", md: "flex", lg: "none" } }}
                >
                  <Grid item md={12} sx={{ marginBottom: "20px",marginTop:'-50px !important' }}>
                    <h3 style={{ fontSize: "28px !important" }}>Explore Your Market Sector</h3>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/market-sector-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color">
                      Let certainty drive you forward. Research your business idea and get
                      results back today on whether it’s worth exploring or discarding. Our 
                      Market Sector Guide tool can provide intelligent insights within minutes. 
                      </p>
                      <p className="p-color  mt-20">
                      Imagine having all the information you need at your fingertips: From an insightful
                       overview to in-depth market analysis, industry trends, and key competitors, we've 
                       got you covered. Worried about legal hurdles or navigating legislation? Our tool 
                       provides valuable insights into potential legal issues, ensuring you're prepared 
                       every step of the way.
                      </p>
                      <p className="p-color  mt-20">
                      The future of your entrepreneurial success starts now—try our tool and unlock your 
                      business idea potential today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"flex", md: "none", lg: "none" } }}
                >
                  <Grid item sm={12} sx={{marginTop:'-120px' }}>
                    <h3 style={{ fontSize: "20px !important" }}>Explore Your Market Sector</h3>
                  </Grid>
                  <Grid item sm={12} sx={{marginTop:'-30px'}}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/market-sector-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color">
                      Let certainty drive you forward. Research your business idea and get
                      results back today on whether it’s worth exploring or discarding. Our 
                      Market Sector Guide tool can provide intelligent insights within minutes. 
                      </p>
                      <p className="p-color  mt-20">
                      Imagine having all the information you need at your fingertips: From an insightful
                       overview to in-depth market analysis, industry trends, and key competitors, we've 
                       got you covered. Worried about legal hurdles or navigating legislation? Our tool 
                       provides valuable insights into potential legal issues, ensuring you're prepared 
                       every step of the way.
                      </p>
                      <p className="p-color  mt-20">
                      The future of your entrepreneurial success starts now—try our tool and unlock your 
                      business idea potential today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%",marginTop:'-90px' }}
                  sx={{ display: { xs: "flex",sm:"none", md: "none", lg: "none" } }}
                >
                  <Grid item xs={12} sx={{ marginBottom: "10px" }}>
                    <h3 style={{ fontSize: "20px !important" }}>Explore Your Market Sector</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/market-sector-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color">
                      Let certainty drive you forward. Research your business idea and get
                      results back today on whether it’s worth exploring or discarding. Our 
                      Market Sector Guide tool can provide intelligent insights within minutes. 
                      </p>
                      <p className="p-color  mt-10">
                      Imagine having all the information you need at your fingertips: From an insightful
                       overview to in-depth market analysis, industry trends, and key competitors, we've 
                       got you covered. Worried about legal hurdles or navigating legislation? Our tool 
                       provides valuable insights into potential legal issues, ensuring you're prepared 
                       every step of the way.
                      </p>
                      <p className="p-color  mt-10">
                      The future of your entrepreneurial success starts now—try our tool and unlock your 
                      business idea potential today.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
          <section className="section-box mt-100-industry-grid">
            <div className="post-loop-grid">
              <div className="container">
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"none", md: "none", lg: "flex" } }}
                >
                  <Grid
                    className="mt-40"
                    item
                    lg={6}
                    sx={{ paddingRight: { lg: "75px" } }}
                  >
                    <h3 style={{ fontSize: "34px !important" }}>Discover that New Occupation</h3>
                    <div className="title-details">
                      <p className="p-color mt-10">
                      For not-yet-ready entrepreneurs seeking fail-forward pathways into better-paying careers.
                      hibretOne quickly and at low-cost, provides intelligence on the chosen career, qualifications, 
                      and skills needed to be successful in the new career.
                      </p>
                      <p className="p-color  mt-10">
                      Feeling weighed down by failing business and financial burdens, know that you're not alone. 
                      Introducing our New Occupation Guide—a lifeline for failing entrepreneurs, presenting pathways 
                      to jobs and brighter futures, that to anyone else would appear as your first choice, before
                      entrepreneurship.
                      </p>
                      <p className="p-color  mt-10">
                      {showMore1
                      ?"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen careers, ranging from understanding business responsibilities, key market issues and trends to identifying the qualifications and skills needed for success."
                      :"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen"}
                      
                      {showMore1 && (
                      <p className="p-color  mt-10">
                      Try our tool to embrace the opportunity to pursue alternative career trajectories with confidence 
                      and clarity.
                      <button
                                            className="btn-show-more"
                                            onClick={() =>
                                                setShowMore1(!showMore1)
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
                            onClick={() => setShowMore1(!showMore1)}
                        >
                            {showMore1 ? "show less" : "...more"}
                        </button>
                    )}
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
                  sx={{ display: { xs: "none",sm:"none", md: "flex", lg: "none" } }}
                >
                  <Grid item md={12} sx={{ marginBottom: "20px",marginTop:'-50px !important' }}>
                    <h3 style={{ fontSize: "28px !important" }}>Discover that New Occupation</h3>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/occupation-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color mt-10">
                      For not-yet-ready entrepreneurs seeking fail-forward pathways into better-paying careers.
                      hibretOne quickly and at low-cost, provides intelligence on the chosen career, qualifications, 
                      and skills needed to be successful in the new career.
                      </p>
                      <p className="p-color  mt-20">
                      Feeling weighed down by failing business and financial burdens, know that you're not alone. 
                      Introducing our New Occupation Guide—a lifeline for failing entrepreneurs, presenting pathways 
                      to jobs and brighter futures, that to anyone else would appear as your first choice, before
                      entrepreneurship.
                      </p>
                      <p className="p-color  mt-10">
                      {showMore1
                      ?"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen careers, ranging from understanding business responsibilities, key market issues and trends to identifying the qualifications and skills needed for success."
                      :"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen"}
                      
                      {showMore1 && (
                      <p className="p-color  mt-10">
                      Try our tool to embrace the opportunity to pursue alternative career trajectories with confidence 
                      and clarity.
                      <button
                                            className="btn-show-more"
                                            onClick={() =>
                                                setShowMore1(!showMore1)
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
                            onClick={() => setShowMore1(!showMore1)}
                        >
                            {showMore1 ? "show less" : "...more"}
                        </button>
                    )}
                    </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"flex", md: "none", lg: "none" } }}
                >
                  <Grid item sm={12} sx={{ marginTop: "-120px" }}>
                    <h3 style={{ fontSize: "20px !important" }}>Discover that New Occupation</h3>
                  </Grid>
                  <Grid item sm={12} sx={{marginTop:'-30px'}}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/occupation-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color mt-10">
                      For not-yet-ready entrepreneurs seeking fail-forward pathways into better-paying careers.
                      hibretOne quickly and at low-cost, provides intelligence on the chosen career, qualifications, 
                      and skills needed to be successful in the new career.
                      </p>
                      <p className="p-color  mt-20">
                      Feeling weighed down by failing business and financial burdens, know that you're not alone. 
                      Introducing our New Occupation Guide—a lifeline for failing entrepreneurs, presenting pathways 
                      to jobs and brighter futures, that to anyone else would appear as your first choice, before
                      entrepreneurship.
                      </p>
                      <p className="p-color  mt-10">
                      {showMore1
                      ?"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen careers, ranging from understanding business responsibilities, key market issues and trends to identifying the qualifications and skills needed for success."
                      :"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen"}
                      
                      {showMore1 && (
                      <p className="p-color  mt-10">
                      Try our tool to embrace the opportunity to pursue alternative career trajectories with confidence 
                      and clarity.
                      <button
                                            className="btn-show-more"
                                            onClick={() =>
                                                setShowMore1(!showMore1)
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
                            onClick={() => setShowMore1(!showMore1)}
                        >
                            {showMore1 ? "show less" : "...more"}
                        </button>
                    )}
                    </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%",marginTop:'-90px' }}
                  sx={{ display: { xs: "flex",sm:"none", md: "none", lg: "none" } }}
                >
                  <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "20px !important" }}>Discover that New Occupation</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/occupation-guide.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color mt-10">
                      For not-yet-ready entrepreneurs seeking fail-forward pathways into better-paying careers.
                      hibretOne quickly and at low-cost, provides intelligence on the chosen career, qualifications, 
                      and skills needed to be successful in the new career.
                      </p>
                      <p className="p-color  mt-10">
                      Feeling weighed down by failing business and financial burdens, know that you're not alone. 
                      Introducing our New Occupation Guide—a lifeline for failing entrepreneurs, presenting pathways 
                      to jobs and brighter futures, that to anyone else would appear as your first choice, before
                      entrepreneurship.
                      </p>
                      <p className="p-color  mt-10">
                      {showMore1
                      ?"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen careers, ranging from understanding business responsibilities, key market issues and trends to identifying the qualifications and skills needed for success."
                      :"With quick and cost-effective intelligence at your fingertips, you gain comprehensive information into chosen"}
                      
                      {showMore1 && (
                      <p className="p-color  mt-10">
                      Try our tool to embrace the opportunity to pursue alternative career trajectories with confidence 
                      and clarity.
                      <button
                                            className="btn-show-more"
                                            onClick={() =>
                                                setShowMore1(!showMore1)
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
                            onClick={() => setShowMore1(!showMore1)}
                        >
                            {showMore1 ? "show less" : "...more"}
                        </button>
                    )}
                    </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
          <section className="section-box mt-100-industry-grid">
            <div className="post-loop-grid">
              <div className="container">
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%" }}
                  sx={{ display: { xs: "none",sm:"none", md: "none", lg: "flex" } }}
                >
                  <Grid item lg={6}>
                    <img
                      className="content-media"
                      src="assets/imgs/page/industry-intelligence/business-idea.jpg"
                      alt="joxBox"
                    />
                  </Grid>
                  <Grid item lg={6} sx={{ paddingLeft: { lg: "75px" } }}>
                    <h3  style={{ fontSize: "34px !important",marginTop:'-40px' }}>
                    Explore Business Ideas from Around the World
                    </h3>
                    <div  className="title-details">
                      <p className="p-color">
                      Are you aspiring to launch a new business, look no further – we've got you covered!
                      </p>
                      <p className="p-color  mt-10">
                      Explore the most popular businesses in all the countries or regions around the world 
                      effortlessly. Whether you already have an idea and you just wish to be inspired and explore 
                      alternatives, with our customized New Business Ideas tool, you can generate the insights you 
                      need to navigate the next big thing.
                      </p>
                      <p className="p-color  mt-10">
                      Use our tools to transform your dreams into a lucrative reality. The perfect business or career
                      change is just few clicks away!
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%",marginTop:'-20px' }}
                  sx={{ display: { xs: "none",sm:"none", md: "flex", lg: "none" } }}
                >
                  <Grid item md={12}>
                    <h3 style={{fontSize:'20px !important'}}>Explore Business Ideas from Around the World</h3>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/business-idea.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div  className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color mt-10">
                      Are you aspiring to launch a new business, look no further – we've got you covered!
                      </p>
                      <p className="p-color  mt-10">
                      Explore the most popular businesses in all the countries or regions around the world 
                      effortlessly. Whether you already have an idea and you just wish to be inspired and explore 
                      alternatives, with our customized New Business Ideas tool, you can generate the insights you 
                      need to navigate the next big thing.
                      </p>
                      <p className="p-color  mt-10">
                      Use our tools to transform your dreams into a lucrative reality. The perfect business or career
                      change is just few clicks away!
                      </p>
                    </div>
                  </Grid>
                </Grid> 
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%",marginTop:'-80px' }}
                  sx={{ display: { xs: "none",sm:"flex", md: "none", lg: "none" } }}
                >
                  <Grid item sm={12}>
                    <h3 style={{fontSize:'20px !important'}}>Explore Business Ideas from Around the World</h3>
                    </Grid>
                  <Grid item sm={12} sx={{marginTop:'10px'}}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/business-idea.jpg"
                        alt="joxBox"
                      />
                    </div>
                    <div  className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color mt-10">
                      Are you aspiring to launch a new business, look no further – we've got you covered!
                      </p>
                      <p className="p-color  mt-10">
                      Explore the most popular businesses in all the countries or regions around the world 
                      effortlessly. Whether you already have an idea and you just wish to be inspired and explore 
                      alternatives, with our customized New Business Ideas tool, you can generate the insights you 
                      need to navigate the next big thing.
                      </p>
                      <p className="p-color  mt-10">
                      Use our tools to transform your dreams into a lucrative reality. The perfect business or career
                      change is just few clicks away!
                      </p>
                    </div>
                  </Grid>
                </Grid> 
                <Grid
                  container
                  alignItems="center"
                  style={{ minWidth: "100%",marginTop:'-90px' }}
                  sx={{ display: { xs: "flex",sm:"none", md: "none", lg: "none" } }}
                >
                  <Grid item xs={12}>
                    <h3 style={{fontSize:'20px !important'}}>Explore Business Ideas from Around the World</h3>
                  </Grid>
                  <Grid className="mt-10" item xs={12}>
                    <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                      <img
                        className="content-media"
                        src="assets/imgs/page/industry-intelligence/business-idea.jpg"
                        alt="joxBox"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div  className="mt-10" style={{ textAlign: "justify" }}>
                    <p className="p-color mt-10">
                      Are you aspiring to launch a new business, look no further – we've got you covered!
                      </p>
                      <p className="p-color  mt-10">
                      Explore the most popular businesses in all the countries or regions around the world 
                      effortlessly. Whether you already have an idea and you just wish to be inspired and explore 
                      alternatives, with our customized New Business Ideas tool, you can generate the insights you 
                      need to navigate the next big thing.
                      </p>
                      <p className="p-color  mt-10">
                      Use our tools to transform your dreams into a lucrative reality. The perfect business or career
                      change is just few clicks away!
                      </p>
                    </div>
                  </Grid>
                </Grid> 
              </div>
            </div>
          </section>
          <section className="section-box mt-40">
            <div className="post-loop-grid">
              <div className="container">
                        <KickstartButton />
              </div>
            </div>
          </section>
          <Subscription />
        </div>
      </Layout>
    </>
  );
}
