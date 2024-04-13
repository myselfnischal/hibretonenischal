import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function GrantFinderSearchBox() {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        const queryParams = new URLSearchParams();

        if (keyword) queryParams.append("keyword", keyword);
        if (category) queryParams.append("category", category);
        if (location) queryParams.append("location", location); 

        queryParams.append("page", 1);
        queryParams.append("limit", 10);

        router.push(`/grant-finder/search/?${queryParams.toString()}`);
    };

    const categories = [
        { category_id: 1, category_name: "Community" },
        { category_id: 2, category_name: "Environment" },
        { category_id: 3, category_name: "Research" },
        { category_id: 4, category_name: "Technology" },
        { category_id: 5, category_name: "Education" },
        { category_id: 6, category_name: "Business" },
        { category_id: 7, category_name: "Disability" },
        { category_id: 8, category_name: "Equal Opportunities" },
        { category_id: 9, category_name: "People & Families" },
        { category_id: 10, category_name: "Health" },
        { category_id: 11, category_name: "Arts" },
        { category_id: 12, category_name: "Rural" },
        { category_id: 13, category_name: "Equality & Diversity" },
        { category_id: 14, category_name: "Regeneration" },
        { category_id: 15, category_name: "Religion" },
        { category_id: 16, category_name: "Social Enterprise" },
        { category_id: 17, category_name: "Leisure & Tourism" },
        { category_id: 18, category_name: "Employment" },
        { category_id: 19, category_name: "Crime" },
        { category_id: 20, category_name: "Young People" },
    ];

    const locations = [
        { label: "National", label_id: "0" },
        { label: "England", label_id: "1" },
        { label: "Scotland", label_id: "2" },
        { label: "Wales", label_id: "3" },
        { label: "Northern Ireland", label_id: "4" },
    ];

    return (
        <>
            <div
                className="form-find mt-40 mb-30 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={4}>
                        <TextField
                            fullWidth
                            label="Keyword"
                            variant="standard"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={categories} 
                            getOptionLabel={(option) => option.category_name} 
                            onChange={(event, newValue) => {
                                setCategory(
                                    newValue ? newValue.category_id : ""
                                ); 
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Category"
                                    variant="standard"
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={locations} 
                            getOptionLabel={(option) => option.label} 
                            onChange={(event, newValue) => {
                                setLocation(newValue ? newValue.label_id : ""); 
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Location"
                                    variant="standard"
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} lg={2}>
                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            startIcon={<SearchIcon />}
                            sx={{
                                backgroundColor: "rgb(58, 171, 103)",
                                "&:hover": {
                                    backgroundColor: "#339e5c",
                                },
                                height: "45px",
                            }}
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </div>
            {/* <div
                className="list-tags-banner mt-10 mb-30 ml-20 wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
            >
                <strong>Popular Searches:</strong>
                <Link legacyBehavior href="#">
                    <a>Education </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Small Business </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Research </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Nonprofit </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Healthcare </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Technology </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Environmental </a>
                </Link>
            </div> */}
        </>
    );
}

export default GrantFinderSearchBox;
