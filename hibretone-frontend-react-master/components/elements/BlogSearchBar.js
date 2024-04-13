import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from 'next/router';

const BlogSearchBar = () => {

    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        router.push("/blog-page/blog-inner-page");
    };

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


    return (
        <>
            <div className="blog-form-find-top wow animate_animated animate_fadeInUp">
                <form>
                    <input
                        className="blog-one"
                        type="text"
                        placeholder="Enter name of blog, article or the insight you require"
                        style={{ marginTop: "5px" }}
                    />
                    <div className="divider"></div>
                    <Autocomplete
                        clearOnEscape
                        options={locations}
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
                                label="City, region or country"
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                            />
                        )}
                        className="blog-two"
                    />
                    
                    <button onClick={handleSearch} className="blog-btn-search" style={{ marginLeft: '25px' }}>SEARCH</button>

                </form>
            </div>
        </>
    );
};

export default BlogSearchBar;