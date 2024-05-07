import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiFillAudio } from "react-icons/ai";
import axios from 'axios';


const IndustryIntelligenceTopBusinessIdea = () => {
  const [formData, setFormData] = useState({
    number_of_business_ideas:""
  });
  const [formErrors, setFormErrors] = useState({
  number_of_business_ideas:false
  });

  const router = useRouter();

  const validatePlace = async (placeName) => {
    try {
      const response = await axios.post("http://localhost:8000/validate-place", { text: placeName });
      console.log('response', response);
      return response.data.isValidPlace;
    } catch (error) {
      console.error("Error validating place:", error);
      return false; 
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const input = formData.number_of_business_ideas.trim();
    const inputs = input.split(/\s+/); 
    const numberIndex = inputs.findIndex(part => !isNaN(part) && part.trim() !== '');
    const placeName = inputs.slice(0, numberIndex).join(' ') || inputs.join(' ');
    const numberOfIdeas = parseInt(inputs[numberIndex], 10); 
    const isValidPlace = await validatePlace(placeName);
    
    setFormErrors({ number_of_business_ideas: false });
    if (!formData.number_of_business_ideas) {
      setFormErrors({ number_of_business_ideas: "required*" });
      return;
    }

    if (!isValidPlace) {
      console.log('2')
      setFormErrors({ number_of_business_ideas: "Please enter a valid place name or number of ideas*" });
    }
    else if (numberIndex === -1 && isValidPlace) {
      setFormErrors({ number_of_business_ideas: "Please enter a valid number of business ideas*" });
      return;
    }
    else {

  const queryParams = new URLSearchParams({
    number_of_business_ideas: numberOfIdeas,
    location: placeName
  });

  console.log("Number of Ideas:", numberOfIdeas);
  console.log("Place Name:", placeName);
      const url = `/industry-intelligence/top-business-ideas?${queryParams}`;
      router.push(url, undefined, { shallow: true });
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
                        name="number_of_business_ideas"
                        id="number_of_business_ideas"
                        value={formData.number_of_business_ideas}
                        onChange={handleChange}
                        placeholder="Enter location and the number of ideas"
                        style={{ marginTop: "4px" }}
                    />
         {formErrors.number_of_business_ideas && <p style={{color: 'red'}}>{formErrors.number_of_business_ideas}</p>}
             
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
