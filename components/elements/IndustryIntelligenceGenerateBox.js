import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiFillAudio } from "react-icons/ai";




function IndustryIntelligenceGenerateBox() {
    const [formData, setFormData] = useState({
        guidename: '',
    });
    const [formErrors, setFormErrors] = useState({
        guidename: false,
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
        
        const queryParams = new URLSearchParams(formData);
            const url = `/industry-intelligence/market-sector-guide?${queryParams}`;
            if (window.location.pathname !== '/industry-intelligence/market-sector-guide') {
                router.push(url);
            } else {
                router.push({
                    pathname: window.location.pathname,
                    query: queryParams.toString() 
                }, undefined, { shallow: true, replace: true });
            }
        
        
        
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [name]: false
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
               {formErrors.guidename && <p style={{color:'red'}}>required*</p>}
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