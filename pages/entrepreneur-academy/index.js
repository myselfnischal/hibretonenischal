/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import EntrepreneurAcademy from "../../components/elements/EntrepreneurAcademy";
import EntrepreneurAcademyVideo from "../../components/elements/EntrepreneurAcademyVideo";
import EntrepreneurAcademyPatners from '../../components/elements/EntrepreneurAcademyPatners';

import dynamic from "next/dynamic";


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

const PopularAcceleratorLessonOne = dynamic(
  () => import("../../components/elements/PopularAcceleratorLesson1"),
  { ssr: false }
);
const PopularAcceleratorLessonTwo = dynamic(
  () => import("../../components/elements/PopularAcceleratorLesson2"),
  { ssr: false }
);
const NoSSRBrandSlider = dynamic(
  () => import("../../components/sliders/Brand"),
  { ssr: false }
);

const NoSSRTestimonialSliderEntrepreneurAcademy = dynamic(
  () => import("../../components/sliders/TestimoniaEntrepreneurAcademy"),
  { ssr: false }
);

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return (
    <>
      <Layout>



        
        <div className="background-random-entrepreneur-academy mb-25">
        < EntrepreneurAcademy />
          <section className="section-box mt-40 mb-25">
            <YellowBanner />
          </section>
       
          <section className="section-box mt-50 mb-25">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10" style={{fontSize:'36px !important'}}>
                                    Entrepreneur Accelerator
                                    </h2>
                                </div>
                                    < EntrepreneurAcademyVideo />
                                
                                </div>
                            
                        </div>
                    </section>

    
                    <section className="section-box mt-75 mb-25">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10" style={{fontSize:'36px !important'}}>
                                    Most Popular Accelerator Lessons
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto" style={{color:'#435579'}}>
                                    Byte-sized entrepreneur learning
                                    </p>
                                </div>
                                <div className="box-swiper mt-50 grant-category">
                                    <div>
                                        <PopularAcceleratorLessonOne />
                                        <PopularAcceleratorLessonTwo />
                                    </div>
                                  
                                </div>
                                  <div className="col d-flex justify-content-center align-items-center mt-35">
                        <button href="" className="btn btn-default fs-6">
                       Get Started
                          </button>
                          </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mb-25">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10" style={{fontSize:'36px !important'}}>
                                    Featured Partners Rewarding Your Learning
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto" style={{color:'#435579'}}>
                                    A selection of our Partners, incentivising your entrepreneurial learning journey.
                                    </p>
                                </div>
                               < EntrepreneurAcademyPatners />
                          
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-65 mb-25">
                    <div className="container">
                            <div className="list-brands mt-40 mb-30">
                                <div className="box-swiper">
                                    <div className="swiper-button-next swiper-button-margin" />
                                    <div className="swiper-button-prev swiper-button-margin" />
                                    <NoSSRBrandSlider />
                                </div>
                            </div>
                        </div>
                        </section>

                        <section className="section-box mt-50">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ fontSize: '36px !important' }}>
                                        Testimonials
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">
                                    Trusted feedback from aspirers attending our programmes 
                                        
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    <NoSSRTestimonialSliderEntrepreneurAcademy />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="col d-flex justify-content-center align-items-center mt-50">
                                    <button className="btn btn-sign-up-inverted fs-6 hover-up font-force-lg">
                                        Subscribe For Full Access
                                    </button>
                                </div>


          <Subscription />
        </div>
      </Layout>
    </>
  );
}
                  