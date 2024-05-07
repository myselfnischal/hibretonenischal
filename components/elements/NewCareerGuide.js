import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AiFillAudio } from "react-icons/ai";


const NewCareerGuide = () => {
  const [isValidPlace, setIsValidPlace] = useState(false);
  const [formData, setFormData] = useState({
    guidename: ""
  });
  const [formErrors, setFormErrors] = useState({
    guidename: false
  });

  const router = useRouter();

  const validatePlace = async () => {
    try {
      const response = await axios.post("http://localhost:8000/validate-place", { text: formData.guidename });
      console.log('response',response);
      setIsValidPlace(response.data.isValidPlace);
    } catch (error) {
      console.error("Error validating place:", error);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.guidename) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        guidename: "required*",
      }));
      return;
    }
    
    try {
      const isValidPlace = await validatePlace(formData.guidename);
      console.log(isValidPlace);
      if (!isValidPlace) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          guidename: "Please enter a valid place name*"
        }));
        return;
      }
      else{
      const queryParams = new URLSearchParams();
      queryParams.append("guidename", formData.guidename);
      console.log(queryParams);
    
      const url = `/industry-intelligence/new-career-guide?${queryParams}`;
      if (window.location.pathname !== "/industry-intelligence/new-career-guide") {
        router.push(url);
      } else {
        router.push(
          {
            pathname: window.location.pathname,
            query: queryParams.toString(),
          },
          undefined,
          { shallow: true, replace: true }
        );
      }
    }
    } catch (error) {
      console.error("Error occurred during place validation:", error);
      // Handle error if necessary
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: false,
    }));
  };

  return (
    <>
      <div className="industry-form-find  wow animate__animated animate__fadeInUp">
        <form onSubmit={handleSubmit}>
          <input
            className="industry-input-top-five"
            type="text"
            name="guidename"
            id="guidename"
            value={formData.guidename}
            onChange={handleChange}
            placeholder="Enter your career and location "
            style={{ marginTop: "4px" }}
          />
          {formErrors.guidename && <p style={{ color: 'red' }}>{formErrors.guidename}</p>}

          <div className="mike-audio">
                    <AiFillAudio />
                    </div>
          <button className="btn-search">GENERATE</button>
        </form>
      </div>
      <div className="example-industry wow animate__animated animate__fadeInUp">
        <h6 className="example-title">Example input:</h6>
        <p className="example-new-career-guide">computer programmer belfast, hairdresser st ives, website developer cardiff</p>
      </div>
    </>
  );
};

export default NewCareerGuide;
