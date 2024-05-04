import React, { useState } from "react";
import IndustryIntelligenceGenerateBox from '../../components/elements/IndustryIntelligenceGenerateBox';
import IndustryIntelligenceTopBusinessIdea from '../../components/elements/IndustryIntelligenceTopBusinessIdea';

import { IoShareSocialOutline } from "react-icons/io5";
import NewCareerGuide from "./NewCareerGuide";


const DiscoverButton = () => {

    const [showIndustryComponent, setShowIndustryComponent] = useState(true);
    const [showBusinessComponent, setShowBusinessComponent] = useState(false);
    const [showNewCareerComponent,setShowNewCareerComponent] = useState(false);
    const [industryButtonClass, setIndustryButtonClass] = useState('btn btn-discover-intelligence fs-6');
    const [businessButtonClass, setBusinessButtonClass] = useState('btn btn-discover-ideas fs-6');
    const [newCareerbuttonClass,setNewCareerButtonClass] = useState('btn btn-new-career-guide fs-6');

    const handleIndustryClick = () => {
        setShowIndustryComponent(true);
        setShowBusinessComponent(false);
        setShowNewCareerComponent(false);
        setIndustryButtonClass('btn btn-discover-intelligence fs-6');
        setBusinessButtonClass('btn btn-discover-ideas fs-6');
        setNewCareerButtonClass('btn btn-new-career-guide fs-6');
    };

    const handleBusinessClick = () => {
        setShowBusinessComponent(true);
        setShowIndustryComponent(false);
        setShowNewCareerComponent(false);
        setIndustryButtonClass('btn btn-discover-ideas fs-6');
        setBusinessButtonClass('btn btn-discover-intelligence fs-6');
        setNewCareerButtonClass('btn btn-new-career-guide fs-6');
    };
    const handlenewCareerClick = () => {
        setShowNewCareerComponent(true);
        setShowIndustryComponent(false);
        setShowBusinessComponent(false);
        setNewCareerButtonClass('btn btn-discover-intelligence fs-6');
        setIndustryButtonClass('btn btn-new-career-guide fs-6'); 
        setBusinessButtonClass('btn btn-discover-ideas fs-6');
    };
    



    return (
        <>

            <section className="section-box">
                <label className="headingdivider1"></label>
                <div className="banner-hero1 bg-img-laptop">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <h2>Industry Intelligence</h2>
                                <p className="industry-intelligence-sub-text">Create bespoke <span className="color-blue"> Market Sector Guides, New Occupation Guides </span> and get <span className="color-blue"> inspiration </span> for your chosen <span className="color-blue">idea</span>, market, or career</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-25 mb-25">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-industry-intelligence-container">
          
                                <IoShareSocialOutline className="share-icon-industry-intelligence" />
                
                        </div>
                        <div className="text-center">
                            <h2 className="section-title text-size mb-10">
                                Research your Market and Occupation
                            </h2>
                            <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto sub-title-text-industry">
                                Easily search your market or business idea
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-25 mb-25">
                <div className="container">
                    <div className="text-center1">
                        <button
                            className={`buttondiscover ${industryButtonClass}`}
                            style={{ padding: '21px 0px', width: '100%', }}
                            onClick={handleIndustryClick}
                        >
                          Explore a Market Sector 
                        </button>
                        <button
                            className={`buttondiscover1 ${newCareerbuttonClass}`}
                            style={{ padding: '21px 0px', width: '100%', }}
                            onClick={handlenewCareerClick}
                        >
                            Discover a New Career
                        </button>

                        <button
                            className={`buttondiscover1 ${businessButtonClass}`}
                            style={{ padding: '21px 0px', width: '100%', }}
                            onClick={handleBusinessClick}
                        >
                         Discover Top Business Ideas
                        </button>
                    </div>
                </div>
            </section>

            <section className="section-box  mt-25 mb-25">
                <div className="container">
                    <div className="banner-hero1">
                        <div className="block-banner1">
                        {showIndustryComponent && <IndustryIntelligenceGenerateBox />}
                        {showBusinessComponent && <IndustryIntelligenceTopBusinessIdea />}
                        {showNewCareerComponent && <NewCareerGuide />}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiscoverButton;