/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import Link from "next/link";
import {Link as MUILink} from "@mui/material";
import YellowBanner from "../../components/elements/YellowBanner";
import {Grid} from "@mui/material";


export default function Index() {
    return (<>
            <Layout>
                <div>
                    <div className="background-random-business-plan-writer">
                        <section className="section-box">
                            <div className=" banner-hero bg-img-business-plan-writer">
                                <div className="container d-flex align-items-center">
                                    <div className="row">
                                        <div className="col">
                                            <h2 className="mb-10">Business Plan Writer</h2>
                                            <p className="color-text-paragraph-2">Harness the power of AI to help
                                                write a winning business plan <br/>to start or grow your business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-box mt-50">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10">Transform your business idea into a business
                                        plan</h2>
                                    <p className="font-lg color-text-paragraph-2">
                                        Takes less than 15 minutes</p>
                                </div>
                                <div className="text-center mt-20">
                                    <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                        Started</Link>
                                </div>
                            </div>
                        </section>

                        <section className="section-box mt-50">
                            <div className="post-loop-grid">
                                <div className="container">
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                                        <Grid item lg={6} sx={{paddingLeft: {lg: '0px'}, paddingRight: {lg: '75px'}}}>
                                            <Grid item>
                                                <h4>Using the Business Plan Writer</h4>
                                            </Grid>
                                            <Grid item sx={{mt: 1}}>
                                                <h6 className="mt-10"><strong>See how easily you can create your
                                                    own Business Plan</strong></h6>
                                                <p className="color-text-paragraph mt-10">
                                                    Business plans are essential for credibility, to improve chances of
                                                    success, to validate your idea and to secure investment. The
                                                    hibretOne Business Plan writer creates a plan which includes:
                                                    Executive Summary, Business overview, Sales and marketing,
                                                    Operations and Management, Financial Plan...
                                                    <MUILink href="#" color="primary">read more</MUILink>
                                                </p>
                                            </Grid>
                                            <Grid item sx={{mt: 2}}>
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <iframe
                                                className={"content-media"}
                                                width="560" height="315"
                                                src="https://www.youtube.com/embed/BCwiOBKnRuE?si=Orig1QLf7cnaqCuE"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen>
                                            </iframe>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                        <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                            <h4>Using the Business Plan Writer</h4>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <iframe
                                                className={"content-media"}
                                                width="560" height="315"
                                                src="https://www.youtube.com/embed/BCwiOBKnRuE?si=Orig1QLf7cnaqCuE"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen>
                                            </iframe>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="mt-10">
                                                <h6 className="mt-10 font-md"><strong>See how easily you can create your
                                                    own Business Plan</strong></h6>
                                                <p className="color-text-paragraph mt-10">
                                                    Business plans are essential for credibility, to improve chances of
                                                    success, to validate your idea and to secure investment. The
                                                    hibretOne Business Plan writer creates a plan which includes:
                                                    Executive Summary, Business overview, Sales and marketing,
                                                    Operations and Management, Financial Plan...
                                                    <MUILink href="#" color="primary">read more</MUILink>
                                                </p>
                                            </div>
                                            <div className="mt-20">
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>

                        <section className="section-box mt-75 mb-75">
                            <YellowBanner/>
                        </section>

                        <section className="section-box">
                            <div className="post-loop-grid">
                                <div className="container">
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                                        <Grid item lg={6}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/business-plan-writer/coffee-cup.jpeg"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>
                                            <h4>Business Plan creation for everyone</h4>
                                            <div className="mt-10">
                                                <p className="color-text-paragraph mt-10">
                                                    For aspirers who are neurodiverse, speak English as a second
                                                    language, with limited business skills, or lower levels of
                                                    education,
                                                    creating
                                                    a Business Plan can be daunting. We are here to help, to teach, to
                                                    not
                                                    judge and to provide solutions to build your business in smart,
                                                    efficient ways...
                                                    <MUILink href="#" color="primary">read more</MUILink>
                                                </p>
                                            </div>
                                            <div className="mt-20">
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                        <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                            <h4>Business Plan creation for everyone</h4>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/business-plan-writer/coffee-cup.jpeg"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="mt-10">
                                                <p className="color-text-paragraph mt-10">
                                                    For aspirers who are neurodiverse, speak English as a second
                                                    language, with limited business skills, or lower levels of
                                                    education,
                                                    creating
                                                    a Business Plan can be daunting. We are here to help, to teach, to
                                                    not
                                                    judge and to provide solutions to build your business in smart,
                                                    efficient ways...
                                                    <MUILink href="#" color="primary">read more</MUILink>
                                                </p>
                                            </div>
                                            <div className="mt-20">
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>
                        <section className="section-box mt-75">
                            <div className="post-loop-grid">
                                <div className="container">
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                                        <Grid item lg={6} sx={{paddingLeft: {lg: '10px'}, paddingRight: {lg: '75px'}}}>
                                            <Grid item>
                                                <h4>A business plan builds credibility & gives confidence to your idea
                                                </h4>
                                            </Grid>
                                            <Grid item sx={{mb: 2}}>
                                                <h6 className="mt-10"><strong>Once your plan is done, you
                                                    can:</strong></h6>
                                                <ul className="mt-10">
                                                    <li className="color-text-paragraph">
                                                        &#8226; Download your plan as a PDF or Word doc so you can share
                                                        it
                                                        easily.
                                                    </li>
                                                    <li className="color-text-paragraph">
                                                        &#8226; Print out your plan to get a clean, professional
                                                        document.
                                                    </li>
                                                    <li className="color-text-paragraph">
                                                        &#8226; Save to update in the future.
                                                    </li>
                                                    <li className="color-text-paragraph">
                                                        &#8226; Share with a business advisor for another perspective.
                                                    </li>
                                                </ul>
                                            </Grid>
                                            <Grid item sx={{mt: 2}}>
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/business-plan-writer/Royalty-free-images-22.jpeg"
                                                 alt="joxBox"/>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                        <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                            <h4>A business plan builds credibility & gives confidence to your idea
                                            </h4>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/business-plan-writer/Royalty-free-images-22.jpeg"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="mt-20">
                                                <h6 className="mt-10"><strong>Once your plan is done, you
                                                    can:</strong></h6>
                                                <ul className="mt-10">
                                                    <li className="color-text-paragraph">
                                                        &#8226; Download your plan as a PDF or Word doc so you can share
                                                        it
                                                        easily.
                                                    </li>
                                                    <li className="color-text-paragraph">
                                                        &#8226; Print out your plan to get a clean, professional
                                                        document.
                                                    </li>
                                                    <li className="color-text-paragraph">
                                                        &#8226; Save to update in the future.
                                                    </li>
                                                    <li className="color-text-paragraph">
                                                        &#8226; Share with a business advisor for another perspective.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-20">
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>
                        <section className="section-box mt-75">
                            <div className="post-loop-grid">
                                <div className="container">
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                                        <Grid item lg={6}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/business-plan-writer/Royalty-free-images-14.jpeg"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item lg={6}
                                              sx={{paddingLeft: {lg: '75px'}}}>
                                            <h4>Everyone with a good idea should have effective tools</h4>
                                            <div className="mt-10">
                                                <p className="color-text-paragraph mt-20">
                                                    You are capable enough to plan, build, and scale a business, with
                                                    support if needed. Business planning and strategy is not a science,
                                                    you
                                                    just need to learn. Planning and running a business changes lives.
                                                    Even
                                                    if you fail we can help you gain a better paying job.
                                                </p>
                                            </div>
                                            <div className="mt-20">
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" style={{minWidth: '100%'}}
                                          sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                        <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                            <h4>Everyone with a good idea should have effective tools</h4>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <img className="content-media"
                                                 src="assets/imgs/page/business-plan-writer/Royalty-free-images-14.jpeg"
                                                 alt="joxBox"/>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <div className="mt-10">
                                                <p className="font-md color-text-paragraph mt-20">
                                                    You are capable enough to plan, build, and scale a business, with
                                                    support if needed. Business planning and strategy is not a science,
                                                    you
                                                    just need to learn. Planning and running a business changes lives.
                                                    Even
                                                    if you fail we can help you gain a better paying job.
                                                </p>
                                            </div>
                                            <div className="mt-20">
                                                <Link href="/business-plan-wizard" className="btn btn-start fs-6">Get
                                                    Started</Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Subscription/>
                </div>
            </Layout>
        </>);
}
