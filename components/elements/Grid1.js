import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import Loading from './Loading';

function Grid({ loading, data, categories, clickAction }) {
   const [active, setActive] = useState(1);
   const [selectedCategory,setSelectedCategory] = useState("All")


   const handleOnClick = (index,category) => {
       setActive(index);
       setSelectedCategory(category)
   };

   const filteredData = selectedCategory === "All" ? data:
   Object.keys(data).reduce((filtered,key) => {
      if (data[key].category === selectedCategory) {
         filtered[key] = data[key]
      }
      return filtered
   },{})

  return (
    <>
    <div className="list-tabs mb-30 d-flex justify-content-center">
        <ul className="nav nav-tabs d-flex justify-content-center" role="tablist">
            <li>
                <a className={active === 1 ? "active" : ""} onClick={() => handleOnClick(1,"All")}>All</a>
                </li>
            {categories.map((category,index) => {
               const i = index + 2
               return (
                  <li>
                     <a className={active == i ? "active" : ""} onClick={() => handleOnClick(i,category.name)}>{category.name}</a>
                  </li>
               )
            })}
        </ul>
    </div>
    <div className="category-description text-center mb-30">
      <p>Simple assessment quizzes align with the six categories determining an entrepreneurs success</p>
    </div>
      <div className="row">
         {loading ? (
            <Loading />
         ) : (
         Object.keys(filteredData).map((key) => (
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={key} data-key={key} onClick={data[key].available ? () => clickAction(data[key],key) : null}>
                     <div className={`${data[key].available ? "available" : ""} grid__item white-bg transition-3 mb-30`} data-key={key}>
                        <div className="grid__thumb w-img fix grid_thumb_height grid_thumb" data-key={key}>
                           <div className="grid__tag" data-key={key}>
                              <a className="grid__category" data-key={key}>{data[key].category}</a>
                           </div>
                           <img src={`assets/imgs/page/entrepreneurial-assessments/${key}.webp`} alt="Assessment Image" data-key={key} />
                        </div>
                        <div className="grid__content" data-key={key}>
                           <div className="grid__top d-flex align-items-center">
                              <h3 className="grid__title-1 fw-bold col-10" data-key={key}>
                                 <a data-key={key}>{key.replaceAll("-"," ")}</a>
                              </h3>
                              <div className="col-2 grid__progress_circle mr-10 d-flex justify-content-end">
                                 <CircularProgressbar
                                    strokeWidth={15}
                                    value={0}
                                    text={`${0}%`}
                                    styles={buildStyles({
                                       textSize: '25px',
                                       pathColor: '#3AAB67',
                                       textColor: '#000000'
                                    })}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="grid__description">
                           <p data-key={key}>{data[key].description}</p>
                        </div>
                        <div className="grid__tutor">
                           <a className="d-flex align-items-center justify-content-center">
                              <img src={`assets/imgs/page/entrepreneurial-assessments/Logos/${data[key].provider}.webp`} />
                              {data[key].provider}
                           </a>
                        </div>
                     </div>
                  </div>
               ))
         )}
      </div>

   </>
  )
}

export default Grid
