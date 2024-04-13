import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const AdvancedFilter = ({ job, location, resultPerPage }) => {
    const [filters, setFilters] = useState({
        industry: [],
        salaryRange: [10000, 200000],
        keyword: [],
        position: [],
        experienceLevel: [],
        onsiteRemote: [],
        jobPosted: [],
        jobType: [],
        contract: [],
        resultPerPage: 20,
    });

    const handleContractChange = (event, value) => {
        const { checked } = event.target;
        setFilters((prevState) => ({
            ...prevState,
            contract: checked
                ? [...prevState.contract, value]
                : prevState.contract.filter((item) => item !== value),
        }));
    };

    const handleSalaryChange = (event, newValue) => {
        setFilters((prevState) => ({
            ...prevState,
            salaryRange: newValue,
        }));
    };

    const handleJobTypeChange = (event) => {
        const { value } = event.target;
        setFilters((prevState) => ({
            ...prevState,
            jobType: value,
        }));
    };

    const handleResultPerPageChange = (event) => {
        const { value } = event.target;
        setFilters((prevState) => ({
            ...prevState,
            resultPerPage: value,
        }));
    };

    const handleApplyFilter = () => {
        // Implement logic to apply filters
    };

    const handleReset = () => {
        setFilters({
            industry: [],
            salaryRange: [0, 500],
            keyword: [],
            position: [],
            experienceLevel: [],
            onsiteRemote: [],
            jobPosted: [],
            jobType: [],
            contract: [],
            resultPerPage: 20,
        });
    };

    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="containerStyles">
                <div className="sidebar-shadow none-shadow mb-30">
                    <div className="sidebar-filters">
                        <div className="filter-block head-border mb-30">
                            <h4>
                                Advance Filter
                                <a className="link-reset" onClick={handleReset}>
                                    Reset
                                </a>
                            </h4>
                        </div>

                        <div className="filter-block mb-30">
                            <h5 className="medium-heading mb-10">
                                Salary Range
                            </h5>
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    value={filters.salaryRange}
                                    onChange={handleSalaryChange}
                                    valueLabelDisplay="auto"
                                    aria-label="Salary Range"
                                    min={10000}
                                    max={200000}
                                    marks={[
                                        { value: 10000, label: "100000" },
                                        { value: 200000, label: "200000" },
                                    ]}
                                    step={1}
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                        </div>

                        <div className="filter-block mb-30">
                            <h5 className="medium-heading mb-10">Job Type</h5>
                            <div className="form-group">
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        aria-label="jobType"
                                        name="jobType"
                                        value={filters.jobType}
                                        onChange={handleJobTypeChange}
                                    >
                                        <FormControlLabel
                                            value="fullTime"
                                            control={<Radio />}
                                            label="Full Time"
                                        />
                                        <FormControlLabel
                                            value="partTime"
                                            control={<Radio />}
                                            label="Part Time"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>

                        <div className="filter-block mb-30">
                            <h5 className="medium-heading mb-10">Contract</h5>
                            <div className="form-group">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={filters.contract.includes(
                                                    "Permanent"
                                                )}
                                                onChange={(event) =>
                                                    handleContractChange(
                                                        event,
                                                        "Permanent"
                                                    )
                                                }
                                            />
                                        }
                                        label="Permanent"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={filters.contract.includes(
                                                    "Temporary"
                                                )}
                                                onChange={(event) =>
                                                    handleContractChange(
                                                        event,
                                                        "Temporary"
                                                    )
                                                }
                                            />
                                        }
                                        label="Temporary"
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="filter-block mb-30">
                            <h5 className="medium-heading mb-10">
                                Result Per Page
                            </h5>
                            <div className="form-group">
                                <FormControl fullWidth>
                                    <InputLabel id="result-per-page-label">
                                        Result Per Page
                                    </InputLabel>
                                    <Select
                                        labelId="result-per-page-label"
                                        id="result-per-page-select"
                                        value={filters.resultPerPage}
                                        onChange={handleResultPerPageChange}
                                    >
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className="filter-block mb-30">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleApplyFilter}
                            >
                                Apply Filter
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedFilter;
