import React, { useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const StrengthsAndIdealJobsModal = props => {

  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscape)
    }
  },[closeOnEscape])

  if (!props.show) {
    return null
  }


  return (
    <div className="strengths-and-ideal-jobs-modal" onClick={props.onClose}>
      <div className="strengths-and-ideal-jobs-modal-content" onClick={e => e.stopPropagation()}>
        <div className="strengths-and-ideal-jobs-modal-header">
          <div className="strengths-and-ideal-jobs-title">
            <h4 className="text-reset">{props.section}</h4>
          </div>
          <div className="close">
            <i className="assessment-icon" onClick={props.onClose}><IoCloseOutline size={35} /></i>
          </div>
        </div>
        <div className="strengths-and-ideal-jobs-modal-body">
          <div className="endpoint-container">
            <div className="box">Endpoint</div>
            <div className="box">Endpoint</div>
            <div className="box">Endpoint</div>
            <div className="box">Endpoint</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthsAndIdealJobsModal;
