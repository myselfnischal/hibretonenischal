import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Grid({ data }) {
   const [active, setActive] = useState(1);
   const router = useRouter()

   const handleOnClick = (index,category) => {
       setActive(index);
       setSelectedCategory(category)
   };

  return (
    <>
      <div className="row">
        {Object.values(data).map((key) => (
               <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" data-key={key} onClick={() => router.push(`/online-courses/${key.id}`)}>
                  <div className="grid__item white-bg transition-3 mb-30" data-key={key}>
                     <div className="grid__thumb w-img fix grid_thumb_height grid_thumb" data-key={key}>
                        <div className="grid__tag" data-key={key}>
                           {key.categories.map((category) => (
                              <a className="grid__category" data-key={key}>{category.code.replaceAll("-"," ").toUpperCase()}</a>
                           ))}
                        </div>
                        <img src={key.image} alt="Assessment Image" data-key={key} width={"100%"}/>
                     </div>
                     <div className="grid__content" data-key={key}>
                        <div className="grid__top d-flex">
                           <h3 className="grid__title-2 fw-bold col-10" data-key={key}>
                              <a data-key={key}>{key.name}</a>
                           </h3>
                        </div>
                     </div>
                     <div className="grid__bottom d-flex">
                        <div className="col-6 grid__tutor">
                           <a>
                              Provider
                           </a>
                        </div>
                        <div className="col-6 text-end">
                           <a className="grid__complete">

                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
      </div>

         </>
  )
}

export default Grid
