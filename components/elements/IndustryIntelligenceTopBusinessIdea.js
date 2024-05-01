import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/router";

const IndustryIntelligenceTopBusinessIdea = () => {
  const [formData, setFormData] = useState({
    top_business_idea: "",
    location: "",
  });
  const [formErrors, setFormErrors] = useState({
    number_of_business_ideas: "",
    location: "",
  });

  const router = useRouter();
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

    if (!formData.number_of_business_ideas || !formData.location) {
      setFormErrors({
        number_of_business_ideas: !formData.number_of_business_ideas,
        location: !formData.location,
      });
      return;
    }

    const queryParams = new URLSearchParams();

    if (isNumber(formData.number_of_business_ideas)) {
      queryParams.append(
        "number_of_business_ideas",
        formData.number_of_business_ideas
      );
    } else {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        number_of_business_ideas: "number only*",
      }));
      return;
    }

    if (formData.location) {
      queryParams.append("location", formData.location);
    } else {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        location: "required*",
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
  const isNumber = (value) => {
    console.log(value);
    const numericRegex = /^[0-9]+$/;
    console.log(numericRegex.test(value));
    return numericRegex.test(value);
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
                        placeholder="Enter name of your sector and your location"
                        style={{ marginTop: "4px" }}
                    />

                    <div className="mike-audio">
                    <img src="/assets/imgs/page/industry-intelligence/00.png" />
                    </div>
          <button className="btn-search">GENERATE</button>
        </form>
      </div>
      <div className="example-industry wow animate__animated animate__fadeInUp">
            <h6  className="sha">Example Searches:</h6>
            <p className="te">I floristry maidenhead,  clothes manufacturers leicester, PR companies cardiff</p>
          </div>
    </>
  );
};

export default IndustryIntelligenceTopBusinessIdea;
