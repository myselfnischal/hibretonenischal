import { Grid } from '@mui/material';
import Link from "next/link";

export default function EntrepreneurAcademyVideo() {
    return (
        <section className="section-box mt-40">
            <div className="post-loop-grid">
                <div className="container">
                <section className="section-box">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            md: "none",
                                            lg: "flex",
                                        },
                                    }}
                                >
                                    <Grid item lg={6}>
                                        <iframe
                                            className="content-media"
                                            width="663"
                                            height="504"
                                            src="https://www.youtube.com/embed/vmUaZtrwAq8"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen
                                        ></iframe>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <h3 style={{ fontSize: '36px !important' }}>Channel Partners</h3>
                                        <div style={{ textAlign: 'justify',marginTop:'27px !important'}}>
                      <p className=" mt-27" style={{ color: "#6C6E70" }}>
                      Complete the courses and pass the quizzes to receive incentives to learning from our brilliant partners.
                       Earn a ticket to Sea World, Madame Tussauds, Alton Towers and many other attractions from Merlin Entertainment.
                        Earn tasty macaroons  from Ms Macaroon, a burger from McDonalds, some stationery from Rymans, even some time with a life coach.
                         hibretOne with our fantastic partners aims to incentivise your learning to support your success.

                      </p>
                              
                      <p className=" mt-10" style={{ color: "#6C6E70" }}>
                      Upgrade or you can buy other products and service from our partners at a discount. 
                      So you can enjoy the experience with other family members, or anyone you want to spend time with.
                      </p>
    </div>
                 <div className="mt-20 mb-30">
                      <button href="" className="btn btn-default fs-6">
                      Find a Bursary
                      </button>
                      </div>
                                        
                                    </Grid>
                                </Grid>
                                <Grid
  container
  alignItems="center"
  style={{ minWidth: '100%' }}
  sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' } }}
>
  <Grid item xs={12} md={12}>
    <h3 style={{ fontSize: '26px !important' }}>Preferred Partners</h3>
  </Grid>
  <Grid item xs={12} md={12} style={{ marginTop: '20px' }}>
  <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                <iframe width="" height="100%" src="https://www.youtube.com/embed/vmUaZtrwAq8" frameborder="0" allowfullscreen></iframe>
                            </div>
  </Grid>
  <Grid item xs={12} md={12} style={{marginTop:'20px '}}>
  <div style={{ textAlign: 'justify'}}>
  <p  style={{ color: "#6C6E70" }}>
                      Complete the courses and pass the quizzes to receive incentives to learning from our brilliant partners.
                       Earn a ticket to Sea World, Madame Tussauds, Alton Towers and many other attractions from Merlin Entertainment.
                        Earn tasty macaroons  from Ms Macaroon, a burger from McDonalds, some stationery from Rymans, even some time with a life coach.
                         hibretOne with our fantastic partners aims to incentivise your learning to support your success.

                      </p>
                              
                      <p style={{ color: "#6C6E70" }}>
                      Upgrade or you can buy other products and service from our partners at a discount. 
                      So you can enjoy the experience with other family members, or anyone you want to spend time with.
                      </p>
    </div>
                 <div className="mt-20 mb-30">
                      <button href="" className="btn btn-default fs-6">
                      Find a Bursary
                      </button>
    </div>
  </Grid>
  </Grid>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}