import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const JobBox = ({ searchData, onJobClick }) => {
    const [postedTimes, setPostedTimes] = useState([]);
    const [likedJobs, setLikedJobs] = useState({});

    useEffect(() => {
        if (!searchData) return;

        // Initialize liked state for each job item
        const initialLikedState = {};
        searchData.results.forEach((job, index) => {
            initialLikedState[index] = false;
        });
        setLikedJobs(initialLikedState);

        // Calculate posted time for each job and store them in an array
        const calculatedPostedTimes = searchData.results.map((job) => {
            const currentDate = new Date();
            const jobCreationDate = new Date(job.created);

            // Calculate difference in milliseconds
            const differenceInMs = Math.abs(currentDate - jobCreationDate);

            // Convert milliseconds to days
            const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

            if (differenceInDays < 1) {
                return "Just now";
            } else if (differenceInDays < 2) {
                return "1 day ago";
            } else if (differenceInDays < 7) {
                return `${Math.floor(differenceInDays)} days ago`;
            } else {
                const weeks = Math.floor(differenceInDays / 7);
                return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
            }
        });

        setPostedTimes(calculatedPostedTimes);
    }, [searchData]);

    // Function to limit the description text
    const limitDescription = (description, limit = 150) => {
        const shortened = description.trim().substring(0, limit);
        return shortened.replace(/• /g, "<br>• ") + "...";
    };

    const toggleLike = (index) => {
        setLikedJobs((prevLikedJobs) => ({
            ...prevLikedJobs,
            [index]: !prevLikedJobs[index],
        }));
    };

    return (
        <div>
            {/* Check if searchData exists, then display it */}
            {searchData && (
                <div>
                    {/* Render the data as needed */}
                    {searchData.results.map((job, index) => (
                        <div key={index} className="containerStyles">
                            <div className="row display-list">
                                <div className="col-xl-12 col-12 mb-25">
                                    <div className="card-grid-2 hover-up">
                                        <span className="flash mr-20" />
                                        <div className="row ml-20">
                                            <div className="right-info">
                                                <h4
                                                    className="mt-20 mr-50"
                                                    // onClick={
                                                    //     () => onJobClick(job.id) // Set selected job ID when job title is clicked
                                                    // }
                                                >
                                                    {job.title}
                                                    <FavoriteIcon
                                                        className={`heart-icon ${
                                                            likedJobs[index]
                                                                ? "liked"
                                                                : ""
                                                        } mr-20`}
                                                        onClick={() =>
                                                            toggleLike(index)
                                                        }
                                                    />
                                                </h4>

                                                <h5 className="mt-10">
                                                    Company:{" "}
                                                    {job.company.display_name}
                                                </h5>
                                            </div>
                                            <div className="card-block-info mr-20">
                                                {job.company.logo && (
                                                    <img
                                                        src={job.company.logo}
                                                        alt={
                                                            job.company
                                                                .display_name
                                                        }
                                                    />
                                                )}
                                                <h6>
                                                    <span className="card-location">
                                                        {
                                                            job.location
                                                                .display_name
                                                        }
                                                    </span>
                                                </h6>
                                                <div className="mt-5">
                                                    <span className="card-time">
                                                        {/* Display calculated posted time */}
                                                        {postedTimes[index]}
                                                    </span>
                                                    <span className="ml-5 card-contract">
                                                        {/* Display job type */}
                                                        {job.contract_type
                                                            ? `Contract: ${job.contract_type}`
                                                            : ""}
                                                    </span>
                                                    <span className="ml-5 card-briefcase">
                                                        {/* Display job type */}
                                                        {job.contract_time}
                                                    </span>
                                                </div>
                                                <div
                                                    className="color-text-paragraph mt-10 mr-40 mb-10 justify-text"
                                                    dangerouslySetInnerHTML={{
                                                        __html: limitDescription(
                                                            job.description
                                                        ),
                                                    }}
                                                />
                                                <div className="row mr-40">
                                                    <div className="col-lg-7 col-7">
                                                        <span className="text-muted">
                                                            {job.salary_min ===
                                                            job.salary_max
                                                                ? `Salary: `
                                                                : `Salary Range: `}
                                                        </span>
                                                        <span className="card-text text-primary">
                                                            {job.salary_min ===
                                                            job.salary_max
                                                                ? `£ ${job.salary_max}`
                                                                : `£ ${job.salary_min} - £ ${job.salary_max}`}
                                                        </span>
                                                    </div>

                                                    <div className="col-lg-5 col-5 text-end">
                                                        <button
                                                            className="btn btn-apply-now"
                                                            onClick={() => {
                                                                window.location.href =
                                                                    job.redirect_url;
                                                            }}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Apply now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!searchData && <p>No search data available.</p>}
        </div>
    );
};

export default JobBox;
