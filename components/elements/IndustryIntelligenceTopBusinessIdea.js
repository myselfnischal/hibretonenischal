import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiFillAudio } from "react-icons/ai";

const IndustryIntelligenceTopBusinessIdea = () => {
  const [formData, setFormData] = useState({
    guidename:""
  });
  const [formErrors, setFormErrors] = useState({
  guidename:false
  });

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.guidename) {
      setFormErrors({
        guidename: !formData.guidename,
      });
      return;
    }

    const queryParams = new URLSearchParams();

    if (formData.guidename) {
      queryParams.append("guidename", formData.guidename);
    } else {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        guidename: "required*",
      }));
      return;
    }

    const url = `/industry-intelligence/top-business-ideas?${queryParams}`;
    if (
      window.location.pathname !== "/industry-intelligence/top-business-ideas"
    ) {
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
                        placeholder="Enter location and the number of ideas"
                        style={{ marginTop: "4px" }}
                    />
          {formErrors.guidename && <p style={{color:'red'}}>required*</p>}
             
          <div className="mike-audio">
                    <AiFillAudio />
                    </div>
          <button className="btn-search">GENERATE</button>
        </form>
      </div>
      <div className="example-industry wow animate__animated animate__fadeInUp">
            <h6  className="example-title">Example input:</h6>
            <p className="example-top-business-idea">slovenia  10,  oslo 15,  baghdad 20</p>
          </div>
    </>
  );
};

export default IndustryIntelligenceTopBusinessIdea;
