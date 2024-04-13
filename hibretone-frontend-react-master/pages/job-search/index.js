import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import JobConnectHeader from "../../components/elements/JobConnectHeader";
import JobBox from "./JobBox";
import AdvancedFilter from "../../components/elements/AdvancedFilter";
import { useQuery, QueryClient } from "react-query";
import { useRouter } from "next/router";
import JobConnectSearchBox from "../../components/elements/JobConnectSearchBox";
import CustomPagination from "../../components/elements/CustomPagination";
import JobDetail from "./JobDetail";

// Initialize QueryClient outside the component
const queryClient = new QueryClient();

const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
};

export default function Index() {
    const router = useRouter();
    const { query } = router;
    const [job, setJob] = useState("");
    const [location, setLocation] = useState("");
    const [resultPerPage, setResultPerPage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const isMounted = useRef(false);

    const fetchData = async () => {
        const queryString = Object.entries(query)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");

        const url = `http://localhost:8000/job-connect/jobs/gb/search/${currentPage}?${queryString}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    };

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        setJob(query.what || "");
        setLocation(query.where || "");
        setResultPerPage(query.results_per_page || "");
    }, [currentPage, query]);

    const queryToString = (query) => {
        return Object.entries(query)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleJobClick = (jobId) => {
        setSelectedJobId(jobId); // Set the selected job ID when a job is clicked
    };

    const clearSelectedJob = () => {
        setSelectedJobId(null); // Clear the selected job ID
    };

    const {
        data: searchData,
        isLoading,
        isError,
    } = useQuery(
        ["jobs", currentPage, query],
        () => fetchData(queryToString(query)),
        {
            queryClient: queryClient, // Pass the initialized QueryClient
        }
    );

    return (
        <Layout>
            <div>
                <JobConnectHeader />
                <section className="section-box mt-50">
                    <JobConnectSearchBox
                        defaultJob={job}
                        defaultLocation={location}
                    />
                </section>

                <div
                    className="background-random"
                    style={{ position: "relative" }}
                ></div>
                {/* Conditional rendering of JobDetail component */}
                {selectedJobId ? (
                    <JobDetail
                        jobId={selectedJobId}
                        searchData={searchData}
                        clearSelectedJob={clearSelectedJob}
                    />
                ) : (
                    <section className="section-box mt-50">
                        {/* <div className="post-loop-grid"> */}
                        <div className="container containerStyles">
                            <h4 className="mt-5">
                                {searchData && searchData.count && (
                                    <>
                                        {searchData.count}{" "}
                                        {job.charAt(0).toUpperCase() +
                                            job.slice(1).toLowerCase()}{" "}
                                        Jobs in{" "}
                                        {location.charAt(0).toUpperCase() +
                                            location.slice(1).toLowerCase()}
                                    </>
                                )}
                            </h4>
                            <div className="row">
                                <div className="col-lg-3 col-md-12 col-sm-12 d-flex mt-50 advance-filter">
                                    <AdvancedFilter
                                        job={job}
                                        location={location}
                                        resultPerPage={resultPerPage}
                                    />
                                </div>
                                <div className="col-lg-9 col-md-12 col-sm-12 d-flex mt-50 job-box">
                                    <div className="spacer" />
                                    <div>
                                        {isLoading ? (
                                            // Display loading spinner while data is loading
                                            <div className="loading-spinner"></div>
                                        ) : isError ? (
                                            <div>Error fetching data</div>
                                        ) : (
                                            <div className="job-listing flex-column">
                                                <JobBox
                                                    searchData={searchData}
                                                    onJobClick={handleJobClick}
                                                />
                                                {searchData &&
                                                    searchData.count && (
                                                        <CustomPagination
                                                            currentPage={
                                                                currentPage
                                                            }
                                                            totalPages={Math.ceil(
                                                                searchData.count /
                                                                    resultPerPage
                                                            )}
                                                            onPageChange={
                                                                handlePageChange
                                                            }
                                                            setCurrentPage={
                                                                setCurrentPage
                                                            }
                                                        />
                                                    )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </section>
                )}
                <section className="section-box mt-75">
                    <YellowBanner />
                </section>
                <Subscription />
            </div>
        </Layout>
    );
}
