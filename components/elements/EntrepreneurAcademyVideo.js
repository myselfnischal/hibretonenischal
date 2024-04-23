import React, { useState } from "react";
import { Grid } from "@mui/material";

const handleClick = () => {
  const url = '/entrepreneur-academy/accelerator-programme-courses';
  window.open(url, '_blank');
};


export default function EntrepreneurAcademyVideo() {
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
                        Accelerating Your Success
                        </h3>
                        <div>
                            <p className="mt-20 justify-content" style={{color:'#6C6E70'}}>
                            The Entrepreneur Accelerator is a 20
                            course programme and the most popular 
                            learning programme within the Entrepreneur Academy. 
                            </p>
                            <p className="mt-30 justify-content" style={{color:'#6C6E70'}}>
                            90% of entrepreneurs fail within 12 months. Research conducted
                            by NatWest show 82% of entrepreneurs who have completed an in-person
                          Accelerator are still in business 3 years on. The power of Accelerators 
                            to improve startup success is proven and why every entrepreneur wishing 
                            to start a successful business is incentivised to complete the programme.
                            </p>
                            <p className="mt-30 justify-content"style={{color:'#6C6E70'}}>
                            The hibretOne Accelerator gets you prepared and when completed,
                            provides an overview of the key elements to start an enterprise.
                            finger-tips.
                              </p>
                        </div>
                        <div className="mt-40">
                            <button href="" className="btn btn-default fs-6" onClick={handleClick}>
                            Get Started
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
                        Accelerating Your Success
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
                        <p className="mt-20 justify-content" style={{color:'#6C6E70'}}>
                            The Entrepreneur Accelerator is a 20
                            course programme and the most popular 
                            learning programme within the Entrepreneur Academy. 
                            </p>
                            <p className="mt-30 justify-content" style={{color:'#6C6E70'}}>
                            90% of entrepreneurs fail within 12 months. Research conducted
                            by NatWest show 82% of entrepreneurs who have completed an in-person
                          Accelerator are still in business 3 years on. The power of Accelerators 
                            to improve startup success is proven and why every entrepreneur wishing 
                            to start a successful business is incentivised to complete the programme.
                            </p>
                            <p className="mt-30 justify-content"style={{color:'#6C6E70'}}>
                            The hibretOne Accelerator gets you prepared and when completed,
                            provides an overview of the key elements to start an enterprise.
                            finger-tips.
                              </p>
                        </div>
                        <div className="mt-40">
                        <button href="" className="btn btn-default fs-6" onClick={handleClick}>
                                Get Started
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
                        <h3 style={{ fontSize: "24px !important" }}>
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
                        <p className="mt-20 justify-content" style={{color:'#6C6E70'}}>
                            The Entrepreneur Accelerator is a 20
                            course programme and the most popular 
                            learning programme within the Entrepreneur Academy. 
                            </p>
                            <p className="mt-30 justify-content" style={{color:'#6C6E70'}}>
                            90% of entrepreneurs fail within 12 months. Research conducted
                            by NatWest show 82% of entrepreneurs who have completed an in-person
                          Accelerator are still in business 3 years on. The power of Accelerators 
                            to improve startup success is proven and why every entrepreneur wishing 
                            to start a successful business is incentivised to complete the programme.
                            </p>
                            <p className="mt-30 justify-content"style={{color:'#6C6E70'}}>
                            The hibretOne Accelerator gets you prepared and when completed,
                            provides an overview of the key elements to start an enterprise.
                            finger-tips.
                              </p>
                        </div>
                        <div className="mt-40">
                            <button href="" className="btn btn-default fs-6" onClick={handleClick}>
                                Get Started
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

