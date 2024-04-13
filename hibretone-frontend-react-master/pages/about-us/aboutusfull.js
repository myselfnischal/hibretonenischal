/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import Aboutuscounter from './aboutuscounter';
import Aboutusmeetourteamfull from './aboutusmeetourteamfull';
import Aboutusnewsandeventscarouselfull from './aboutusnewsandeventscarouselfull';
import SubscribeButton from '../../components/elements/SubscribeButton';
import { IoShareSocialOutline } from "react-icons/io5";
import Aboutushibretoneinformation from './aboutushibretoneinformation';


function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [open])
}

export default function Index() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = e => {
        setIsOpen(prevOpen => !prevOpen)
    }

    useLockBodyScroll(isOpen)

    return (
        <>
            <Layout>
                <div className="background-random-aboutus">
                    <section className="section-box">
                        <label className="headingdivider1"></label>
                        <div className="banner-hero1 bg-img-aboutus">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 style={{ marginBottom: '20px', fontSize: '60px' }}>About Us</h2>
                                        <p className="color-text-paragraph-2" style={{ fontSize: '24px', maxWidth: '835px', lineHeight: '30px' }}>
                                            hibretOne is a  <span className="color-blue">  not-for-profit </span> Community Interest Company (CIC), using entrepreneurship & education to create  economic impact                                 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mb-40">
                        <div className="container">
                            <div className="flex-container">
                                <div className="share-icon-container">
                                    <button className="btn-share-search">
                                        <IoShareSocialOutline className="share-icon" />
                                    </button>
                                </div>
                                <div className="text-center">
                                    <h2 className="section-title wow animate__animated animate__fadeInUp" style={{ fontSize: '40px' }}>
                                        Our Impact so far
                                    </h2>
                                </div>
                                <Aboutuscounter />
                            </div>
                        </div>
                    </section>


                    <Aboutushibretoneinformation />

                    <Aboutusmeetourteamfull />

                    <Aboutusnewsandeventscarouselfull />

                    <section className="section-box mt-75 yellowbanner-aboutus">
                        <SubscribeButton />

                    </section>
                    <section className="section-box subscription-aboutus">
                        <Subscription />

                    </section>
                </div >
            </Layout >
        </>
    );
}
