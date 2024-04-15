
import { Grid } from '@mui/material';

export default function EntrepreneurAcademyCounter() {
    return (
        <>
            <section className="section-box">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{ minWidth: '100%' }}
                            sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                            <Grid item lg={12}>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="text-center">
                                                <h2 className="color-brand-2 color-background-1">
                                                    <span className="counter">
                                                    60,000+
                                                    </span>
                                                </h2>
                                                <span className="countertext">Free vocational & professional courses </span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="text-center">
                                                <h2 className="color-brand-2 color-background-2">
                                                    <span className="counter">
                                                    10,000+
                                                    </span>
                                                </h2>
                                                <span className="countertext">Learners & aspirers every month </span>

                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="text-center">
                                                <h2 className="color-brand-2 color-background-3">
                                                    <span className="counter">
                                                       220+
                                                    </span>
                                                </h2>
                                                <span className="countertext">Academy content providers </span>

                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="text-center">
                                                <h2 className="color-brand-2 color-background-4">
                                                    <span className="counter">
                                                    £7.3m+
                                                    </span>
                                                </h2>
                                                <span className="countertext">Directed to learners attending the courses</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                                        </div>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>

                        <Grid container alignItems="center" style={{ minWidth: '100%' }}
                            sx={{ display: { xs: 'flex', md: "flex", lg: 'none' } }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" style={{marginTop:'20px'}}>
                                        <div className="text-center">
                                            <h2 className="color-brand-2 color-background-1">
                                                <span className="counter">
                                                60,000+
                                                </span>
                                            </h2>
                                            <span className="countertext">Grants directed to founders, pro-bono </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" style={{marginTop:'20px'}}>
                                        <div className="text-center">
                                            <h2 className="color-brand-2 color-background-2">
                                                <span className="counter">
                                                10,000+
                                                </span>
                                            </h2>
                                            <span className="countertext">Users facilitated and guided every month </span>

                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" style={{marginTop:'20px'}}>
                                        <div className="text-center">
                                            <h2 className="color-brand-2 color-background-3">
                                                <span className="counter">
                                                220+
                                                </span>
                                            </h2>
                                            <span className="countertext">Socio-economic impact of our pilot </span>

                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" style={{marginTop:'20px'}}>
                                        <div className="text-center">
                                            <h2 className="color-brand-2 color-background-4">
                                                <span className="counter">
                                                £7.3m+
                                                </span>
                                            </h2>
                                            <span className="countertext">Business support interventions </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
}