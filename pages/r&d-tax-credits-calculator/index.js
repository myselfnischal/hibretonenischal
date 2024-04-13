/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import TaxCreditsCalculatorModal from './TaxCreditsCalculatorModal/TaxCreditsCalculatorModal';
import Subscription from '../../components/Layout/Subscription';
import YellowBanner from '../../components/elements/YellowBanner';
import KickstartButton from '../../components/elements/KickstartButton';
import { Grid } from '@mui/material';
import Link from 'next/link';

function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow="hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        }
    },[open])
}

export default function Index() {
    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen = e => {
        setIsOpen(prevOpen => !prevOpen)
    }

    useLockBodyScroll(isOpen)

    return (
        <>
        <Layout>
            <div className="background-random">
                <section className="section-box">
                    <div className=" banner-hero bg-img-calculator">
                        <div className="container d-flex align-items-center">
                            <div className="row">
                                <div className="col-lg-12 ml-20">
                                    <h2 className="mb-20">R&D Tax Credits Calculator</h2>
                                    <p>Claim money back from HMRC for your<br/>product development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title">How Much Can You Claim?</h2>
                            <p className="fw-bold color-text-paragraph w-lg-50 mx-auto">Answer these simple questions for a quick answer</p>
                        </div>
                        <div className="text-center mt-50">
                            <button className="btn btn-start fs-6" onClick={toggleOpen}>Get Started</button>
                        </div>
                        <TaxCreditsCalculatorModal show={isOpen} onClose={toggleOpen} />
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="post-loop-grid">
                        <div className="container">
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'none', md: 'none', lg: 'flex'}}}>
                                <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                                    <h3>Using the R&D Tax Credit Scheme</h3>
                                    <div>
                                        <p className="mt-10"><strong>Nearly £84 billion of R&D tax relief is unclaimed in the UK according to the Treasury.</strong></p>
                                        <p className="color-text-paragraph mt-10">With 80% of eligible businesses not having made a claim, use our simple calculator to see if you may qualify. To claim you need to explain how a project: looked for an advance in the field, had to overcome the scientific or technological uncertainty, tried to overcome the scientific or technological uncertainty, could not be easily worked out by a professional in the field.</p>
                                        <p className="color-text-paragraph mt-10 mb-10">Watch this simple video to learn more about how the scheme can be used.</p>
                                    </div>
                                    <div className="mt-20">
                                        <button href="/business-plan-wizard" className="btn btn-default fs-6">Get
                                            Started</button>
                                    </div>
                                </Grid>
                                <Grid item lg={6}>
                                    <iframe
                                        className="content-media"
                                        width="560" height="400"
                                        src="https://www.youtube.com/embed/-OinRckvals?si=TUyb8vFa2udkyE4S"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                    <h3>Using the R&D Tax Credit Scheme</h3>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <iframe
                                        className={"content-media"}
                                        width="560" height="315"
                                        src="https://www.youtube.com/embed/-OinRckvals?si=TUyb8vFa2udkyE4S"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div className="mt-10">
                                        <h6 className="mt-10"><strong>Nearly £84 billion of R&D tax relief is unclaimed in the UK according to the Treasury.</strong></h6>
                                        <p className="color-text-paragraph mt-10">With 80% of eligible businesses not having made a claim, use our simple calculator to see if you may qualify. To claim you need to explain how a project: looked for an advance in the field, had to overcome the scientific or technological uncertainty, tried to overcome the scientific or technological uncertainty, could not be easily worked out by a professional in the field.</p>
                                        <p className="color-text-paragraph mt-10 mb-10">Watch this simple video to learn more about how the scheme can be used.</p>
                                    </div>
                                    <div className="mt-20 mb-30">
                                        <button href="/business-plan-wizard" className="btn btn-default fs-6">Get
                                            Started</button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-75 mb-75">
                    <YellowBanner />
                </section>
                <section className="section-box ">
                    <div className="post-loop-grid">
                        <div className="container">
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'none', md: 'none', lg: 'flex'}}}>
                                <Grid item lg={6}>
                                    <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                </Grid>
                                <Grid item className="mt-30" lg={6} sx={{paddingLeft: {lg: '75px'}}}>
                                    <h3>Examples of R&D tax credit claims</h3>
                                    <div className="mt-10">
                                        <p className="fw-bold color-text-paragraph">Size of your claim will depend on the scale of your R&D activity and your costs.</p>
                                        <p className="color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#1740d0"}}>A profitable SME:</span> In addition to the tax relief your company’s eligible R&D expenditure generates, a further 86% can be deducted from the yearly profit. If you spent £500,000 per year on R&D you could potentially claim back up to £107,500 as a tax refund or reduced tax liability.</p>
                                        <p className="color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#f58a3c"}}>A loss-making SME: </span>A payable credit can be claimed by loss-making SMEs. With an R&D tax credit incentive of up to 18.6%, if a company spent £500,000 per year on R&D it could potentially claim back up to £93,000.</p>
                                        <p className="color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#3aab67"}}>A loss-making, R&D intensive SME: </span>At least 40% of a company’s total expenditure being spent on R&D. Businesses in this category may be eligible for up to 27%. If you spent £500,000 per year on R&D you could potentially claim back up to £135,000.</p>
                                    </div>
                                    <div className="mt-20 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                    <h3>Examples of R&D tax credit claims</h3>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                        <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                    </div>
                                    </Grid>
                                <Grid item xs={12} md={12}>
                                    <div className="mt-10">
                                        <p className="fw-bold color-text-paragraph">Size of your claim will depend on the scale of your R&D activity and your costs.</p>
                                        <p className="color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#1740d0"}}>A profitable SME:</span> In addition to the tax relief your company’s eligible R&D expenditure generates, a further 86% can be deducted from the yearly profit. If you spent £500,000 per year on R&D you could potentially claim back up to £107,500 as a tax refund or reduced tax liability.</p>
                                        <p className="color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#f58a3c"}}>A loss-making SME: </span>A payable credit can be claimed by loss-making SMEs. With an R&D tax credit incentive of up to 18.6%, if a company spent £500,000 per year on R&D it could potentially claim back up to £93,000.</p>
                                        <p className="color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#3aab67"}}>A loss-making, R&D intensive SME: </span>At least 40% of a company’s total expenditure being spent on R&D. Businesses in this category may be eligible for up to 27%. If you spent £500,000 per year on R&D you could potentially claim back up to £135,000.</p>
                                    </div>
                                    <div className="mt-30 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
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
                                    sx={{display: {xs: 'none', md: 'none', lg: 'flex'}}}>
                                <Grid  className="mt-40" item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                                    <h3>Encouraging Innovation</h3>
                                    <div className="mt-20">
                                        <p className="fw-bold color-text-paragraph mt-20">Around <span style={{color: "#3C65F5"}}>£7 billion</span> of tax relief is paid to UK businesses through R&D Tax Credits every year.</p>
                                        <p className="color-text-paragraph mt-20">UK Government encourages innovation as it is vital for improving the UK’s productivity, performance and competitiveness. Hence, research and development (R&D) incentives for small and medium size enterprises (SMEs) and large companies have been improved over several years to encourage and reward greater UK innovation.</p>
                                    </div>
                                    <div className="mt-30 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </Grid>
                                <Grid item lg={6} className="d-flex justify-content-center">
                                    <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/BTW.jpeg" alt="joxBox" />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                                    <h3>Encouraging Innovation</h3>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                        <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/BTW.jpeg" alt="joxBox" />
                                    </div>

                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div className="mt-20">
                                        <p className="fw-bold color-text-paragraph mt-20">Around <span style={{color: "#3C65F5"}}>£7 billion</span> of tax relief is paid to UK businesses through R&D Tax Credits every year.</p>
                                        <p className="color-text-paragraph mt-20">UK Government encourages innovation as it is vital for improving the UK’s productivity, performance and competitiveness. Hence, research and development (R&D) incentives for small and medium size enterprises (SMEs) and large companies have been improved over several years to encourage and reward greater UK innovation.</p>
                                    </div>
                                    <div className="mt-30 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
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
                                    <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/Tax.jpeg" alt="joxBox" />
                                </Grid>
                                <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>
                                    <h3 className="mt-5">Staying on top of the Changes</h3>
                                    <div className="mt-15">
                                        <h6 className="fw-bold color-text-paragraph mt-20" style={{color: "#1740d0"}}>Calculating R&D tax credits for SMEs</h6>
                                        <p className="color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                        <h6 className="fw-bold color-text-paragraph mt-20" style={{color: "#3aab67"}}>Changes to R&D tax credit scheme</h6>
                                        <p className="color-text-paragraph">The government makes ongoing reforms to R&D tax credit relief schemes. Contact a Preferred Partner tax advisor for the latest information.</p>
                                        <h6 className="fw-bold color-text-paragraph mt-20" style={{color: "#f58a3c"}}>Calculating R&D tax credits for SMEs</h6>
                                        <p className="color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                    </div>
                                    <div className="mt-30 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'flex', md: 'flex', lg: 'none'}}}>
                                <Grid item xs={12} md={12}>
                                    <h3>Staying on top of the Changes</h3>
                                </Grid>
                                <Grid className="mt-10" item xs={12} md={12}>
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                        <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/Tax.jpeg" alt="joxBox" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div>
                                        <h6 className="fw-bold color-text-paragraph" style={{color: "#1740d0"}}>Calculating R&D tax credits for SMEs</h6>
                                        <p className="color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                        <h6 className="fw-bold color-text-paragraph" style={{color: "#3aab67"}}>Changes to R&D tax credit scheme</h6>
                                        <p className="color-text-paragraph">The government makes ongoing reforms to R&D tax credit relief schemes. Contact a Preferred Partner tax advisor for the latest information.</p>
                                        <h6 className="fw-bold color-text-paragraph" style={{color: "#f58a3c"}}>Calculating R&D tax credits for SMEs</h6>
                                        <p className="color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                    </div>
                                    <div className="mt-10 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100 mb-75">
                    <div className="post-loop-grid">
                        <div className="container">
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'none', md: 'none', lg: 'flex'}}}>
                                <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                                    <h3 className="pt-10">UK Government Website</h3>
                                    <div className="mt-10">
                                        <p className="color-text-paragraph">Keep up to date with UK Government R&D Tax Credit schemes. Along with calculations, provides detailed information on what can be claimed and what cannot be claimed, if your advance is in the arts, humanities, social sciences, including economics.</p>
                                        <div className="mt-20 mb-50">
                                            <a className="btn btn-default fs-6" target="_blank" href="https://www.gov.uk/">
                                                gov.uk
                                            </a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={6}>
                                    <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/Government.png" alt="joxBox" />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" style={{minWidth: '100%'}}
                                    sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                                <Grid item xs={12} md={12} sx={{marginBottom: '10px'}}>
                                    <h3>UK Government Website</h3>
                                </Grid>
                                <Grid item xs={11} md={11}>
                                    <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/Government.png" alt="joxBox" />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div className="mb-30">
                                        <p className="color-text-paragraph">Keep up to date with UK Government R&D Tax Credit schemes. Along with calculations, provides detailed information on what can be claimed and what cannot be claimed, if your advance is in the arts, humanities, social sciences, including economics.</p>
                                    </div>
                                    <div className="mt-10 mb-50">
                                        <a className="btn btn-default fs-6" target="_blank" href="https://www.gov.uk/">
                                            gov.uk
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </section>
                <KickstartButton />
                <Subscription />
            </div>
        </Layout>
        </>
    );
}
