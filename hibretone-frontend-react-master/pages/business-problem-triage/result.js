/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, useRef } from 'react'
import Layout from "../../components/Layout/Layout";
import axios from 'axios';
import Subscription from '../../components/Layout/Subscription';
import YellowBanner from '../../components/elements/YellowBanner';
import SearchBar from '../../components/elements/SearchBar';
import { Grid } from '@mui/material';
import CardGrid from '../../components/elements/CardGrid';
import KickstartButton from '../../components/elements/KickstartButton';

export default function Index() {
  const [data,setData] = useState({})
  const reason = useRef(null)
  const location = useRef(null)


  const locations = [
    "All",
    "West Midlands",
    "East Midlands",
    "South West",
    "Scotland",
    "North East",
    "South East",
    "North West",
    "Northern Ireland",
    "East of England",
    "Wales",
    "London",
    "Yorkshire and The Humber",
    "International"
];

const countries = [
  "UK",
  "USA",
  "Canada",
  "India",
  "Kenya",
  "Nigeria",
  "Eritrea",
  "Pakistan",
  "France",
  "Belgium",
  "Germany",
  "Israel",
  "All"
]

  const handleSubmit = async (failure_reason, country_of_orgin, company_sector, failure_stage) => {
    e.preventDefault()
    const query = {
      "country_of_origin": country_of_origin,
      "company_sector": company_sector,
      "failure_reason": failure_reason,
      "failure_stage": failure_stage
    }

    try {
      const response = await axios.post("/business-problem-triage/data", query);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately (e.g., show an error message)
    }
  }

    return (
        <>
          <Layout>
            <div className="background-random">
            <section className="section-box">
              <div className=" banner-hero bg-img-triage">
                <div className="container d-flex align-items-center">
                  <div className="row">
                    <div className="col">
                      <h2 className="mb-10">Business Problem Triage</h2>
                      <p className="color-text-paragraph-2">Tried and tested options for your business problems,<br />empowering and informing your decision making.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div classsName="row text-center">
                  <div className="col-xxl-12 mt-50">
                    <div className=" text-center mb-30">
                        <h2>Explore Proven Business Problem Pivots</h2>
                        <p>Describe your issue. Add filters for improved pivot options</p>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <SearchBar submitFunction={handleSubmit} locations={locations} countries={countries} placeholder="Enter your Business Problem" />
                  </div>
                </div>
              </div>
            </section>
            <section className='section-box mt-75'>
              <YellowBanner />
            </section>
            <section className="section-box mt-75">
              <div className="post-loop-grid">
                  <div className="container">
                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                          <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                          <h3 className="mt-5">Using Data to Inform Decisions</h3>
                          <div className="mt-10">
                              <p className="mt-10">We analysed the reasons thousands of startups failed around the world and provide you with information and resources to prevent your business encountering the same fate. The reasons why thousands of startups which failed throughout the world were analysed</p>
                              <p className="mt-10">From these failures and responses given by the founder and industry experts, we provide evidence-led pivots, information, resources & connections to prevent your business encountering similar failures.</p>
                          </div>
                          <div className="mt-20 mb-30">
                              <button className="btn btn-default fs-6">Read More</button>
                          </div>
                          </Grid>
                          <Grid item lg={6}>
                              <img className="content-media" src="assets/imgs/page/business-problem-triage/Image 1.jpg" />
                          </Grid>
                    </Grid>
                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                          <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                            <h3 className="mt-5">Using Data to Inform Decisions</h3>
                          </Grid>
                          <Grid item xs={12} md={12}>
                          <div className="sm_img_container w-img fix grid_thumb_height">
                              <img className="content-media" src="assets/imgs/page/business-problem-triage/Image 1.jpg" />
                          </div>
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <div className="mt-10">
                                  <p className="mt-10">We analysed the reasons thousands of startups failed around the world and provide you with information and resources to prevent your business encountering the same fate. The reasons why thousands of startups which failed throughout the world were analysed</p>
                                  <p className="mt-10">From these failures and responses given by the founder and industry experts, we provide evidence-led pivots, information, resources & connections to prevent your business encountering similar failures.</p>
                              </div>
                              <div className="mt-20 mb-30">
                                <button className="btn btn-default fs-6">Read More</button>
                              </div>
                          </Grid>
                    </Grid>
                  </div>
              </div>
            </section>
            <section className="section-box mt-100">
              <div className="post-loop-grid">
                  <div className="container">
                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                          <Grid item lg={6}>
                            <img className="content-media" src="assets/imgs/page/business-problem-triage/Image 2.png" alt="joxBox" />
                          </Grid>
                          <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>

                          <h3>Why Startups Fail</h3>
                          <div className="mt-10">
                              <p className="mt-10">From lack of product-market fit to disharmony on the team, we have accessed datasets for the top 12 reasons for startup failure. </p>
                              <p className="mt-10">Benefiting from information provided from several leading research institutions.</p>
                          </div>
                          <div className="mt-20 mb-30">
                              <button className="btn btn-default">Read More</button>
                          </div>
                          </Grid>
                    </Grid>
                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                          <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                            <h3>Why Startups Fail</h3>
                          </Grid>
                          <Grid item xs={12} md={12}>
                          <div className="sm_img_container w-img fix grid_thumb_height">
                            <img className="content-media" src="assets/imgs/page/business-problem-triage/Image 2.png" alt="joxBox" />
                          </div></Grid>
                          <Grid item xs={12} md={12}>
                            <div className="mt-10">
                                <p className="mt-10">From lack of product-market fit to disharmony on the team, we have accessed datasets for the top 12 reasons for startup failure. </p>
                                <p className="mt-10">Benefiting from information provided from several leading research institutions.</p>
                            </div>
                              <div className="mt-20 mb-30">
                                <button className="btn btn-default fs-6">Read More</button>
                              </div>
                          </Grid>
                    </Grid>
                  </div>
              </div>
            </section>
            <section className="section-box mt-100">
              <div className="post-loop-grid">
                  <div className="container">
                    <Grid container className='mb-50' alignItems="center" style={{minWidth: '100%'}}
                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                          <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                          <h3 className="mt-5">Categories of Startup Failure</h3>
                          <div className="mt-10">
                              <p className="mt-10">Leaning on datasets provided by CBInsights © and other aggregators of business failure data.</p>
                              <p className="mt-10">We provide pivots and options for survival for the six (6) categories of business failure.</p>
                          </div>
                          <div className="mt-20 mb-30">
                              <button className="btn btn-default fs-6">Read More</button>
                          </div>
                          </Grid>
                          <Grid item lg={6}>
                              <img className="content-media" src="assets/imgs/page/business-problem-triage/Image 3.jpg" />
                          </Grid>
                    </Grid>
                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                          <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                            <h3 className="mt-5">Categories of Startup Failure</h3>
                          </Grid>
                          <Grid item xs={12} md={12}>
                          <div className="sm_img_container w-img fix grid_thumb_height">
                              <img className="content-media" src="assets/imgs/page/business-problem-triage/Image 3.jpg" />
                          </div>
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <div className="mt-10">
                                  <p className="mt-10">Leaning on datasets provided by CBInsights © and other aggregators of business failure data.</p>
                                  <p className="mt-10">We provide pivots and options for survival for the six (6) categories of business failure.</p>
                              </div>
                              <div className="mt-20 mb-30">
                                <button className="btn btn-default fs-6">Read More</button>
                              </div>
                          </Grid>
                    </Grid>
                  </div>
              </div>
            </section>
            <section className='section-box mt-100'>
              <div className="container">
                <div className="row">
                  <div className="text-center">
                      <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                          Categories of Business Failure
                      </h2>
                      <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                          The 6 Categories of Business Failure
                      </p>
                  </div>
                  <CardGrid />
                </div>
              </div>
            </section>
            <section className='section-box'>
              <div className='container text-center'>
                <img className="content-media" style={{"scale": "0.6"}} src='assets/imgs/page/business-problem-triage/PieChart.png' />
              </div>
            </section>
            </div>
            <div className="mt-100">
              <KickstartButton />
            </div>
            <Subscription />
          </Layout>
        </>
    );
};
