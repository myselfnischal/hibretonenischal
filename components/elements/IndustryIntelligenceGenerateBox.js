import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/router";



function IndustryIntelligenceGenerateBox() {
    const [formData, setFormData] = useState({
        guidename: '',
        guidetype: '',
        location: ''
    });
    const [formErrors, setFormErrors] = useState({
        guidename: false,
        guidetype: false,
        location: false
    });

    const router = useRouter();

    const guide_type = ["Market Sector Guide", "New Occupation Guide"];
    const locations = [
        "London",
        "Edinburgh",
        "Manchester",
        "Birmingham",
        "Glasgow",
        "Bristol",
        "Liverpool",
        "Oxford",
        "Cambridge",
        "Brighton",
        "Newcastle",
        "Leeds",
        "Sheffield",
        "Portsmouth",
        "Nottingham",
        "Leicester",
        "Southampton",
        "Belfast",
        "Cardiff",
        "Coventry",
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!formData.guidename) {
            setFormErrors({
                guidename: !formData.guidename,
                guidetype: !formData.guidetype,
                location: !formData.location
            });
            return;
        }
        
        const queryParams = new URLSearchParams(formData);
        const guideType = queryParams.get('guidetype');
        
        if (guideType === 'New Occupation Guide') {
            const new_url = `/industry-intelligence/new-occupation-guide?${queryParams}`;
            if (window.location.pathname !== '/industry-intelligence/new-occupation-guide') {
                router.push(new_url);
            } else {
                router.push({
                    pathname: window.location.pathname,
                    query: queryParams.toString()
                }, undefined, { shallow: true, replace: true });
            }
        } else {
            const url = `/industry-intelligence/market-sector-guide?${queryParams}`;
            if (window.location.pathname !== '/industry-intelligence/market-sector-guide') {
                router.push(url);
            } else {
                router.push({
                    pathname: window.location.pathname,
                    query: queryParams.toString() 
                }, undefined, { shallow: true, replace: true });
            }
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
                        placeholder="Enter name of your chosen market sector and location "
                        style={{ marginTop: "4px" }}
                    />
               {formErrors.guidename && <p style={{color:'red'}}>required*</p>}
                    <div className="mike-audio">
                    <img src="/assets/imgs/page/industry-intelligence/00.png" />
                    </div>
                    <button type="submit" className="btn-search">GENERATE</button>
                </form>
            </div>
            <div className="example-industry wow animate__animated animate__fadeInUp">
            <h6  className="sha">Example Searches:</h6>
            <p className="te">I floristry maidenhead,  clothes manufacturers leicester, PR companies cardiff</p>
          </div>
        </>
    );
}

export default IndustryIntelligenceGenerateBox;