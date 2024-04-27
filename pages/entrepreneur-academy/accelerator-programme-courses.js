/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import EntrepreneurAcceleratorProgramme from "../../components/elements/EntrepreneurAcceleratorProgramme";
import dynamic from "next/dynamic";


const AcceleratorProgrammes = dynamic(
    () => import("../../components/elements/EntrepreneurAcceleratorProgrammeCourses"),
    { ssr: false }
  );

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


export default function AcceleratorProgrammeCourses() {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return (
    <>
      <Layout>
        <div className="background-random-entrepreneur-academy mb-25">
        < EntrepreneurAcceleratorProgramme />
        
        <section className="section-box mt-25 mb-25">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title text-size-popular-entrepreneur-academy mb-10">
                                    Entrepreneur Accelerator Programme 
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto" style={{color:'#435579'}}>
                                    20 comprehensive courses, to kickstart a successful enterprise
                                    </p>
                                </div>
                                        <AcceleratorProgrammes />
                              
                            </div>
                        </div>
                    </section>


                    <div className="col d-flex justify-content-center align-items-center mt-25">
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
                  