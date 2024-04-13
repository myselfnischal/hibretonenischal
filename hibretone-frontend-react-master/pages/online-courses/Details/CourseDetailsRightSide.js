import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SidebarRelatedCourse from './SidebarRelatedCourse';

const CourseDetailsRightSide = ({ courseData }) => {
   // paymentInformation
   const [paymentInformation, setPaymentInformation] = useState({});
   //  //sidebar show
   const [show, setShow] = useState(false);
   //sidebar handleClose
   const handleClose = () => setShow(false);
   //sidebar handleShow
   const handleShow = () => setShow(true);
   // destructure courseData
   if (!courseData) {
      return null
   }

   const { _id, name, slug, type, language, publishers, categories, modules, tags, translations, image, url, duration_avg, rating_avg, ratings_count, priamry_cip_code, secondary_cip_code, published_at, created_at, updated_at } = courseData;
   // video popup
   return (
      <>

         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="course__sidebar pl-70 p-relative">
               <div className="course__shape">
                  <img className="course-dot" src="assets/img/course/course-dot.png" alt="" />
               </div>
               <div className="course__sidebar-widget-2 white-bg mb-20">
                  <div className="course__video">
                     <div className="course__video-thumb w-img mb-25">
                        <img src={image} alt="" />
                        <div className="course__video-play">
                           <button className="play-btn popup-video">
                              <i className="fas fa-play"></i> </button>
                        </div>
                     </div>
                     <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                        <div className="course__video-price">
                           <h5>Free </h5>
                        </div>
                     </div>
                     <div className="course__video-content mb-35">
                        <ul>
                           <li className="d-flex align-items-center">
                              <div className="course__video-icon">
                                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                                    style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                                    <path className="st0" d="M4,19.5C4,18.1,5.1,17,6.5,17H20" />
                                    <path className="st0" d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z" />
                                 </svg>
                              </div>
                              <div className="course__video-info">
                                 <h5><span>Lectures :</span>{modules.length}</h5>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="course__video-icon">
                                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16"
                                    style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                                    <circle className="st0" cx="8" cy="8" r="6.7" />
                                    <polyline className="st0" points="8,4 8,8 10.7,9.3 " />
                                 </svg>
                              </div>
                              <div className="course__video-info">
                                 <h5><span>Duration :</span>{duration_avg}</h5>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="course__video-icon">
                                 <svg>
                                    <circle className="st0" cx="8" cy="8" r="6.7" />
                                    <line className="st0" x1="1.3" y1="8" x2="14.7" y2="8" />
                                    <path className="st0" d="M8,1.3c1.7,1.8,2.6,4.2,2.7,6.7c-0.1,2.5-1,4.8-2.7,6.7C6.3,12.8,5.4,10.5,5.3,8C5.4,5.5,6.3,3.2,8,1.3z" />
                                 </svg>
                              </div>
                              <div className="course__video-info">
                                 <h5><span>Language :</span>English</h5>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CourseDetailsRightSide;
