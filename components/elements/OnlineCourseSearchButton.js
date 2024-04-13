import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoSearchSharp } from "react-icons/io5";



function OnlineCourseSearchButton() {
    const router = useRouter();

    return (
        <>
            <div className="online-course-form-find wow animate__animated animate__fadeInUp">
                <form>
                    <input
                        className="online-course-input-top-five"
                        type="text"
                        placeholder="Enter the name of course or subject you wish to learn"
                    />
                    <button
                                type="submit"
                                className="btn-online-course-search"
                            >
                                <IoSearchSharp className="searchIcon" style={{marginTop:'-1px',marginRight:'5px'}}/>
                                SEARCH
                            </button>
                </form>
            </div>
        </>
    );
}

export default OnlineCourseSearchButton;