import React from "react";
import OnlineCourseSearchButton from './OnlineCourseSearchButton';;
import { IoShareSocialOutline } from "react-icons/io5";
import EntrepreneurAcademyCounter from '../../components/elements/EntrepreneurAcademyCounter';


const OnlineCourse = () => {

    return (
        <>

            <section className="section-box">
                <div className="banner-hero1 bg-img-entrepreneur-academy">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <h2 style={{ marginBottom: '20px', fontSize: '60px' }}>Entrepreneur Academy</h2>
                                <p className="sub-heading-text-enacademy">UK’s leading evidence driven online entrepreneurship learning programme.<span className="color-blue">Empowering every aspirer</span> the confidence and opportunity <span className="color-blue">to start a successful enterprise</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mb-25">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-entrepreneur-academy-container">
                                <IoShareSocialOutline className="share-icon-entrepreneur-academy" />
                        </div>
                        <div className="text-center">
                                <EntrepreneurAcademyCounter />
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