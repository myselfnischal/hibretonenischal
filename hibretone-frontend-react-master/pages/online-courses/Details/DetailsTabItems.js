const DetailsTabItems = ({courseData}) => {
   // destructure courseData
   if (!courseData) {
      return null
   }

  const { _id, name, slug, type, language, publishers, categories, modules, tags, translations, image, url, duration_avg, rating_avg, ratings_count, primary_cip_code, secondary_cip_code, published_at, created_at, updated_at } = courseData;

  return (
     <>
        <div className="course__tab-2 mb-45">
           <ul className="nav nav-tabs" id="courseTab" role="tablist">
              <li className="nav-item" role="presentation">
                 <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"><i className="fa-regular fa-medal"></i> <span>Description</span> </button>
              </li>
              <li className="nav-item" role="presentation">
                 <button className="nav-link " id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"><i className="fa-regular fa-book-blank"></i> <span>Curriculum</span> </button>
              </li>
           </ul>
        </div>

        <div className="course__tab-content mb-95">
           <div className="tab-content" id="courseTabContent">
              <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                 <div className="course__description">
                    <h3>Course Overview</h3>
                    <p className="mb-20"><strong>{translations[0].headline}</strong></p>
                    <p>{translations[0].summary}</p>

                    <div className="course__tag-4 mb-35 mt-35">
                       <i className="fal fa-tag"></i>
                       <a href="#">Big data,</a>
                       <a href="#">Data analysis,</a>
                       <a href="#">Data modeling</a>
                    </div>
                    <div className="course__description-list mb-45">
                       <h4>What is the Target Audience?</h4>
                       <ul>
                          <li> <i className="fa-solid fa-check"></i> Business managers, leaders</li>
                          <li> <i className="fa-solid fa-check"></i> Downloadable lectures, code and design assets for all projects</li>
                          <li> <i className="fa-solid fa-check"></i> Anyone who is finding a chance to get the promotion</li>
                       </ul>
                    </div>
                    <div className="course__instructor mb-45">
                       <h3>Instructors</h3>
                       <div className="course__instructor-wrapper d-md-flex align-items-center">
                          {publishers.map((publisher) => (
                             <div className="course__instructor-item d-flex align-items-center mr-70">
                                <div className="course__instructor-thumb mr-20">
                                <img src="/assets/img/course/tutor/course-tutor-4.jpg" alt="" />
                                </div>
                                <div className="course__instructor-content">
                                   <h3>{publisher.name}</h3>
                                   <p>Instructor</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                 <div className="course__curriculum">
                    <div className="accordion" id="course__accordion">
                       <div className="accordion-item mb-50">
                          <h2 className="accordion-header" id="week-01">
                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-01-content" aria-expanded="true" aria-controls="week-01-content">
                                Course Content
                             </button>
                          </h2>
                          <div id="week-01-content" className="accordion-collapse collapse show" aria-labelledby="week-01" data-bs-parent="#course__accordion">
                             <div className="accordion-body">
                                {modules.filter((x,y) => y != 0).map((module) => (
                                   <>
                                      <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                         <div className="course__curriculum-info">
                                            <h3> <span>{module.name.split(": ")[0]}</span></h3><br/>
                                            <h5><span>{module.name.split(": ")[1]}</span></h5>
                                            <p>{module.description}</p>
                                         </div>
                                      </div>
                                   </>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </>
  );
};

export default DetailsTabItems;
