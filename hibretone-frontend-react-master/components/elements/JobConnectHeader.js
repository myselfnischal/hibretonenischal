import React from "react";

const JobConnectHeader = () => {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero bg-img-job-connect">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <h2 className="mb-20 text-main-heading">
                                    Job Connect
                                </h2>
                                <p className="font-lg color-text-paragraph-2 color-text-paragraph-job-connect color-white wow animate__animated animate__fadeInUp">
                                    1000's of job sites searched for that{" "}
                                    <span className="color-blue">
                                        ideal upskilling opportunity
                                    </span>
                                    .<br /> Discover vacancies in your local
                                    area and throughout the UK.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-50">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                            Find the Right opportunity for Your Skills
                        </h2>
                        <p className="font-lg color-text-paragraph-2 color-text-paragraph-job-connect text-center wow animate__animated animate__fadeInUp">
                            Exploit your abilities, skillset and traits
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JobConnectHeader;
