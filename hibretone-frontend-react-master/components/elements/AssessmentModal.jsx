import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoCloseOutline }  from 'react-icons/io5';
import Swal from 'sweetalert2';

const AssessmentModal = ({ isOpen, onClose, children, header, uizardHTML, time }) => {

  if (!isOpen) {
    return null;
  }

  const handleUIzard = () => {
    Swal.fire({
      title: header.replace("-"," "),
      html: uizardHTML,
      showCloseButton: true,
      confirmButtonText: "Close",
      confirmButtonColor: "#3C65F5"
    });
  }


  return (
    <div className="assessment-modal" onClick={onClose}>
      <div className="assessment-modal-content" onClick={e => e.stopPropagation()}>
        <div className="assessment-modal-header ">
          <div className="d-flex text-center">
            <div className="col">
              <h5 className="text-reset">{header.replaceAll("-"," ")}</h5>
              <p className="text-reset">Take this simple {time} assessment</p>
            </div>
          </div>
          <div className="assessment-modal-close mr-10">
            <i className="assessment-icon" onClick={onClose}><IoCloseOutline size={27.5} /></i>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AssessmentModal;
