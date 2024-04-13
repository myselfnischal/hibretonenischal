import Layout from '../../components/Layout/Layout'
import YellowBanner from '../../components/elements/YellowBanner';
import React from 'react';
import Subscription from "../../components/Layout/Subscription";
import KickstartButton from '../../components/elements/KickstartButton';
import {Grid} from "@mui/material";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import dynamic from "next/dynamic";



const NoSSRBrandSlider = dynamic(
    () => import("../../components/sliders/Brand4"),
    { ssr: false }
);

export default function index() {
    return (
        <>
            <Layout>
                <div>

                <div className="background-shape-1"></div>
                <div className="background-shape-2"></div>


                <section className="section-box">
                    <div className=" banner-hero bg-img-scholarship">
                        <div className="container d-flex align-items-center">
                            <div className="row">
                                <div className="col">
                                    <h2 className="mb-40">Entrepreneurial Scholarships & Bursaries</h2>
                                    <p className="color-text-paragraph-2">Enabling the kickstart of entrepreneurial careers for all aspirers, with<br/>finance, resource and mentorship support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                        <div className="container">
                            <div className="list-brands mt-40">
                                <div className="box-swiper">
                                    <h2 className="text-center section-title mb-20 wow animate__animated animate__fadeInUp">
                                        Scholarship Supporters
                                    </h2>

                                    <div className="swiper-button-next swiper-button-margin" />
                                    <div className="swiper-button-prev swiper-button-margin" />
                                    <NoSSRBrandSlider />
                                </div>
                            </div>
                        </div>

            <div className=" text-center mt-50 mb-50">
                <button className="btn btn-primary"><p className='color-white'>Apply for Scholarship</p></button>
            </div>


            {/* Section 1 */}

            <section className="section-box mgb-70">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                            sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                            <Grid item lg={6}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/woman.png"
                                    alt="scholarship"/>
                            </Grid>
                            <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}} className='pd-l'>
                                <h3>Scholarships</h3>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="fw-bold mb-10">hibretOne is inclusive, investing in aspirers, entrepreneurs, small businesses, scale ups, even side-hustlers.</p>
                                        <p>Resources, tools, mentorship and up to £10,000 in funding. Delivering opportunities for aspirers to start and scale a successful enterprise.</p>
                                        <p>Empowering aspirers wanting to start a small hair salon, to founders wanting to start an international tech company, we have scholarships to suit.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Check
                                        Eligibility</Link>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                                sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                            <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                <h4 className='text-heading'>Scholarships</h4>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/woman.png"
                                    alt="scholarship"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">hibretOne is inclusive, investing in aspirers, entrepreneurs, small businesses, scale ups, even side-hustlers.</p>
                                        <p className="para">Resources, tools, mentorship and up to £10,000 in funding. Delivering opportunities for aspirers to start and scale a successful enterprise.</p>
                                        <p className="para">Empowering aspirers wanting to start a small hair salon, to founders wanting to start an international tech company, we have scholarships to suit.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Check
                                        Eligibility</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>

            {/* Kickstart business seciton*/}
            <section className="section-box mt-75 mb-75">
                <YellowBanner />
            </section>

            {/* Section 2 */}
            <section className="section-box mb-100">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                            sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>

                            <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}} className='pd-r mg-t'>
                                <h4>Scholarship Supporters</h4>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Globally recognised industry leaders select aspirers with ideas close to their hearts.</p>
                                        <p className="para">Mentor masterclasses by Nick Jenkins founder of Moonpig.com & former-BBC Dragons Den, Melissa Snover received the highest investment for a woman in UK history, Eric Collins (opposite) Channel 4 presenter & former Barack Obama advisor.</p>
                                        <p className="para">Entrepreneurship empowering organisations like SouthBank Centre, Centre for Research into Ethnic Minority Entrepreneurship, Alison and others.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Read
                                        More</Link>
                                </div>
                            </Grid>
                            <Grid item lg={6}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/Eric-Collins.jpeg"
                                    alt="scholarship"/>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                                sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                            <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                <h4 className='text-heading'>Scholarship Supporters</h4>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/Eric-Collins.jpeg"
                                    alt="scholarship"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Globally recognised industry leaders select aspirers with ideas close to their hearts.</p>
                                        <p className="para">Mentor masterclasses by Nick Jenkins founder of Moonpig.com & former-BBC Dragons Den, Melissa Snover received the highest investment for a woman in UK history, Eric Collins (opposite) Channel 4 presenter & former Barack Obama advisor.</p>
                                        <p className="para">Entrepreneurship empowering organisations like SouthBank Centre, Centre for Research into Ethnic Minority Entrepreneurship (CREME), Alison and others.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Read
                                        More</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="section-box mb-100">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                            sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                            <Grid item lg={6}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/money-jar.png"
                                    alt="scholarship"/>
                            </Grid>
                            <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>
                                <h4>Bursaries</h4>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Bursaries are non-repayable awards allocated on the basis of your drive as an aspirer, coupled with your financial need and your personal journey.</p>
                                        <p className="para">Of course there is some emphasis on the idea, but if your idea will help change your personal circumstance, or change the community you live in, then you could be eligible. Your idea does not even need to make money, as long as it will make an impact.</p>
                                        <p className="para">Bursaries include a package of group support from our amazing supporters.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Check
                                        Eligibility</Link>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                                sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                            <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                <h4 className='text-heading'>Bursaries</h4>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <img className="scholarship-supporter-pic"
                                    src="assets/imgs/page/scholarship/money-jar.png"
                                    alt="scholarship"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Bursaries are non-repayable awards allocated on the basis of your drive as an aspirer, coupled with your financial need and your personal journey.</p>
                                        <p className="para">Of course there is some emphasis on the idea, but if your idea will help change your personal circumstance, or change the community you live in, then you could be eligible. Your idea does not even need to make money, as long as it will make an impact.</p>
                                        <p className="para">Bursaries include a package of group support from our amazing supporters.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Check
                                        Eligibility</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>

            <section className="section-box  mb-100">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                            sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                            <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}} className='pd-r'>
                                <h4>Upskilling Aspiring Entrepreneurs</h4>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Grant funding, platform subscription, mentorship, business support, funding to enable you to embark on a higher-paying career.</p>
                                        <p className="para">Upskilling to deliver the learning required for you to become a mentor, a co-founder or business consultant.</p>
                                        <p className="para">Renowned, brilliant & generous leaders helping hibretOne to kickstart entrepreneurship careers.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Read
                                        More</Link>
                                </div>
                            </Grid>
                            <Grid item lg={6}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/team-meeting.png"
                                    alt="scholarship"
                                />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                            sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                            <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                <h4>Upskilling Aspiring Entrepreneurs</h4>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/team-meeting.png"
                                    alt="scholarship"
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Grant funding, platform subscription, mentorship, business support, funding to enable you to embark on a higher-paying career.</p>
                                        <p className="para">Upskilling to deliver the learning required for you to become a mentor, a co-founder or business consultant.</p>
                                        <p className="para">Renowned, brilliant & generous leaders helping hibretOne to kickstart entrepreneurship careers.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Read
                                        More</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>



            {/* Section 5 */}
            <section className="section-box mb-100">
                            <div className="post-loop-grid">
                                <div className="container">
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                        sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                                        <Grid item lg={6}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/scholarship/graduation.png"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}} className="pd-l">
                                            <h4>Eligibility</h4>
                                            <div className="mt-20">
                                                <h6 className="mt-10 font-md"><strong>Scholarships are about you, your resilience, your ability to deliver and giving you the opportunity to shine.</strong></h6>
                                                <ul className="mt-10">
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'></div>Supporting those from underrepresented groups.

                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'></div> Can be an individual or have a company incorporated.
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'></div> Successfully completed the Entrepreneur Academy.
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'></div> Attended an in-person Partner event
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'></div> Permission to stay or reside in UK.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-20 mb-20">
                                                <Link href="" className="btn btn-default fs-6">Check
                                                    Eligibility</Link>
                                            </div>
                                        </Grid>

                                    </Grid>
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                        <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                            <h4>Eligibility</h4>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/scholarship/graduation.png"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="mt-20 ml-20">
                                                <ul className="mt-10">
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'/>Supporting those from underrepresented groups.
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'/>Can be an individual or have a company incorporated.
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'/>Successfully completed the Entrepreneur Academy.
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'/>Attended an in-person Partner event
                                                    </li>
                                                    <li className="color-text-paragraph bullet-row">
                                                        <div className='checkbox-pic'/>Permission to stay or reside in UK.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-20 mb-20">
                                                <Link href="" className="btn btn-default fs-6">Check
                                                    Eligibility</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>

            {/* Section 6 */}
            <section className="section-box mb-75">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                            sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>

                            <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}} className='pd-r'>
                                <h4>Empowering Everyone with Talent</h4>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Whether you want to start a small hair salon in your local village, to starting an international tech company with aspirations to compete with Google, we have scholarships to suit.</p>
                                        <p className="para">We are creating a #Movement where talent, dedication and your idea is the major factor to your success.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Read
                                        More</Link>
                                </div>
                            </Grid>
                            <Grid item lg={6}>
                                <img className="content-media"
                                    src="assets/imgs/page/scholarship/hug.png"
                                    alt="scholarship"/>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{minWidth: '100%'}}
                                sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                            <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                <h4 className='text-heading'>Bursaries</h4>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <img className="scholarship-supporter-pic"
                                    src="assets/imgs/page/scholarship/hug.png"
                                    alt="scholarship"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10">
                                    <div className="color-text-paragraph mt-10">
                                        <p className="para">Whether you want to start a small hair salon in your local village, to starting an international tech company with aspirations to compete with Google, we have scholarships to suit.</p>
                                        <p className="para">We are creating a #Movement where talent, dedication and your idea is the major factor to your success.</p>
                                    </div>
                                </div>
                                <div className="mt-20 mb-30">
                                    <Link href="" className="btn btn-default fs-6">Read
                                        More</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>

      <KickstartButton />
    <section className="section-box">
        <div className="text-center mt-75">
            <h2 className='stats-heading'>Impact of Our Scholarships</h2>
        </div>

        <div className="container mt-70">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h2 className="color-brand-2 color-background-1">
                            <span className="count">
                                £1Million+
                            </span>
                        </h2>
                        <h6>User interventions</h6>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h2 className="color-brand-2 color-background-2">
                            <span className="count">
                                50+
                            </span>
                        </h2>
                        <h6>Scholarships awarded</h6>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h2 className="color-brand-2 color-background-3">
                            <span className="count">
                                50+
                            </span>
                        </h2>
                        <h6>Bursaries awarded</h6>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h2 className="color-brand-2 color-background-4">
                            <span className="count">
                                12
                            </span>
                        </h2>
                        <h6>New businesses created</h6>
                    </div>
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
