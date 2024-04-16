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
                                            src="https://www.youtube.com/embed/XPf1kLnJpio"
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
                                        <h3 style={{ fontSize: '36px !important' }}>Preferred Partners</h3>
                                        <div className="mt-10">
                                        <p className="" style={{ color: "#6C6E70" }}>
                                 The Entrepreneur Accelerator is a 20
                                course programme and the most popular 
                                learning programme within the Entrepreneur Academy. 
                      </p>
                            
                      <p className=" mt-10" style={{ color: "#6C6E70" }}>
                      90% of entrepreneurs fail within 12 months. Research conducted
                      by NatWest show 82% of entrepreneurs who have completed an in-person
                     Accelerator are still in business 3 years on. The power of Accelerators 
                     to improve startup success is proven and why every entrepreneur wishing 
                     to start a successful business is incentivised to complete the programme.
                      </p>
                              
                      <p className=" mt-10" style={{ color: "#6C6E70" }}>
                      The hibretOne Accelerator gets you prepared and when completed,
                       provides an overview of the key elements to start an enterprise.
                        finger-tips.
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
                                <iframe width="" height="100%" src="https://www.youtube.com/embed/XPf1kLnJpio" frameborder="0" allowfullscreen></iframe>
                            </div>
  </Grid>
  <Grid item xs={12} md={12} style={{ marginTop: '40px' }}>
    <div  style={{ textAlign: 'justify',marginTop:'-20px' }}>
    <p className="" style={{ color: "#6C6E70" }}>
                                 The Entrepreneur Accelerator is a 20
                                course programme and the most popular 
                                learning programme within the Entrepreneur Academy. 
                      </p>
                            
                      <p className=" mt-10" style={{ color: "#6C6E70" }}>
                      90% of entrepreneurs fail within 12 months. Research conducted
                      by NatWest show 82% of entrepreneurs who have completed an in-person
                     Accelerator are still in business 3 years on. The power of Accelerators 
                     to improve startup success is proven and why every entrepreneur wishing 
                     to start a successful business is incentivised to complete the programme.
                      </p>
                              
                      <p className=" mt-10" style={{ color: "#6C6E70" }}>
                      The hibretOne Accelerator gets you prepared and when completed,
                       provides an overview of the key elements to start an enterprise.
                        finger-tips.
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