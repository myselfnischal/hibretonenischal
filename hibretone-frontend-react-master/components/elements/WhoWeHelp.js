import React, { useState } from "react";
import Link from "next/link";

const WhoWeHelp = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);


    const showOverlay1 = () => {
        setShow1(true);
    };

    const hideOverlay1 = () => {
        setShow1(false);
    };

    const showOverlay2 = () => {
        setShow2(true);
    };

    const hideOverlay2 = () => {
        setShow2(false);
    };

    const showOverlay3 = () => {
        setShow3(true);
    };

    const hideOverlay3 = () => {
        setShow3(false);
    };

    const showOverlay4 = () => {
        setShow4(true);
    };

    const hideOverlay4 = () => {
        setShow4(false);
    };

    const showOverlay5 = () => {
        setShow5(true);
    };

    const hideOverlay5 = () => {
        setShow5(false);
    };

    const showOverlay6 = () => {
        setShow6(true);
    };

    const hideOverlay6 = () => {
        setShow6(false);
    };

    return (
        <>
            <div className="container">
                <div className="row mt-50">

                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseEnter={showOverlay1} onMouseLeave={hideOverlay1} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/1.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-1">Entrepreneurs</span>
                                        {show1 && (
                                                <div className="overlay">
                                                    <p>Specialist connected support bringing ideas to life, for commercial and social enterprises across all market sectors and growth stages. </p>
                                                </div>
                                        )}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseOver={showOverlay2} onMouseLeave={hideOverlay2} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/2.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-3">Underrepresented</span>
                                            {show2 && (
                                                <div className="overlay">
                                                    <p>Levelling-up women, Black & ethnic minorities, dyslexics, migrants, ex-offenders, ex-service personnel, disabled and overlooked groups. </p>
                                                </div>
                                            )}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseOver={showOverlay3} onMouseLeave={hideOverlay3} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/3.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-2">Startups and Scaleups</span>
                                            {show3 && (
                                                <div className="overlay">
                                                    <p>A lifetime of free first-line business and learning support, using proven business strategies to deliver growth and scale throughout the ecosystem. </p>
                                                </div>
                                            )}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseOver={showOverlay4} onMouseLeave={hideOverlay4} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/4.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-2">Aspirers</span>
                                            {show4 && (
                                                <div className="overlay">
                                                    <p>Empowering aspiring entrepreneurs from all backgrounds, to start an enterprise, whilst upskilling not-yet-ready entrepreneurs into better-paid employment. </p>
                                                </div>
                                            )}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseOver={showOverlay5} onMouseLeave={hideOverlay5} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/5.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-1">Marginalised Communities</span>
                                            {show5 && (
                                                <div className="overlay">
                                                    <p>Delivering investment in the community from residents living in that community, supporting pride in place, in people and in planet. </p>
                                                </div>
                                            )}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseOver={showOverlay6} onMouseLeave={hideOverlay6} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/6.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-3">Low-income Earners</span>
                                            {show6 && (
                                                <div className="overlay">
                                                    <p>Empowering financially excluded low-income earners, a safe-space to invest in startups & their local communities at low to no-risk.</p>
                                                </div>
                                            )}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
};

export default WhoWeHelp;