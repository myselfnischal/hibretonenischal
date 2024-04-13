import Link from 'next/link';

const SidebarRelatedCourse = () => {

   // decide to render
   let content = null;
   return (
      <>
         <div className="course__sidebar-widget-2 white-bg mb-20">
            <div className="course__sidebar-course">
               <h3 className="course__sidebar-title">Related courses</h3>
               <ul>
                  {content}
               </ul>
            </div>
         </div>
      </>
   );
};

export default SidebarRelatedCourse;
