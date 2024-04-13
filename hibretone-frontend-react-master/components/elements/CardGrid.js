import React, { useState } from "react";
import Link from "next/link";

const CardGrid = () => {
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
                                        <span className="lbl-hot btn btn-tag color-1">Strategic</span>
                                        {show1 && (
                                                <div className="overlay">
                                                    <p>Impact on business model, sales, marketing, positioning, scaling, product and development.</p>
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
                                        <span className="lbl-hot btn btn-tag color-3">People</span>
                                            {show2 && (
                                                <div className="overlay">
                                                    <p>Value of having the right team, organisational structure, co-founders, experience and vision.</p>
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
                                        <span className="lbl-hot btn btn-tag color-2">Environment</span>
                                            {show3 && (
                                                <div className="overlay">
                                                    <p>Importance of navigating competition, marketplace, legals, economy, politics and society.</p>
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
                                        <span className="lbl-hot btn btn-tag color-2">Product</span>
                                            {show4 && (
                                                <div className="overlay">
                                                    <p>Product focus, feasibility, sustainability, quality and viability of the product.</p>
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
                                        <span className="lbl-hot btn btn-tag color-1">Customer or User</span>
                                            {show5 && (
                                                <div className="overlay">
                                                    <p>Traction, lack of customers, unfaithful customers and customer acquisition.</p>
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
                                        <span className="lbl-hot btn btn-tag color-3">Finance</span>
                                            {show6 && (
                                                <div className="overlay">
                                                    <p>Management of a startups cash, funding pipeline, accounting, banking and investability.</p>
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

export default CardGrid;
