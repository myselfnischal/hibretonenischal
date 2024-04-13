import Swal from "sweetalert2";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import StrengthsAndIdealJobs from "./StrengthsAndIdealJobs.jsx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6"


const Quiz = ({ onClose,assessment,title,onSubmit,show,isLoggedIn,onLoad }) => {
  const formGroupRef = useRef([])
  const [formIndex,setFormIndex] = useState(0)
  const checkBoxesRef = useRef([])
  const [progress, setProgress] = useState(0)

  const nextOnEnter = (e) => {
    var currentForm = formGroupRef.current[formIndex]
    if (e.keyCode === 13) {
        e.preventDefault()
      // Default function of enter submits form so only eliminate when not on the last question
      if (formIndex < assessment.assessment.length) {
        handleGoNext()
      } else if (!handleValidateForm(currentForm)) {
        Swal.fire({
          text: "Please fill in the response before proceeding to the next question.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: '#ff9494'
        });
        return;
      } else {
        handleSubmit(e)
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', nextOnEnter)
    return function cleanup() {
      document.body.removeEventListener('keydown', nextOnEnter)
    }
  },[nextOnEnter])

  useEffect(() => {
    // Gets all the form sections in the quiz
    formGroupRef.current = document.querySelectorAll("form .assessment-form-group")
  },[formGroupRef.current])

  if (!show) {
    return null;
  }

  const handleGoNext = (e) => {
    // Check if the key pressed is not Enter
    var currentForm = formGroupRef.current[formIndex];
    if (handleValidateForm(currentForm)) {
      currentForm.style.display = "none";

      var nextFormIndex = formIndex + 1;
      setFormIndex(prevFormIndex => prevFormIndex + 1);
      setProgress((nextFormIndex+1)/(assessment.assessment.length+1)*100)

      var nextForm = formGroupRef.current[nextFormIndex];
      nextForm.style.display = "block";
    } else {
      Swal.fire({
        text: "Please fill in the response before proceeding to the next question.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: '#ff9494'
      });
    }
  };

  const handleGoBack = () => {
    var currentForm = formGroupRef.current[formIndex];
    currentForm.style.display = "none";

    var previousFormIndex = formIndex - 1;
    setFormIndex(previousFormIndex);
    setProgress((previousFormIndex+1)/(assessment.assessment.length+1)*100)

    var previousForm = formGroupRef.current[previousFormIndex];
    previousForm.style.display = "block";
  };

  const handleValidateForm = (form) => {
    checkBoxesRef.current = form.querySelectorAll("input[type='radio']")
    var isChecked = false;

    for (var i = 0; i < checkBoxesRef.current.length; i++) {
      if (checkBoxesRef.current[i].checked) {
        isChecked = true;
        break;
      }
    }

    return isChecked;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    var currentForm = formGroupRef.current[formIndex];
    // If last question isn't complete, error pops up
    if (!handleValidateForm(currentForm)) {
      Swal.fire({
        text: "Please fill in the response before proceeding to the next question.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: '#ff9494'
      });
      return;
    }
    // Open Loading Screen
    onLoad()
    // Creates feedback variable in the outer scope
    var feedback = {}
    try {
      // Extract relevant form data
      const checkedInputs = document.querySelectorAll('input:checked');
      const formData = {
        "assessment": title,
        "answers": []
      };
      // Put data into correct format for the backend
      var i = 1;
      Array.from(checkedInputs).forEach(input => {
        formData["answers"].push({
          "question_id": parseInt(i),
          "question_value": input.value
        })
        i++
      });
      const request = await axios.post(`/assessments/feedback/calculate`, formData)
      feedback = request.data
      // Reset assessment
      setFormIndex(0)
      setProgress(0)
    } catch (error) {
      console.error("Error submitting form: ",error)
    }
    onSubmit(feedback)
  }

  // Dynamically Loading Number
  const QuizButton = ({ number }) => {
    if (number === 0) {
      return (
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz-2 disabled">
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz-2" onClick={handleGoNext}>
            <IoIosArrowDown />
          </button>
        </div>
      )
    } else if (number < assessment.assessment.length) {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz-2" onClick={handleGoBack}>
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz-2" onClick={handleGoNext}>
            <IoIosArrowDown />
          </button>
        </div>
        </>
      )
    } else {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz-2" onClick={handleGoBack}>
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz-2" onClick={handleSubmit}>
            <IoIosArrowDown />
          </button>
        </div>
        </>
      )
    }
  }

  const Button = () => {
    return (
      <div className="button-group d-flex align-items-center mt-10">
        <button type="button" className="btn btn-quiz-1" onClick={handleGoNext}>
          Next
          <FaArrowRightLong className="ml-5" />
        </button>
        <span className="ml-10 fs-sm answer-label">or press Enter</span>
      </div>
    )
  }

  // Dynamically Loading the Questions
  const Question = ({ section, question }) => {
    if (section) {
      return (
        <>
        <div className="container p-0">
          <div className="row d-flex mr-30">
            <div className="col-9 text-start">
              <div className="assessment-question fw-bold d-flex align-items-center">
                <label>{question}</label>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center mb-10">
              <div className="section-name fw-bolder">
                <h6>{section}</h6>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    } else {
      return (
        <>
        <div className="container p-0">
          <div className="row">
            <div className="col text-start">
              <div className="assessment-question fw-bold d-flex align-items-center">
                <label>{question}</label>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="assessment-modal-body text-center">
          <form onSubmit={handleSubmit}>
            {/* Loops through all the provided assessment.assessment */}
            {assessment.assessment.map((question) => (
              <div className="assessment-form-group" style={{display: question.question_number === 1 ? "block" : "none"}} key={question.question_number}>
                <Question section={question.section} question={question.question_text} />
                  <ul className="assessment-radio-group">
                    {assessment.answers.map((answer) => (
                      <li
                        className={`${question.question_number}-${answer.value}`}
                        key={answer.value}
                      >
                          <input
                            type="radio"
                            style={{"fontHeight": "3vh", "lineHeight": "4vh"}}
                            name={`q${question.question_number}`}
                            id={`q${question.question_number}-${answer.text}`}
                            value={answer.value}
                          />
                        <label className="answer-label" htmlFor={`q${question.question_number}-${answer.text}`}>
                          {answer.text}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <Button number={question.question_number} />
                </div>
            ))}

            <div className="assessment-form-group" style={{display:"none"}} key={26}>
              <div className="container p-0">
                <div className="row">
                  <div className="col-9 text-start">
                    <div className="assessment-question fw-bold d-flex align-items-center">
                      <label>Select Your Gender:</label>
                    </div>
                  </div>
                  <div className="col-3 d-flex align-items-center mb-10">
                    <div className="section-name fw-bolder">
                      <h6>Gender</h6>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="assessment-radio-group">
                <li className="gender-male">
                  <input
                    type="radio"
                    style={{"fontHeight": "3vh", "lineHeight": "4vh"}}
                    name="gender"
                    id="gender-male"
                    value="male" />
                  <label htmlFor="gender-male">Male</label>
                </li>
                <li className="gender-female">
                  <input
                    type="radio"
                    style={{"fontHeight": "3vh", "lineHeight": "4vh"}}
                    name="gender"
                    id="gender-female"
                    value="female" />
                  <label htmlFor="gender-female">Female</label>
                </li>
              </ul>
              <div className="button-group d-flex align-items-center mt-10">
                <button type="button" className="btn btn-quiz-1" onClick={handleSubmit}>
                  Submit
                  <FaArrowRightLong className="ml-5" />
                </button>
                <span className="ml-10 fs-sm answer-label">or press Enter</span>
              </div>
            </div>
          </form>
        <div className="icons d-flex justify-content-center">
          <StrengthsAndIdealJobs isActive={false} />
        </div>
      </div>
      <div className="assessment-modal-footer d-flex justify-content-space-between">
        <div className="col-6">
          <QuizButton number={formIndex} />
        </div>
        <div className="tracker">
          <p>Question {formIndex+1} of {assessment.assessment.length+1}</p>
          <div className="progress-bar" style={{"backgroundColor": "white"}}>
            <a className="bar" style={{width: `${progress}%`}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
