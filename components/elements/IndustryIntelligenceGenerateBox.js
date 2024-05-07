import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiFillAudio } from "react-icons/ai";
import axios from 'axios';


const IndustryIntelligenceGenerateBox = () => {
  const [formData, setFormData] = useState({
    guidename:""
  });
  const [formErrors, setFormErrors] = useState({
  guidename:false
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

    setFormErrors({ guidename: false });
    if (!formData.guidename) {
      setFormErrors({ guidename: "required*" });
      return;
    }
    const input =  formData.guidename;
    const inputs = input.split(/\s+/);  
    let foundPlaceName = "";
    let additionalInfo = [];

    for (let i = 0; i < inputs.length; i++) {
        let testPlaceName = inputs[i];
        if (await validatePlace(testPlaceName)) {
            foundPlaceName = testPlaceName; 
            continue;  
        }
        additionalInfo.push(inputs[i]);
    }

    if (!foundPlaceName) {
        setFormErrors({ guidename: "Please enter a valid place name" });
        return;
    }
    else if (foundPlaceName && !additionalInfo.join(' ')){
        setFormErrors({ guidename: "Please enter choosen market sector" });
        return;
    }

   else{
    const queryParams = new URLSearchParams({
        guidename: additionalInfo.join(' '),
        location: foundPlaceName
      });
    
          const url = `/industry-intelligence/market-sector-guide?${queryParams}`;
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
            <div className="industry-form-find wow animate__animated animate__fadeInUp">
                <form onSubmit={handleSubmit}>
                    <input
                        className="industry-input-top-five"
                        type="text"
                        name="guidename"
                        id="guidename"
                        value={formData.guidename}
                        onChange={handleChange}
                        placeholder="Enter chosen market sector and location "
                        style={{ marginTop: "4px" }}
                    />
               {formErrors.guidename && <p style={{color:'red'}}>{formErrors.guidename}</p>}
                    <div className="mike-audio">
                    <AiFillAudio />
                    </div>
                    <button type="submit" className="btn-search">GENERATE</button>
                </form>
            </div>
            <div className="example-industry wow animate__animated animate__fadeInUp">
            <h6  className="example-title">Example input:</h6>
            <p className="example-market-guide">floristry maidenhead,  clothes manufacturers leicester, PR companies cardiff</p>
          </div>
        </>
    );
}

export default IndustryIntelligenceGenerateBox;