import React, { useState, useRef } from "react";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({locations, placeholder, countries, submitFunction}) {
    const searchInput = useRef(null)
    const StyledTextField = styled(TextField)({
        "& .MuiInput-underline:before": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none",
        },
    });

    return (
        <>
            <div
                className="form-find mt-40 mb-10 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={7}>
                        <TextField
                            fullWidth
                            label={placeholder}
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={locations}
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
                            ref={searchInput}
                            onClick={() => submitFunction(searchInput.current.value)}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default SearchBar;
