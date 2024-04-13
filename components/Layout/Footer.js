/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer mt-50">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1 col-md-3 col-sm-12">
                        <Link legacyBehavior href="/"><a><img alt="jobBox" src="/assets/imgs/template/hibretOne-logo.png" /></a></Link>
                        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">The most comprehensive success business resources, tools, funding and opportunities, all in one place</div>
                        <div className="footer-social">
                            <a className="icon-socials icon-facebook" href="#" />
                            <a className="icon-socials icon-twitter" href="#" />
                            <a className="icon-socials icon-linkedin" href="#" /></div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6">
                        <h6 className="mb-20">Resources
                        </h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Business Builder</a></li>
                            <li>
                                <a href="#">Funding Builder</a></li>
                            <li>
                                <a href="#">Resources Builder</a></li>
                            <li>
                                <a href="#">Career Builder</a></li>
                            <li>
                                <a href="/grant-finder">Grant Finder</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-3 col-md-2 col-xs-6">
                        <h6 className="mb-20">Community</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Social Impact</a></li>
                            <li>
                                <a href="#">Scholarships</a></li>
                            <li>
                                <a href="#">Newsletter</a></li>
                            <li>
                                <a href="#">Gallery</a></li>
                            <li>
                                <a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-md-2 col-xs-6">
                        <h6 className="mb-20">Support</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Ecosystem Connect</a></li>
                            <li>
                                <a href="#">Help</a></li>
                            <li>
                                <a href="#">Support</a></li>
                            <li>
                                <a href="#">Accessibility</a></li>
                            <li>
                                <a href="#">Schools</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-5 col-md-2 col-xs-6">
                        <h6 className="mb-20">More</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Become a Partner</a></li>
                            <li>
                                <a href="#">Press</a></li>
                            <li>
                                <a href="#">Events</a></li>
                            <li>
                                <a href="#">Universities</a></li>
                            <li>
                                <a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-6 col-md-3 col-sm-12">
                        <h6 className="mb-20">Download App</h6>
                        <div className="mt-15">
                            <a className="mr-5" href="#"><img src="assets/imgs/template/icons/app-store.png" alt="joxBox" /></a>
                            <a href="#"><img src="assets/imgs/template/icons/android.png" alt="joxBox" /></a></div>
                    </div>
                </div>
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-6"><span className="font-xs color-text-paragraph">Copyright © 2024. hibretOne all right reserved</span></div>
                        <div className="col-md-6 text-md-end text-start">
                            <div className="footer-social">
                                <a className="font-xs color-text-paragraph" href="#">Privacy Policy</a>
                                <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">Terms &amp; Conditions</a>
                                <a className="font-xs color-text-paragraph" href="#">Security</a></div>
                        </div>
                    </div>
                </div>

            </div>
        <div className="footer-hero"></div>
        </footer>

    );
};

export default Footer;
