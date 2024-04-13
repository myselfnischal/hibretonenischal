import Swal from "sweetalert2";
import React, { useState } from 'react';
import StrengthsAndIdealJobs from "./StrengthsAndIdealJobs.jsx";
import { IoIosInformationCircleOutline } from "react-icons/io";
import EnquiryModal from "../../../components/elements/EnquiryModal.js";

const Score = props => {
  const [enquiry,setEnquiry] = useState(false)

  if (!props.show) {
    return null;
  }

  const handleEnquiries = e => {
    e.preventDefault()
    setEnquiry(true)
  }

  const handleCloseEnquiry = e => {
    e.preventDefault()
    setEnquiry(false)
  }

  const handlePersonalityEnquiry = e => {
    let heading = e.target.dataset.value
    Swal.fire({
      title: heading,
      text: "Example text",
      showCloseButton: true,
      confirmButtonText: "Close",
      confirmButtonColor: "#046893"
    });
  }

  const Feedback = () => {
    console.log(props.feedback.feedback)
    if (props.assessment === "Entrepreneurial-Readiness") {
      const feedback = props.feedback.feedback
      let j = 0
      return (
        <>
          <div className="feedback-content">
            <h6 className="score">Your Results: {props.feedback.score}</h6>
            <p className="fw-bold color-black mt-5 mb-5">
              Thank you for completing the {props.title} Assessment!
            </p>
            <div className="suggestion">
              <p className="fw-bold color-black">
              {feedback["header"]}
              </p>
            </div>
            <div className="feedback color-black mt-5">
              <p>Follow these recommendations then, if needed, retake the assessment:</p>
              <div className="feedback-container mt-10">
                <ul>
                  {feedback["recommendations"].map((recommendation) => (
                    <li key={j += 1}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )
    } else if (props.assessment === "Personality") {
      const feedback = props.feedback
      return (
        <div className="feedback-content">
          <h6 className="fw-bold color-black mb-10">
            Thank you for completing the {props.title} Assessment!
          </h6>
          <h6 className="score">Your Results:</h6>
          <div className="mb-10">
            {Object.entries(feedback).map(([category,result]) => {
              const trait = category.split("_").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
              return (
              <div className={`${category}`} key={`${category}`}>
                <div className="personality">
                  <p className="mr-40"><strong>{trait}</strong></p>
                  <a className="progress-bar mr-10" style={{"backgroundColor": "#d6d6d6"}}>
                    <a className="bar" style={{width: `${result}`}} />
                  </a>
                  <div className="percent">
                    {result}
                  </div>
                  <i
                    data-value={trait}
                    onClick={handlePersonalityEnquiry}
                    >
                      <IoIosInformationCircleOutline className="mb-1" data-value={trait} size={20}/>
                    </i>
                </div>
              </div>
            )})}
          </div>
        </div>
      )
    } else if (props.assessment === "ADHD-or-ADD" || props.assessment === "Dyslexia") {
      const feedback = props.feedback.feedback
      let j = 0
      return (
        <>
          <div className="feedback-content">
            <h6 className="score">Your Results: <span className="fw-stronger">{feedback["result"]}</span></h6>

            <p className="fw-bold color-black mb-5">
              Thank you for completing the {props.title} Assessment!
            </p>
            <div className="neurodivergent-container">
              {feedback["header"].split("<br />").map((text) => (
                <p key={j += 1}>{text}</p>
              ))}
            </div>
            <div className="feedback mb-10">
              <p>Next step:</p>
              <div className="feedback-container pl-10">
              <ul>
                  {feedback["recommendations"].map((recommendation) => (
                    <li key={j += 1}>{recommendation}</li>
                  ))}
              </ul>
              </div>
            </div>
          </div>
        </>
      )
    }
  }


  return (
    <>
      <div className="assessment-modal-body">
        <div className="content pt-10">
          <Feedback />
        </div>
        <div className="icons mt-10 d-flex justify-content-center">
          <StrengthsAndIdealJobs isActive={true} />
        </div>
        <div className="footer pb-15">
          <div className="button-group d-flex justify-content-center">
            <button id="retake-btn" type="button" className="btn btn-quiz-1 mx-1" onClick={props.onRetake}>Retake Assessment</button>
            <button type="button" id="subscribe-button" className="btn btn-quiz-1 mx-1" onClick={handleEnquiries}>
              Need Specialist Help
            </button>
            <button className="btn btn-quiz-1 mx-1" onClick={props.onClose}>Close</button>
          </div>
        </div>
        <EnquiryModal isOpen={enquiry} onClose={handleCloseEnquiry} />
      </div>
    </>
  )
}

export default Score
