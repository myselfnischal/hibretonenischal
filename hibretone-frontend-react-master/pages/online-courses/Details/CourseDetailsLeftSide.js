import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import DetailsTabItems from './DetailsTabItems';
SwiperCore.use([Pagination]);
import Link from 'next/link';


const CourseDetailsLeftSide = ({ courseData }) => {
   // destructure courseData
   if (!courseData) {
      return null
   }

   const { _id, name, slug, type, language, publishers, categories, modules, tags, translations, image, url, duration_avg, rating_avg, ratings_count, priamry_cip_code, secondary_cip_code, published_at, created_at, updated_at } = courseData;
   return (
      <>
         <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="course__wrapper">
               <div className="course__content mb-25">
                  {categories.map((category) => (
                     <span className="course__category mr-10 mb-10">{category.code.toUpperCase()}</span>
                  ))}
                  <h3 className="breadcrumb__title-2">{name}</h3>
               </div>
               <div className="course__meta-2 d-sm-flex align-items-center mb-30">
                  <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                     <div className="course__teacher-info-3">
                        <h5>Teacher</h5>
                        {publishers.map((publisher) => (
                           <p>{publisher.name}</p>
                        ))}
                     </div>
                  </div>
                  <div className="course__update mr-80 mb-30">
                     <h5>Last Update:</h5>
                     <p>{updated_at}</p>
                  </div>
                  <div className="course__rating-2 mb-30">
                     <h5>Rating:</h5>
                     <div className="course__rating-inner d-flex align-items-center">
                        <p>{rating_avg}</p>
                     </div>
                  </div>
               </div>
               <div className="course__img w-img mb-30">
                  <img src={image} alt="" style={{"width": "100%"}}/>
               </div>

               {/* DetailsTabItems start */}
               <DetailsTabItems courseData={courseData} />
               {/* DetailsTabItems end */}

               <div className="course__related">
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="section__title-wrapper mb-40">
                           <h2 className="section__title">Related Course</h2>
                           <p>You dont have to struggle alone, you have got our assistance and help.</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="course__slider swiper-container">

                           <Swiper
                              spaceBetween={30}
                              slidesPerView={1}
                              className='swiper-wrapper'
                              pagination={{ clickable: true }}
                              autoplay={{ delay: 6000 }}
                              breakpoints={{
                                 550: {
                                    slidesPerView: 1,
                                 },
                                 768: {
                                    slidesPerView: 2,
                                 },
                                 992: {
                                    slidesPerView: 2,
                                 },
                              }}
                           >

                           </Swiper>

                           <div className="swiper-pagination"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   );
};

export default CourseDetailsLeftSide;
