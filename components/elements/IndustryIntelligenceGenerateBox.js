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
        
        if (!formData.guidename || !formData.guidetype || !formData.location) {
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
                        placeholder="Enter name of your guide"
                        style={{ marginTop: "4px" }}
                    />
               {formErrors.location && <p style={{color:'red'}}>required*</p>}
                <div className="divider1"></div>
                    <Autocomplete
                        clearOnEscape
                        options={guide_type}
                        onChange={(event, value) => handleChange({ target: { name: 'guidetype', value } })}
                        renderInput={(params) => (
                            <TextField
                                name="guidetype"
                                id="guidetype"
                                value={formData.guidetype}
                                onChange={handleChange}
                                sx={{
                                    border: "none !important",
                                    "&:focus": {
                                        border: "none !important",
                                    },
                                    "& .MuiInputBase-input": {
                                        border: "none !important",
                                        height: "auto",
                                        width: "100% !important",
                                    },
                                }}
                                {...params}
                                label="Guide Type"
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                            />
                        )}
                        className="industry-input-top-three"
                    />
                     {formErrors.location && <p style={{color:'red'}}>required*</p>}
                    <div className="divider1"></div>
                    <Autocomplete
                        clearOnEscape
                        options={locations}
                        onChange={(event, value) => handleChange({ target: { name: 'location', value } })}
                        renderInput={(params) => (
                            <TextField
                                name="location"
                                id="location"
                                value={formData.location}
                                onChange={handleChange}
                                sx={{
                                    border: "none !important",
                                    "&:focus": {
                                        border: "none !important",
                                    },
                                    "& .MuiInputBase-input": {
                                        border: "none !important",
                                        height: "auto",
                                        width: "100% !important",
                                    },
                                }}
                                {...params}
                                label="City, region or country"
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                            />
                        )}
                        className="industry-input-top-four"
                    />
                     {formErrors.location && <p style={{color:'red'}}>required*</p>}
                    <div className="divider2"></div>
                    <button type="submit" className="btn-search">GENERATE</button>
                </form>
            </div>
        </>
    );
}

export default IndustryIntelligenceGenerateBox;