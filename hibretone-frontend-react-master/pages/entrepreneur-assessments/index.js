import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import QuizModal from './QuizModal/QuizModal';
import axios from 'axios';
import Loading from '../../components/elements/Loading';
import Subscription from '../../components/Layout/Subscription';
import Grid1 from '../../components/elements/Grid1';
import YellowBanner from '../../components/elements/YellowBanner';
import KickstartButton from '../../components/elements/KickstartButton';
import { Grid } from '@mui/material'
import Link from 'next/link';
import axiosFetchWithRetry from '../../components/elements/fetchWithRetry';

function useLockBodyScroll(open) {
   useEffect(() => {
     if (open) {
       // Prevent scrolling on mount
       document.body.style.overflow = 'hidden';
     }
     return () => {
       // Re-enable scrolling when component unmounts
       document.body.style.overflow = 'visible';
     };
   }, [open]); // Empty array ensures effect is only run on mount and unmount
 }

export default function Index() {
  const [open,setOpen] = useState(false)
  const [assessment,setAssessment] = useState({})
  const [data,setData] = useState({})
  const [uizard, setUizard] = useState("")
  const [assessmentTitle, setAssessmentTitle] = useState("")
  const [progress,setProgress] = useState({})
  const [categories, setCategories] = useState([])

  const traits = data.Traits
  const business = data.Business

  useLockBodyScroll(open);


  useEffect(() => {
    const getQuiz = async () => {
      try {
         const response = await axiosFetchWithRetry({
             url: `/assessments/assessments/details`,
             reqOptions: {
                 method: "get",
             },
             timeout: 3000,
             retryCount: 4,
         })
         console.log(response)
         setData(response)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    const getCategory = async () => {
      try {
         const response = await axiosFetchWithRetry({
             url: "/assessments/assessments/categories",
             reqOptions: {
                 method: "get",
             },
             timeout: 2000,
             retryCount: 4,
         })
         setCategories(response)
      } catch (error) {
         console.log("Couldn't retrieve categories: ", error)
      }
    }
    getQuiz();
    getCategory()
  },[])

  const featuresData = [
   {
      id: 1,
      icon_img: <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.6013 2.11585L3.95694 10.3704C-0.0968136 13.0169 -0.0968136 18.94 3.95694 21.5865L16.6013 29.841C18.8697 31.3323 22.6084 31.3323 24.8769 29.841L37.4582 21.5865C41.491 18.94 41.491 13.0379 37.4582 10.3914L24.8769 2.13685C22.6084 0.624568 18.8697 0.624569 16.6013 2.11585Z" stroke="#031220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M7.3176 24.275L7.2966 34.1259C7.2966 36.7934 9.35499 39.6499 11.8755 40.4901L18.5757 42.7165C19.7309 43.0945 21.6423 43.0945 22.8185 42.7165L29.5188 40.4901C32.0392 39.6499 34.0976 36.7934 34.0976 34.1259V24.38" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M40.4408 28.3077V15.7054" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      title: 'Entrepreneurship',
      content: 'Better understand your skills & abilities for starting your own enterprise'
   },
   {
      id: 2,
      icon_img: <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M39.3333 27.9821V4.84788C39.3333 2.54788 37.455 0.84205 35.1742 1.03372H35.0592C31.0342 1.37872 24.92 3.42955 21.5083 5.57622L21.1825 5.78705C20.6267 6.13205 19.7067 6.13205 19.1508 5.78705L18.6717 5.49955C15.26 3.37205 9.165 1.34038 5.14 1.01455C2.85917 0.822883 1 2.54788 1 4.82872V27.9821C1 29.8221 2.495 31.547 4.335 31.777L4.89083 31.8537C9.05 32.4096 15.4708 34.5179 19.1508 36.5304L19.2275 36.5687C19.745 36.8562 20.5692 36.8562 21.0675 36.5687C24.7475 34.537 31.1875 32.4096 35.3658 31.8537L35.9983 31.777C37.8383 31.547 39.3333 29.8221 39.3333 27.9821Z" stroke="#031220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M20.1666 6.41956V35.1696" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M12.0209 12.1696H7.70837" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M13.4584 17.9196H7.70837" stroke="#3D6CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      title: 'Neurodiverse Gifted',
      content: 'Appreciating your neurodiversity traits can benefit starting a business'
   },
   {
      id: 3,
      icon_img: <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M6.7168 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M14.3835 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M22.0501 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M29.7168 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M37.3835 31.4941V18.0775" stroke="#3D6CE7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M41.2168 39.1608H2.88347V33.4108C2.88347 32.3566 3.74597 31.4941 4.80014 31.4941H39.3001C40.3543 31.4941 41.2168 32.3566 41.2168 33.4108V39.1608Z" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M22.7593 1.115L40.0093 8.01495C40.6801 8.28329 41.2168 9.08827 41.2168 9.79744V16.1608C41.2168 17.215 40.3543 18.0775 39.3001 18.0775H4.80014C3.74597 18.0775 2.88347 17.215 2.88347 16.1608V9.79744C2.88347 9.08827 3.42014 8.28329 4.09098 8.01495L21.341 1.115C21.7243 0.961667 22.376 0.961667 22.7593 1.115Z" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M0.966797 39.1608H43.1335" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M22.0501 13.2858C23.6379 13.2858 24.9251 11.9986 24.9251 10.4108C24.9251 8.82295 23.6379 7.53577 22.0501 7.53577C20.4623 7.53577 19.1751 8.82295 19.1751 10.4108C19.1751 11.9986 20.4623 13.2858 22.0501 13.2858Z" stroke="#031220" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      title: 'Enterprise',
      content: 'Is your idea worth turning into a social enterprise or '
   },
]

  const toggleOpen = (assessmentData,assessment) => {
    if (open === false) {
      // Sets the assessment to load into the modal
      setAssessmentTitle(assessment)
      setAssessment(assessmentData)
      setUizard(assessmentData.uizard)
    }
    setOpen(!open);
  }


  return (
    <Layout>
      <section className="slider__area">
         <div className="banner-hero bg-img-assessment">
            <div className="container d-flex align-items-center">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="mb-20 ml-20">Entrepreneurial Assessments</h2>
                     <p className="ml-20">Take these simple diverse tests to understand<br />your skills, traits and abilities to run your own enterprise.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="features__area">
         <div className="container">
            <div className="features__inner">
               <div className="row">
                  {
                     featuresData.map(feature => {
                        return (
                        <div key={feature.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="features__item features__border-right d-sm-flex align-items-startwhite-bg mb-30 pl-25 pr-10">
                              <div className="features__icon mr-10">
                                 {feature.icon_img}
                              </div>
                              <div>
                                 <h3 className="features__title fw-bold">
                                       <a>{feature.title}</a>
                                 </h3>
                                 <p>{feature.content}</p>
                                 <a className="link-btn fw-bold">Learn More <i className="fa-regular fa-arrow-right"></i></a>
                              </div>
                           </div>
                        </div>
                     )})
                  }

               </div>
            </div>
         </div>
      </section>
      <section className="grid__area container pb-70 assessment-container">
         <div className="row">
            <div className="col-xxl-12">
               <div className=" text-center mb-30">
                  <h2>Skills, Personality & Trait Quizzes</h2>
                  <p>Free, scientifically validated entrepreneurial, personality & neurodiversity tests</p>
               </div>
            </div>
            <section className='section-box mb-50'>
               <YellowBanner />
            </section>
            <Grid1 loading={Object.keys(data).length === 0} data={traits} categories={categories} clickAction={toggleOpen} />
            <div className="col-xxl-12">
               <div className=" text-center mt-40 mb-60">
                  <h2>Business Idea Validation</h2>
                  <p>Basic assessment of your idea and business opportunity</p>
               </div>
            </div>
            {<Grid1 loading={Object.keys(data).length === 0} data={business} categories={categories} clickAction={toggleOpen} progress={progress}/>}
         </div>
         <QuizModal onClose={toggleOpen} title={`${assessmentTitle}`} assessment={assessment} uizard={uizard} time={assessment.time} show={open} isLoggedIn={true} />
      </section>
      <section className="section-box">
         <div className="post-loop-grid">
            <div className="container">
               <Grid container className='mb-50' alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                     <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                     <h3 className="mt-5">Recognising Neuro-diversity Talent</h3>
                     <div className="mt-10">
                        <p className="mt-10">Is it ADHD? Or learning disabilities, OCD, or something else? Take these self-tests to learn whether you or your child has signs that resemble one of the related traits and the positive impacts of them.</p>
                     </div>
                     <div className="mt-20 mb-30">
                        <button className="btn btn-default fs-6">Read More</button>
                     </div>
                     </Grid>
                     <Grid item lg={6}>
                        <iframe className="content-media" width="600" height="400" src="https://www.youtube.com/embed/KZaD0hD3mOg?si=5lKeQBnzQRAmPUdf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                     </Grid>
               </Grid>
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                     <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                        <h3>Recognising Neuro-diversity Talent</h3>
                     </Grid>
                     <Grid item xs={12} md={12}>
                     <div className="sm_img_container w-img fix grid_thumb_height shadow">
                        <iframe className="content-media" width="100%" height="100%" src="https://www.youtube.com/embed/KZaD0hD3mOg?si=5lKeQBnzQRAmPUdf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                     </div>
                     </Grid>
                     <Grid item xs={12} md={12}>
                        <div className="mt-10">
                           <p className="mt-10">Is it ADHD? Or learning disabilities, OCD, or something else? Take these self-tests to learn whether you or your child has signs that resemble one of the related traits and the positive impacts of them.</p>
                        </div>
                        <div className="mt-20 mb-30">
                           <button className="btn btn-default fs-6">Read More</button>
                        </div>
                     </Grid>
               </Grid>
            </div>
         </div>
      </section>
      <section className="section-box mb-100 mt-100">
         <div className="post-loop-grid">
            <div className="container">
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                     <Grid item lg={6}>
                     <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                     </Grid>
                     <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>

                     <h3>Supporting Diverse Talent</h3>
                     <div className="mt-10">
                        <p className="mt-10">People with ADHD are 500% more likely to be entrepreneurs. People with dyslexia are 230% more likely to be entrepreneurs.</p>
                        <p className="mt-10">A large number of tech professionals and Silicon Valley entrepreneurs have Aspergers. Famous entrepreneurs with Aspergers include Elon Musk, Bill Gates and Nikola Tesla.</p>
                     </div>
                     <div className="mt-20 mb-30">
                        <button className="btn btn-default">Read More</button>
                     </div>
                     </Grid>
               </Grid>
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                     <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                     <h3>Supporting Diverse Talent</h3>
                     </Grid>
                     <Grid item xs={12} md={12}>
                     <div className="sm_img_container w-img fix grid_thumb_height">
                        <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                     </div></Grid>
                     <Grid item xs={12} md={12}>
                     <div className="mt-10">
                        <p className="mt-10">People with ADHD are 500% more likely to be entrepreneurs. People with dyslexia are 230% more likely to be entrepreneurs.</p>
                        <p className=" mt-10">A large number of tech professionals and Silicon Valley entrepreneurs have Aspergers. Famous entrepreneurs with Aspergers include Elon Musk, Bill Gates and Nikola Tesla.</p>
                     </div>
                        <div className="mt-20 mb-30">
                           <button className="btn btn-default fs-6">Read More</button>
                        </div>
                     </Grid>
               </Grid>
            </div>
         </div>
      </section>
      <KickstartButton />
      <Subscription />
    </Layout>
  );
}
