import React, { useState, useEffect } from 'react'; // Import useEffect from react
import { Autocomplete, TextField } from "@mui/material";
import BlogSearchBar from '../../components/elements/BlogSearchBar';
import { IoShareSocialOutline } from "react-icons/io5";

const DiscoverButton = () => {
    return (
        <>
            <section className="section-box">
                <label className="headingdivider1"></label>
                <div className="banner-hero1 bg-img-blog">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <h2 style={{ marginBottom: '20px', fontSize: '60px' }}>Blog</h2>
                                <p className="color-text-paragraph-2" style={{ fontSize: '24px', maxWidth: '780px', lineHeight: '30px', paddingTop: '5px' }}>Get the latest news, updates and tips</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mb-15">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-container">
                            <button className="btn-share-search">
                                <IoShareSocialOutline className="share-icon" />
                            </button>
                        </div>
                        <div className="text-center">
                            <h2 className="section-title mb-10">
                                News and Blog
                            </h2>
                            <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                Information provided by hibretOne and our wonderful partners
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-25 mb-25">
                <div className="container">
                    <div className="banner-hero1">
                        <div className="block-banner1">
                            <BlogSearchBar />
                            {/* <JobConnectSearchBox /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiscoverButton;