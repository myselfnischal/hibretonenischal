/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import OnlineCourse from "../../components/elements/OnlineCourse";
import dynamic from "next/dynamic";
import OnlineCourseVideo from '../../components/elements/OnlineCourseVideo';

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
const OnlineCourseOne = dynamic(
  () => import("../../components/sliders/OnlineCourse1"),
  { ssr: false }
);
const OnlineCourseTwo = dynamic(
  () => import("../../components/sliders/OnlineCourse2"),
  { ssr: false }
)
const PopularCourse = dynamic(
  () => import("../../components/elements/PopularCourse"),
  { ssr: false }
);

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return (
    <>
      <Layout>
        <div className="background-random-online-course mb-25">
          <OnlineCourse />
          <section className="section-box mt-25 mb-25">
            <YellowBanner />
          </section>
          <section className="section-box mt-25 mb-25">
        < OnlineCourseVideo />
        </section>
          <section className="section-box mt-50 mb-25">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title exlpore-online-course mb-10">
                                    Explore our Course Categories
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto" style={{color:'#435579'}}>
                                    New courses added every week
                                    </p>
                                </div>
                                <div className="box-swiper mt-50 grant-category">
                                    <div>
                                        <OnlineCourseOne />
                                        <OnlineCourseTwo />
                                        <div className="swiper-button-next" style={{marginTop:'-10px'}} />
                                        <div className="swiper-button-prev" />
                             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 

          <section className="section-box mb-25" style={{marginTop:'-30px'}}>
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title selection-online-courses mb-10">
                                   Selection of Popular Courses
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto" style={{color:'#435579'}}>
                                   Advance your career, learn in-demand skills
                                    </p>
                                </div>
                                <div className="box-swiper mt-50 grant-category">
                                    <div>
                                        <PopularCourse />
                                        <div className="swiper-button-next" style={{marginTop:'400px !important'}} />
                                        <div className="swiper-button-prev" style={{marginTop:'400px !important'}}/>
                                    </div>
                                  
                                </div>
                                  <div className="col d-flex justify-content-center align-items-center mt-35">
                        <button href="" className="btn btn-default fs-6">
                          Start Learning
                          </button>
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
                  