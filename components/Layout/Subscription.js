/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";

const Subscription = () => {
    return (
        <section className="section-box mt-50 mb-20">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/page/homepage1/newsletter.png" alt="joxBox" />
                                    </div>
                                    <div className="col-xl-8 col-lg-12 col-12 text-center">
                                        <div className="d-inline-block">
                                            <div>
                                                <h2 className="color-white">Sign-up to our Show Me the Money newsletter</h2>
                                                <p className="mt-10 font-lg color-white">Funding, research and opportunities delivered directly to your inbox</p>
                                            <div/>
                                            <div className="box-form-newsletter mt-40">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                                                    <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>

    );
};

export default Subscription;