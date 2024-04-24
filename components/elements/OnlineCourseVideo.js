import React, { useState } from "react";
import { Grid } from "@mui/material";

export default function OnlineCourseVideo() {
    const [showMore1, setShowMore1] = useState(false);
    return (
        <div className="post-loop-grid">
            <div className="container">
                <Grid
                    container
                    alignItems="center"
                    style={{ minWidth: "100%" }}
                    sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                >
                    <Grid item lg={6}>
                        <div className="about__thumb-wrapper d-sm-flex p-relative">
                            <div className="about__thumb-left">
                                <img
                                    className="online-video-section-image-one"
                                    src="../assets/imgs/page/online-courses/image2.jpg"
                                    alt=""
                                />
                                <img
                                    className="online-video-section-image-two"
                                    src="../assets/imgs/page/online-courses/image8.jpeg"
                                    alt=""
                                />

                                <div
                                    className="about__thumb-1 text-end"
                                    style={{
                                        marginTop: "8px",
                                        marginLeft: "160px",
                                        height: "100px",
                                        width: "280px",
                                    }}
                                >
                                    <iframe
                                        className="online-video-section-video"
                                        width="560"
                                        height="240"
                                        src="https://www.youtube.com/embed/XPf1kLnJpio"
                                        frameborder="0"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <div
                                    style={{
                                        marginTop: "-100px",
                                    }}
                                >
                                    <img
                                        className="online-video-section-image-four"
                                        src="../assets/imgs/page/online-courses/image5.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    className="online-video-section-image-three"
                                    src="../assets/imgs/page/online-courses/image3.jpg"
                                    alt=""
                                />

                                <img
                                    className="online-video-section-image-five"
                                    src="../assets/imgs/page/online-courses/image2.jpg"
                                    alt=""
                                />

                                <img
                                    className="online-video-section-image-six"
                                    src="../assets/imgs/page/online-courses/image6.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        className=""
                        lg={6}
                        sx={{ paddingLeft: { lg: "75px" } }}
                    >
                        <h3 className="video-online-course-title" style={{ fontSize: "36px !important"}}>
                            Fail-forward into Success
                        </h3>
                        <div>
                            <p className="color-text-paragraph color-text-content-job-connect mt-20 justify-content">
                            hibretOne is all about everyone succeeding, even when wefail we have failed in achieving our original goal.
                            By providing free online vocational and professional courses, hibretOne provides a soft-landing for not-yet-ready 
                            entrepreneurs. 
                            </p>

                            <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                {showMore1
                                    ? "Learning a new skill when combined with your learnings from entrepreneurship can make you more employable. Education underpins all social progress. Our aim is to harness technology to make all education and skills training available to anyone, anywhere for free"
                                    : "Learning a new skill when combined with your learnings from entrepreneurship can make you more employable. Education underpins all social progress. Our aim is to harness technology to make all education and skills "}
                                {showMore1 && (
                                    <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                                       If yor require proof of learning, certificates can be purchased  from our respected learning partners.
                                        <button
                                            className="btn-show-more"
                                            onClick={() =>
                                                setShowMore1(!showMore1)
                                            }
                                        >
                                            {showMore1
                                                ? "show less"
                                                : "...more"}
                                        </button>
                                    </p>
                                )}
                                {!showMore1 && (
                                    <button
                                        className="btn-show-more"
                                        onClick={() => setShowMore1(!showMore1)}
                                    >
                                        {showMore1 ? "show less" : "...more"}
                                    </button>
                                )}
                            </p>
                        </div>
                        <div className="mt-40">
                            <button href="" className="btn btn-default fs-6">
                                Start Learning
                            </button>
                        </div>
                    </Grid>
                </Grid>

                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    style={{ minWidth: "100%", margin: "auto" }}
                    sx={{ display: { xs: "none", md: "flex", lg: "none" } }}
                >
                    <Grid item xs={12} md={12}>
                     
                        <h3 className="section-title selection-online-courses mb-10"  style={{ fontSize: "30px !important" }}>
                            Fail-forward into Success
                        </h3>
               
                    </Grid>
                    <Grid item xs={12} md={12} style={{ marginTop: "50px" }}>
                        <div className="about__thumb-wrappe d-sm-flex p-relative">
                            <div className="about__thumb-left images-section">
                                <div>
                                    <img
                                        className="online-video-section-image-one"
                                        src="../assets/imgs/page/online-courses/image2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="about__thumb-2 text-end">
                                    <img
                                        className="online-video-section-image-two"
                                        src="../assets/imgs/page/online-courses/image8.jpeg"
                                        alt=""
                                    />
                                </div>
                                <div
                                  className="video-online-courses"
                                    style={{
                                        marginTop: "8px",
                                        marginLeft: "240px",
                                        height: "100px",
                                        width: "240px",
                                    }}
                                >
                                    <iframe
                                      
                                        width="240"
                                        height="215"
                                        src="https://www.youtube.com/embed/XPf1kLnJpio"
                                        frameborder="0"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <div>
                                    <img
                                        className="online-video-section-image-four"
                                        src="../assets/imgs/page/online-courses/image5.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="" style={{}}>
                                <img
                                    className="online-video-section-image-three"
                                    src="../assets/imgs/page/online-courses/image3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="" style={{}}>
                                <img
                                    className="online-video-section-image-five"
                                    src="../assets/imgs/page/online-courses/image2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="" style={{}}>
                                <img
                                    className="online-video-section-image-six"
                                    src="../assets/imgs/page/online-courses/image6.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div>
                        <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                            hibretOne is all about everyone succeeding, even when wefail we have failed in achieving our original goal.
                            By providing free online vocational and professional courses, hibretOne provides a soft-landing for not-yet-ready 
                            entrepreneurs. 
                            </p>

                            <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                            Learning a new skill when combined with your learnings from entrepreneurship can make you more employable. 
                            Education underpins all social progress. Our aim is to harness technology to make all education and skills 
                            training available to anyone, anywhere for free.
                            </p>
                            <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                              If yor require proof of learning, certificates can be purchased  from our respected learning partners.</p>
                        </div>
                        <div className="mt-40">
                            <button href="" className="btn btn-default fs-6">
                                Start Learning
                            </button>
                        </div>
                    </Grid>
                </Grid>

                <Grid
                    container
                    alignItems="center"
                    style={{ minWidth: "100%" }}
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "flex",
                            md: "none",
                            lg: "none",
                        },
                    }}
                >
                    <Grid item xs={12} md={12}>
                        <h3 style={{ fontSize: "24px !important",marginTop:'-30px' }}>
                            Fail-forward into Success
                        </h3>
                    </Grid>
                    <Grid item xs={12} md={12} style={{ marginTop: "30px" }}>
                        <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                            <iframe
                                width=""
                                height="100%"
                                src="https://www.youtube.com/embed/XPf1kLnJpio"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div>
                        <p className="color-text-paragraph color-text-content-job-connect mt-40 justify-content">
                            hibretOne is all about everyone succeeding, even when wefail we have failed in achieving our original goal.
                            By providing free online vocational and professional courses, hibretOne provides a soft-landing for not-yet-ready 
                            entrepreneurs. 
                            </p>

                            <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                            Learning a new skill when combined with your learnings from entrepreneurship can make you more employable. 
                            Education underpins all social progress. Our aim is to harness technology to make all education and skills 
                            training available to anyone, anywhere for free.
                            </p>
                            <p className="color-text-paragraph color-text-content-job-connect mt-30 justify-content">
                              If yor require proof of learning, certificates can be purchased  from our respected learning partners.</p>
                        </div>
                        <div className="mt-40">
                            <button href="" className="btn btn-default fs-6">
                                Start Learning
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

