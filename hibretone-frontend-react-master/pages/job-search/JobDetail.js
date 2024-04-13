import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const JobDetail = ({ jobId, searchData }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        {job ? (
                            <div className="box-border-single">
                                <div className="row mt-10">
                                    <div className="col-lg-8 col-md-12">
                                        <h3>{job.title}</h3>
                                        <div className="mt-0 mb-15">
                                            <span className="card-time">
                                                
                                                {postedTimes[index]}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 text-lg-end">
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

                                <>
                                    <p>Company: {job.company.display_name}</p>
                                    <p>Location: {job.location.display_name}</p>
                                    <p>Description: {job.description}</p>
                                    
                                </>
                            </div>
                        ) : (
                            <p>No job found</p>
                        )}
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
