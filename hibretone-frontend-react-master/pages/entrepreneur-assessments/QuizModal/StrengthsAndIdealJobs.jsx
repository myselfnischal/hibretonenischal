import React, { useState } from 'react'
import StrengthsAndIdealJobsModal from "./StrengthsAndIdealJobsModal"

const StrengthsAndIdealJobs = props => {
  const [open,setOpen] = useState(false)
  const [section,setSection] = useState("")

  const toggleOpen = e => {
    if (open === false) {
      setSection(e.target.dataset.value)
    }
    setOpen(!open);
  }

  return (
    <>
    <div className={`strengths-and-ideal-jobs text-center ${props.isActive ? "active" : "disabled"}`}>
      <div className="strengths" onClick={props.isActive ? toggleOpen : null} data-value="Strengths" >
        <div className="circle d-flex align-items-center justify-content-center">
          <img alt="Strengths Icon" src="assets/imgs/page/entrepreneurial-assessments/exercise.webp" data-value="Strengths" />
        </div>
        <label forhtml="strengths" className="strengths" data-value="Strengths">Strengths</label>
      </div>
      <div className="ideal-jobs" onClick={props.isActive ? toggleOpen : null} data-value="Ideal Jobs">
        <div className="circle d-flex align-items-center justify-content-center">
          <img alt="Ideal Jobs Icon" src="assets/imgs/page/entrepreneurial-assessments/plumber.webp" data-value="Ideal Jobs"/>
        </div>
        <label forhtml="ideal-jobs" className="ideal-jobs" data-value="Ideal Jobs">Ideal Jobs</label>
      </div>
    </div>
    <StrengthsAndIdealJobsModal onClose={props.isActive ? toggleOpen : null} section={section} show={open} isLoggedIn={true}/>
    </>
  )
}

export default StrengthsAndIdealJobs
