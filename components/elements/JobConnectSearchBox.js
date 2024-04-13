import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbTarget } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { Autocomplete, TextField } from "@mui/material";

const JobConnectSearchBox = ({ defaultJob = "", defaultLocation = "" }) => {
    const [job, setJob] = useState(defaultJob);
    const [location, setLocation] = useState(defaultLocation);
    /* The above code snippet is written in JavaScript and it appears to be defining multiple state
    variables using the `useState` hook in a React functional component. Each `useState` call
    initializes a state variable with an initial value. */
    const [whatAnd, setWhatAnd] = useState("");
    const [whatPhrase, setWhatPhrase] = useState("");
    const [whatOr, setWhatOr] = useState("");
    const [whatExclude, setWhatExclude] = useState("");
    const [titleOnly, setTitleOnly] = useState("");
    const [distance, setDistance] = useState(null);
    const [maxDaysOld, setMaxDaysOld] = useState(null);
    const [category, setCategory] = useState("");
    const [sortDir, setSortDir] = useState("");
    const [salaryMin, setSalaryMin] = useState(null);
    const [salaryMax, setSalaryMax] = useState(null);
    const [salaryIncludeUnknown, setSalaryIncludeUnknown] = useState("");
    const [fullTime, setFullTime] = useState(null);
    const [partTime, setPartTime] = useState(null);
    const [contract, setContract] = useState(null);
    const [permanent, setPermanent] = useState(null);
    const [company, setCompany] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState(null);

    const router = useRouter();

    const [jobs, setJobs] = useState([
        "Accountant",
        "Administrative Assistant",
        "Architect",
        "Art Director",
        "Auto Mechanic",
        "Bookkeeping, Accounting, & Audit Clerk",
        "Brickmason & Blockmason",
        "Business Operations Manager",
        "Bus Driver",
        "Carpenter",
        "Cashier",
        "Child & Family Social Worker",
        "Civil Engineer",
        "Clinical Laboratory Technician",
        "Clinical Social Worker",
        "Compliance Officer",
        "Computer Programmer",
        "Computer Systems Administrator",
        "Computer Systems Analyst",
        "Construction Manager",
        "Construction Worker",
        "Cost Estimator",
        "Customer Service Representative",
        "Dental Assistant",
        "Dental Hygienist",
        "Dentist",
        "Delivery Truck Driver",
        "Diagnostic Medical Sonographer",
        "Epidemiologist",
        "Electrician",
        "Elementary School Teacher",
        "Executive Assistant",
        "Fabricator",
        "Financial Advisor",
        "Financial Analyst",
        "Financial Manager",
        "Glazier",
        "Hairdresser",
        "High School Teacher",
        "Home Health Aide",
        "HR Specialist",
        "Insurance Agent",
        "Interpreter & Translator",
        "IT Manager",
        "Janitor",
        "Landscaper & Groundskeeper",
        "Lawyer",
        "Loan Officer",
        "Logistician",
        "Maintenance & Repair Worker",
        "Management Analyst",
        "Market Research Analyst",
        "Marketing Manager",
        "Marriage & Family Therapist",
        "Massage Therapist",
        "Maid & Housekeeper",
        "Mechanical Engineer",
        "Medical Assistant",
        "Medical Secretary",
        "Meeting, Convention & Event Planner",
        "Mental Health Counselor",
        "Middle School Teacher",
        "Nursing Aide",
        "Occupational Therapist",
        "Painter",
        "Paramedic",
        "Paralegal",
        "Patrol Officer",
        "Personal Care Aide",
        "Pharmacist",
        "Pharmacy Technician",
        "Physical Therapist",
        "Physical Therapist Assistant",
        "Physician",
        "Plumber",
        "Preschool Teacher",
        "Public Relations Specialist",
        "Radiologic Technologist",
        "Real Estate Agent",
        "Receptionist",
        "Recreation & Fitness Worker",
        "Registered Nurse",
        "Restaurant Cook",
        "Respiratory Therapist",
        "Sales Manager",
        "Sales Representative",
        "School Counselor",
        "School Psychologist",
        "Security Guard",
        "Software Developer",
        "Speech-Language Pathologist",
        "Sports Coach",
        "Substance Abuse Counselor",
        "Teacher Assistant",
        "Telemarketer",
        "Veterinarian",
        "Veterinary Technologist & Technician",
        "Web Developer",
    ]);

    const [locations, setLocations] = useState([
        "Aberdeen",
        "Armagh",
        "Bangor",
        "Bath",
        "Belfast",
        "Birmingham",
        "Bradford",
        "Brighton & Hove",
        "Bristol",
        "Cambridge",
        "Canterbury",
        "Cardiff",
        "Carlisle",
        "Chelmsford",
        "Chester",
        "Chichester",
        "Colchester",
        "Coventry",
        "Derby",
        "Doncaster",
        "Dundee",
        "Durham",
        "Ely",
        "Edinburgh",
        "Exeter",
        "Glasgow",
        "Gloucester",
        "Hereford",
        "Inverness",
        "Kingston-upon-Hull",
        "Lancaster",
        "Leeds",
        "Leicester",
        "Lichfield",
        "Lincoln",
        "Lisburn",
        "Liverpool",
        "Londonderry",
        "London",
        "Manchester",
        "Milton Keynes",
        "Newcastle-upon-Tyne",
        "Newport",
        "Newry",
        "Norwich",
        "Nottingham",
        "Oxford",
        "Perth",
        "Peterborough",
        "Plymouth",
        "Portsmouth",
        "Preston",
        "Ripon",
        "Salford",
        "Salisbury",
        "Sheffield",
        "Southampton",
        "Southend-on-Sea",
        "St Albans",
        "St Asaph",
        "St Davids",
        "Stirling",
        "Stoke on Trent",
        "Sunderland",
        "Swansea",
        "Truro",
        "Wakefield",
        "Wells",
        "Westminster",
        "Wolverhampton",
        "Worcester",
        "Wrexham",
        "York",
    ]);

    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const params = {};
            params.results_per_page = 20;
            if (job) params.what = job;
            if (whatAnd) params.what_and = whatAnd;
            if (whatPhrase) params.what_phrase = whatPhrase;
            if (whatOr) params.what_or = whatOr;
            if (whatExclude) params.what_exclude = whatExclude;
            if (titleOnly) params.title_only = titleOnly;
            if (location) params.where = location;
            if (distance) params.distance = distance;
            if (maxDaysOld) params.max_days_old = maxDaysOld;
            if (category) params.category = category;
            if (sortDir) params.sort_dir = sortDir;
            if (salaryMin) params.salary_min = salaryMin;
            if (salaryMax) params.salary_max = salaryMax;
            if (salaryIncludeUnknown)
                params.salary_include_unknown = salaryIncludeUnknown;
            if (fullTime) params.full_time = fullTime;
            if (partTime) params.part_time = partTime;
            if (contract) params.contract = contract;
            if (permanent) params.permanent = permanent;
            if (company) params.company = company;

            // Construct the query string with only the defined parameters
            const queryString = Object.entries(params)
                .map(
                    ([key, value]) =>
                        value && `${key}=${encodeURIComponent(value)}`
                )
                .filter(Boolean)
                .join("&");

            router.push(`/job-search/?${queryString}`);
        } catch (error) {
            console.error("Error searching for jobs:", error);
        }
    };

    const handleJobChange = (e, newValue) => {
        setJob(newValue);
    };

    const handleNewJobChange = (newValue) => {
        const jobValue =
            typeof newValue === "string" ? newValue : newValue?.inputValue; // Handle user typed string and inputValue from Autocomplete
        if (jobValue) {
            setJob(jobValue);
        } else {
            setJob("");
        }
    };

    const handleLocationChange = (e, newValue) => {
        setLocation(newValue);
    };

    const handleNewLocationChange = (newValue) => {
        const locationValue =
            typeof newValue === "string" ? newValue : newValue?.inputValue; // Handle user typed string and inputValue from Autocomplete
        if (locationValue) {
            setLocation(locationValue);
        } else {
            setLocation("");
        }
    };

    const filterOptions = (options, state) => {
        const inputValue = state.inputValue
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "");

        return options.filter((option) =>
            option.toLowerCase().startsWith(inputValue)
        );
    };

    return (
        <>
            <div
                className="col-lg-12 col-md-12 col-sm-12 job-connect-form form-find wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
            >
                <form onSubmit={handleSearch}>
                    <div className="input-group">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="input-group-item">
                                <TbTarget className="icon" />
                                <Autocomplete
                                    freeSolo
                                    id="job-autocomplete"
                                    options={jobs}
                                    filterOptions={filterOptions}
                                    value={job}
                                    onChange={handleJobChange}
                                    renderInput={(params) => (
                                        <TextField
                                            sx={{
                                                border: "none !important",
                                                "&:focus": {
                                                    border: "none !important",
                                                },
                                                "& .MuiInputBase-input": {
                                                    border: "none !important",
                                                    height: "auto",
                                                    width: "auto !important",
                                                },
                                            }}
                                            {...params}
                                            placeholder="Enter job name, company or title"
                                            variant="standard"
                                            InputProps={{
                                                ...params.InputProps,
                                                disableUnderline: true,
                                                endAdornment: null,
                                            }}
                                            onChange={(e) =>
                                                handleNewJobChange(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    )}
                                    className="job-search-top-one"
                                />
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="input-group-item">
                                <CiLocationOn className="icon" />
                                <Autocomplete
                                    freeSolo
                                    id="location-autocomplete"
                                    options={locations}
                                    filterOptions={filterOptions}
                                    value={location}
                                    onChange={handleLocationChange}
                                    renderInput={(params) => (
                                        <TextField
                                            sx={{
                                                border: "none !important",
                                                "&:focus": {
                                                    border: "none !important",
                                                },
                                                "& .MuiInputBase-input": {
                                                    border: "none !important",
                                                    height: "auto",
                                                    width: "auto !important",
                                                },
                                            }}
                                            {...params}
                                            placeholder="City, region, postcode or country"
                                            variant="standard"
                                            InputProps={{
                                                ...params.InputProps,
                                                disableUnderline: true,
                                                endAdornment: null,
                                            }}
                                            onChange={(e) =>
                                                handleNewLocationChange(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    )}
                                    className="job-search-top-one"
                                />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12">
                            <button
                                type="submit"
                                className="btn btn-success btn-search"
                            >
                                <IoSearchSharp className="searchIcon" />
                                SEARCH
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default JobConnectSearchBox;
