import Layout from '../../components/Layout/Layout'
import React from 'react'
import dynamic from "next/dynamic";
import YellowBanner from '../../components/elements/YellowBanner';
import { Grid } from '@mui/material';
import KickstartButton from '../../components/elements/KickstartButton';
import Subscription from '../../components/Layout/Subscription';
import ConnectorSearchBar from './ConnectorSearchBar'

const NoSSRCategoryTab = dynamic(
    () => import("../../components/sliders/ReusableCategory"),
    { ssr: false }
);

const NoSSRBrandSlider = dynamic(
    () => import("../../components/sliders/Brand"),
    { ssr: false }
);


function index() {

const location = [

]


const categories = [
  {
      icon: "customer.svg",
      category_name: "Funding & Finance",
      category_id: 1
  },
  {
      icon: "marketing.svg",
      category_name: "Business Advice",
      category_id: 2
  },
  {
      icon: "finance.svg",
      category_name: "Mentoring",
      category_id: 3
  },
  {
      icon: "lightning.svg",
      category_name: "Accelerator & Incubators",
      category_id: 4
  },
  {
      icon: "human.svg",
      category_name: "Business Space",
      category_id: 5
  },
  {
      icon: "management.svg",
      category_name: "Marketing & PR",
      category_id: 6
  },
  {
      icon: "retail.svg",
      category_name: "Education",
      category_id: 7
  },
  {
      icon: "security.svg",
      category_name: "Environmental, Social and Governance (ESG)",
      category_id: 8
  },
  {
      icon: "content.svg",
      category_name: "Business Development",
      category_id: 9
  },
  {
      icon: "research.svg",
      category_name: "Sustainability",
      category_id: 10
  },
  {
      icon: "research.svg",
      category_name: "Climate & Environment",
      category_id: 11
  },
  {
      icon: "research.svg",
      category_name: "Technical",
      category_id: 12
  },
  {
      icon: "research.svg",
      category_name: "Internships & Work Placements",
      category_id: 13
  },
  {
      icon: "research.svg",
      category_name: "Strategy",
      category_id: 14
  },
  {
      icon: "research.svg",
      category_name: "Hiring & Personnel",
      category_id: 15
  },
  {
      icon: "research.svg",
      category_name: "Personal Development",
      category_id: 16
  },
  {
      icon: "research.svg",
      category_name: "Product",
      category_id: 17
  },
  {
      icon: "research.svg",
      category_name: "Customers & Users",
      category_id: 18
  },
  {
      icon: "research.svg",
      category_name: "Research & Development",
      category_id: 19
  },
  {
      icon: "research.svg",
      category_name: "Health & Wellbeing",
      category_id: 20
  },
  {
      icon: "research.svg",
      category_name: "Language",
      category_id: 21
  },
  {
      icon: "research.svg",
      category_name: "Law",
      category_id: 22
  },
  {
      icon: "research.svg",
      category_name: "Academia",
      category_id: 23
  },
  {
      icon: "research.svg",
      category_name: "Voluntary Sector",
      category_id: 24
  },
  {
      icon: "research.svg",
      category_name: "Public Sector",
      category_id: 25
  },
  {
      icon: "research.svg",
      category_name: "Equality, Diversity, Inclusion",
      category_id: 26
  },
  {
      icon: "research.svg",
      category_name: "Enterprise Resource Planning",
      category_id: 27
  },
  {
      icon: "research.svg",
      category_name: "Events",
      category_id: 28
  },
];


  return (
    <Layout>
      <section>
        <div className="banner-hero bg-img-assessment">
            <div className="container d-flex align-items-center">
              <div className="row">
                  <div className="col-lg-12">
                    <h2 className="mb-20 ml-20">Ecosystem Connector</h2>
                    <p className="ml-20">Sharing social capital by connecting aspirers, entrepreneurs, business founders,<br />startups and scaleups to business support</p>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <section className="section-box mt-50">
        <div className="container">
            <div className="list-brands">
                <div className="box-swiper">
                    <div className=" text-center mb-30">
                        <h2>Connect with Expert Advice & Support</h2>
                        <p className="mt-10">Explore the support you need whenever you need it</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className='container'>
            <ConnectorSearchBar />
        </div>
      </section>
      <section className='section-box mt-75 mb-75'>
        <YellowBanner />
      </section>
      <section className="section-box">
        <div className="container">
            <div className="list-brands">
                <div className="box-swiper">
                    <div className=" text-center">
                        <h2>A Sample of our Amazing Support Providers</h2>
                        <p className="mt-10">Brilliant support providers available across all business categories</p>
                    </div>
                     <NoSSRBrandSlider />
                    <div className="swiper-button-next swiper-button-margin" />
                    <div className="swiper-button-prev swiper-button-margin" />
                </div>
            </div>
        </div>
      </section>
      <section className="section-box mb-100 mt-100">
         <div className="post-loop-grid">
            <div className="container">
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                     <Grid item lg={6}>
                      <iframe className='content-media' width="1000" height="500" src="https://www.youtube.com/embed/xSaggc-qxn0?si=5GExD99pRLDqjIva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     </Grid>
                     <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>

                     <h3 className='mt-20'>hibretOne Preferred Provider</h3>
                     <div className="mt-10">
                        <p className="mt-20">Our Ecosystem Connector enables a new entrepreneur, or someone new to the region to connect with the most respected support in a region, at the touch of a button. Our Preferred Providers have been carefully curated to be helpful and to be able to add value to any startup, or  scaling business.</p>
                        <p className="mt-20">We also understand for the best ideas to flow and for optimum problem solving, the people you work with should not look like you, sound like you, or be educated like you. Cultivating new ideas brings financial gain, as company boards which include a woman are 15% more likely and ethnic minorities  are 35% more likely to see their profits in the top quarter.</p>
                        <p className="mt-20">So speak to a couple of our Recommended Support Providers, your business will be glad you did.</p>
                     </div>
                     <div className="mt-20 mb-30">
                        <button className="btn btn-default">Start Connecting</button>
                     </div>
                     </Grid>
               </Grid>
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                     <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                     <h3>hibretOne Preferred Provider</h3>
                     </Grid>
                     <Grid item xs={12} md={12}>
                     <div className="sm_img_container w-img fix grid_thumb_height">
                        <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                     </div></Grid>
                     <Grid item xs={12} md={12}>
                     <div className="mt-10">
                        <p className="mt-10">Our Ecosystem Connector enables a new entrepreneur, or someone new to the region to connect with the most respected support in a region, at the touch of a button. Our Preferred Providers have been carefully curated to be helpful and to be able to add value to any startup, or  scaling business.</p>
                        <p className=" mt-10">We also understand for the best ideas to flow and for optimum problem solving, the people you work with should not look like you, sound like you, or be educated like you. Cultivating new ideas brings financial gain, as company boards which include a woman are 15% more likely and ethnic minorities  are 35% more likely to see their profits in the top quarter.</p>
                        <p className="mt-10">So speak to a couple of our Recommended Support Providers, your business will be glad you did.</p>
                     </div>
                        <div className="mt-20 mb-30">
                           <button className="btn btn-default fs-6">Start Connecting</button>
                        </div>
                     </Grid>
               </Grid>
            </div>
         </div>
      </section>
      <section className='section-box'>
        <div className='container'>
          <div className="box-swiper grant-category">
            <div className=" text-center">
                <h2>Browse By Support Topic</h2>
                <p className="mt-10 mb-50">Popular areas of support andadvice entrepreneurs are seeking</p>
            </div>
            <div>
                <NoSSRCategoryTab categories={categories.slice(0,Math.ceil(categories.length / 2))} />
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
                <NoSSRCategoryTab categories={categories.slice(Math.ceil(categories.length/2),categories.length)} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-box mt-75">
         <div className="post-loop-grid">
            <div className="container">
               <Grid container className='mb-50' alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                     <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                     <h3 className="mt-20">Possibly Great Support</h3>
                     <div className="mt-10">
                        <p className="mt-20">Fantastic new businesses are starting every day. But it’s hard to know which give great service and which will be gone within the year, leaving behind a trail of destruction. So the Alternative Providers list, generated by AI, may be  what you need, or they may be an unmitigated disaster. All the risk is on you.</p>
                        <p className="mt-20">So we suggest using our Recommended Support providers, as we have done some preliminary vetting, with many we have used ourselves providing high-quality support</p>
                        <p className='mt-20'>If you do find someone or an organisation that is brilliant, by all means ask them to apply to become one of our preferred support providers. Their business will thank you for it.</p>
                     </div>
                     <div className="mt-20 mb-30">
                        <button className="btn btn-default">Connect to Support</button>
                     </div>
                     </Grid>
                     <Grid item lg={6}>
                        <img className="content-media" src="assets/imgs/page/ecosystem-connector/1.png" alt="joxBox" />
                     </Grid>
               </Grid>
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                     <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                        <h3>Possibly Great Support</h3>
                     </Grid>
                     <Grid item lg={6}>
                      <div>
                        <img className="content-media" src="assets/imgs/page/ecosystem-connector/1.png" alt="joxBox" />
                      </div>
                      </Grid>
                     <Grid item xs={12} md={12}>
                        <div className="mt-10">
                           <p className="mt-10">Fantastic new businesses are starting every day. But it’s hard to know which give great service and which will be gone within the year, leaving behind a trail of destruction. So the Alternative Providers list, generated by AI, may be  what you need, or they may be an unmitigated disaster. All the risk is on you. </p>
                        <p className="mt-20">So we suggest using our Recommended Support providers, as we have done some preliminary vetting, with many we have used ourselves providing high-quality support</p>
                        <p className='mt-20'>If you do find someone or an organisation that is brilliant, by all means ask them to apply to become one of our preferred support providers. Their business will thank you for it.</p>
                        </div>
                        <div className="mt-20 mb-30">
                           <button className="btn btn-default fs-6">Connect to Support</button>
                        </div>
                     </Grid>
               </Grid>
            </div>
         </div>
      </section>
      <section className="section-box mt-70 mb-100">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                      How It Works?
                  </h2>
                  <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                      3 Simple steps to find the ecosystem support you need
                  </p>
              </div>
              <div className="mt-70">
                  <div className="row">
                      <div className="col-lg-4">
                          <div className="box-step step-1">
                              <h1 className="number-element">
                                  1
                              </h1>
                              <h4 className="mb-20">
                                  Enter the support you need and
                                  <br className="d-none d-lg-block" />
                                  the area you are based
                              </h4>
                              <p className="font-lg color-text-paragraph-2">
                                  Whatever the subject we are your
                                  <br className="d-none d-lg-block" />
                                  social capital connecting you with
                                  <br className="d-none d-lg-block" />
                                  support throughout the UK
                              </p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="box-step step-2">
                              <h1 className="number-element">
                                  2
                              </h1>
                              <h4 className="mb-20">
                                  We'll find the best support
                                  <br className="d-none d-lg-block" />
                                  wherever they are
                              </h4>
                              <p className="font-lg color-text-paragraph-2">
                                  From our database of amazing
                                  <br className="d-none d-lg-block" />
                                  providers and AI generated support,
                                  <br className="d-none d-lg-block" />
                                  we match your requirements

                              </p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="box-step">
                              <h1 className="number-element">
                                  3
                              </h1>
                              <h4 className="mb-20">
                                  Select the most
                                  <br className="d-none d-lg-block" />
                                  suitable support
                              </h4>
                              <p className="font-lg color-text-paragraph-2">
                                  We will email the provider on your
                                  <br className="d-none d-lg-block" />
                                  behalf, as well ad supplying you
                                  <br className="d-none d-lg-block" />
                                  with their contact details
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mt-50 text-center">
                  <a className="btn btn-default">Get Started</a>
              </div>
          </div>
      </section>
      <KickstartButton />
      <Subscription />
    </Layout>
  )
}

export default index
