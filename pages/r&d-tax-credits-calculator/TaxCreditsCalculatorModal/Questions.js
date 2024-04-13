import React, { useState, useRef, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Questions = props => {
  const [question,setQuestion] = useState(1);
  const [progress,setProgress] = useState(0);
  const formGroupRef = useRef([])
  const inputRef = useRef([])

  const handleValidateForm = form => {
    inputRef.current = form.querySelectorAll("input")

    if (inputRef.current.length > 1) {
        var isChecked = false
        for (var i = 0; i < inputRef.current.length; i++) {
            console.log(inputRef.current[i])
            if (inputRef.current[i].checked) {
              isChecked = true
            }
        }
        return isChecked
    } else {
        if (inputRef.current[0].value === "") {
            return false
        }
    }

    return true
  }


  const handleNext = e => {
      e.preventDefault()
      var currentForm = formGroupRef.current[question-1];
      if (handleValidateForm(currentForm)) {
          setQuestion(prevQuestion => prevQuestion + 1)
          setProgress(((question+1)/6)*100)
      } else {
          Swal.fire({
            text: "Please fill in the response before proceeding to the next question.",
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: '#ff9494'
          });
      }
  }

  const handlePrevious = e => {
      e.preventDefault()
      setQuestion(prevQuestion => prevQuestion - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.onLoad()
    var currentForm = formGroupRef.current[question-1];
    if (!handleValidateForm(currentForm)) {
      Swal.fire({
        text: "Please fill in the response before proceeding to the next question.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: '#ff9494'
      });
      return;
    }
    var res = 0
    try {
      // Extract relevant form data
      const checkedInputs = document.querySelectorAll('input:checked');
      const costs = document.querySelectorAll('input[type="number"]')
      const formData = {
        "assessment": "R&D-Tax-Credits-Calculator",
        "answers": []
      };
      var i = 1;
      Array.from(checkedInputs).forEach(input => {
        formData["answers"].push({
          "question_id": parseInt(i),
          "question_value": input.value
        })
        i++
      });
      Array.from(costs).forEach(input => {
        formData["answers"].push({
            "question_id": parseInt(i),
            "question_value": parseInt(input.value)
        })
        i++
      })
      const request = await axios.post("/assessments/feedback/calculate", formData);
      res = request.data
    } catch (error) {
      console.error("Error submitting form: ",error)
    }
    handleClose()
    props.onSubmit(res)
  }

  const nextOnEnter = useCallback((e) => {
    var currentForm = formGroupRef.current[question-1];
    if (e.keyCode === 13) {
      e.preventDefault();
      if (question < 6 && handleValidateForm(currentForm)) {
        handleNext(e);
      } else if (question === 6 && handleValidateForm(currentForm)) {
        handleSubmit(e);
      } else {
        // Show validation error if needed
        Swal.fire({
          text: "Please fill in the response before proceeding to the next question.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: '#ff9494'
        });
      }
    }
  }, [question, handleValidateForm, handleNext, handleSubmit]);

  useEffect(() => {
    document.body.addEventListener('keydown', nextOnEnter)
    return function cleanup() {
      document.body.removeEventListener('keydown', nextOnEnter)
    }
  },[nextOnEnter])

  useEffect(() => {
    // Gets all the form sections in the quiz
    formGroupRef.current = document.querySelectorAll("form .assessment-form-group")
    console.log(question)
  },[formGroupRef.current])

  const handleClose = e => {
    setQuestion(1)
    setProgress(0)
    const checkedInputs = document.querySelectorAll('input:checked');
    const costs = document.querySelectorAll('input[type="number"]')
    checkedInputs.forEach(input => {
        input.checked = false
    })

    costs.forEach(input => {
        input.value = ""
    })
  }

  if (!props.show) {
    return null;
  }

  const QuizButton = () => {
    // 1-indexed so question 1 === 1, question 2 === 2, etc.
    if (question === 1) {
      return (
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz-2 disabled">
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz-2" onClick={handleNext}>
            <IoIosArrowDown />
          </button>
        </div>
      )
    } else if (question < 6) {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz-2" onClick={handlePrevious}>
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz-2" onClick={handleNext}>
            <IoIosArrowDown />
          </button>
        </div>
        </>
      )
    } else {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz-2" onClick={handlePrevious}>
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
    // Also 1-indexed
    return (
      <div className="button-group d-flex align-items-center mt-15">
        <button type="button" className="btn btn-quiz-1" onClick={handleNext}>
          Next
        </button>
        <span className="ml-5">Or Press ENTER</span>
      </div>
    )
  }

  return (
    <>
    <div className="assessment-modal-body text-center p-y-10 ">
    <form className="text-center mb-10" onSubmit={handleSubmit}>
      <div className="assessment-form-group" style={{display: question === 1 ? "block" : "none"}}>
        <div className='assessment-question fw-bold d-flex align-items-center'>
          <label>Your headcount...</label>
        </div>
        <ul className="assessment-radio-group">
          <li className="headcount-less">
            <input type="radio" name="headcount" id="headcount-less" value="A" />
            <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="headcount-less">Less than 500</label>
          </li>
          <li className="headcount-more">
            <input type="radio" name="headcount" id="headcount-more" value="B" />
            <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="headcount-more">More than 500</label>
          </li>
        </ul>
        <Button />
      </div>
        <div className="assessment-form-group" style={{display: question === 2 ? "block" : "none"}}>
          <div className='assessment-question fw-bold d-flex align-items-center'>
            <label>Your turnover...</label>
          </div>
            <ul className="assessment-radio-group">
              <li className="turnover-less">
                <input type="radio" name="turnover" id="turnover-no-more" value="A" />
                <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="turnover-no-more">No more than £100 million</label>
              </li>
              <li className="turnover-more">
                <input type="radio" name="turnover" id="turnover-more" value="B" />
                <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="turnover-more">More than £100 million</label>
              </li>
            </ul>
            <Button />
        </div>
        <div className="assessment-form-group" style={{display: question === 3 ? "block" : "none"}}>
          <div className='assessment-question fw-bold d-flex align-items-center'>
            <label>Your balance sheet...</label>
          </div>
            <ul className="assessment-radio-group">
              <li className="balance-sheet-less">
                <input type="radio" name="balance-sheet" id="balance-sheet-less" value="A" />
                <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="balance-sheet-less">Less than £86 million</label>
              </li>
              <li className="balance-sheet-more">
                <input type="radio" name="balance-sheet" id="balance-sheet-more" value="B" />
                <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="balance-sheet-more">More than £86 million</label>
              </li>
            </ul>
            <Button />
        </div>
        <div className="assessment-form-group" style={{display: question === 4 ? "block" : "none"}}>
          <div className='assessment-question fw-bold d-flex align-items-center'>
            <label>Is your company...</label>
          </div>
            <ul className="assessment-radio-group">
              <li className="company-profit">
                <input type="radio" name="company" id="company-profit" value="A" />
                <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="company-profit">Profit-making</label>
              </li>
              <li className="company-loss">
                <input type="radio" name="company" id="company-loss" value="B" />
                <label className="p-4" style={{"fontHeight": "2.5vh", "lineHeight": "1.5vh"}} htmlFor="company-loss">Loss-making</label>
              </li>
            </ul>
            <Button />
        </div>
        <div className="assessment-form-group" style={{display: question === 5 ? "block" : "none"}}>
          <div className='assessment-question fw-bold d-flex align-items-center'>
            <label>Company staff, software, consumable items costs relating to R&D?</label>
          </div>
            <div className="input group d-flex mb-50" role="group">
                <span className="currency fs-1 d-flex align-items-center col-1">£</span>
                <input type="number" className="fs-3 rounded input" name="costs" placeholder="Costs" />
            </div>
            <Button />
        </div>
        <div className="assessment-form-group" style={{display: question === 6 ? "block" : "none"}}>
          <div className='assessment-question fw-bold d-flex align-items-center'>
            <label>What are your subcontractor costs relating to R&D activities?</label>
          </div>
            <div className="input group d-flex mb-50" role="group">
                <span className="currency fs-1 d-flex align-items-center col-1">£</span>
                <input type="number" className="fs-3 rounded input" name="subcontractor-costs" placeholder="Costs" />
            </div>
            <div className="button-group d-flex align-items-center mt-15">
              <button type="button" className="btn btn-quiz-1" onClick={handleSubmit}>
                Submit
              </button>
            </div>
        </div>
      </form>
    </div>
    <div className="assessment-modal-footer d-flex justify-content-space-between">
      <div className="col-6">
        <QuizButton />
      </div>
      <div className="tracker col">
        <p>Question {question} of 6</p>
        <a className="progress-bar" style={{"backgroundColor": "white"}}>
          <a className="bar" style={{width: `${progress}%`}} />
        </a>
      </div>
    </div>
  </>
  )
}

export default Questions
