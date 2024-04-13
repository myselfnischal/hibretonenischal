import React, { useState } from 'react'
import EnquiryModal from '../../../components/elements/EnquiryModal';

const Result = props => {
  const [enquiry,setEnquiry] = useState(false)

  if (!props.show) {
      return null;
  }

  const handleEnquiry = e => {
    e.preventDefault()
    setEnquiry(true)
  }

  const handleEnquiryClose = e => {
    e.preventDefault()
    setEnquiry(false)
  }

  return (
    <>
      <div className="assessment-modal-body text-center p-10">
        <div className="calculator-results">
          <p className='mb-20 fs-5'>You could receive an estimated:</p>
          <h4>£{props.result.toFixed(2)}</h4><br />
          <p className='mb-20 fs-5'>As a tax liability reduction or tax credit.</p>
          <div className="button-group d-flex justify-content-center">
            <button className="btn btn-quiz-1 fs-6" onClick={handleEnquiry}>Need Help</button>
            <button className="btn btn-quiz-1 fs-6 mr-10 ml-10" onClick={props.onRetake}>Calculate Again</button>
            <button className="btn btn-quiz-1 fs-6" onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
      <EnquiryModal isOpen={enquiry} onClose={handleEnquiryClose} />
    </>
  )
}

export default Result
