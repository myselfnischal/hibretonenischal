import React from "react";
import OnlineCourseSearchButton from '../../components/elements/OnlineCourseSearchButton';;
import { IoShareSocialOutline } from "react-icons/io5";


const OnlineCourse = () => {

    return (
        <>

            <section className="section-box">
                <div className="banner-hero1 bg-img-online-course">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <h2 style={{ marginBottom: '20px', fontSize: '60px' }}>6000+ Free Online Courses</h2>
                                <p className="online-course-text"  style={{ fontSize: '24px', maxWidth: '780px', lineHeight: '30px' }}>We believe <span className="color-blue">empowering yourself & those around you</span>, should be rewarding, free and available whenever you want to learn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mb-25">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-online-course-container">
                                <IoShareSocialOutline className="share-icon-online-course" />
                        </div>
                        <div className="text-center">
                            <h2 className="section-title  text-size-online-course mb-10" style={{fontSize:'36px !important'}}>
                              Upskilling  for Better-paying Careers
                            </h2>
                            <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto"style={{color:'#435579'}}>
                               Creating opportunities through education
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-25 mb-25">
                <div className="container">
                    <div className="banner-hero1">
                        <div className="block-banner1">
                           <OnlineCourseSearchButton />
                       
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OnlineCourse;