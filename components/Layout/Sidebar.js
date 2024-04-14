import Link from "next/link";
import 'react-perfect-scrollbar/dist/css/styles.css';
import React, {useState} from "react";

const Sidebar = ({openClass}) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…"/><i className="fi-rr-search"/>
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* mobile menu start*/}
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        {/* <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/"><a className="active">Home</a></Link>

                                            <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link legacyBehavior href="/"><a>Home 1</a></Link>
                                                    </li>
                                                <li>
                                                    <Link legacyBehavior href="/index-2"><a>Home 2</a></Link>
                                                    </li>
                                                <li>
                                                    <Link legacyBehavior href="/index-3"><a>Home 3</a></Link>
                                                    </li>
                                                <li>
                                                    <Link legacyBehavior href="/index-4"><a>Home 4</a></Link>
                                                    </li>
                                                <li>
                                                    <Link legacyBehavior href="/index-5"><a>Home 5</a></Link>
                                                    </li>
                                                <li>
                                                    <Link legacyBehavior href="/index-6"><a>Home 6</a></Link>
                                                    </li>
                                            </ul>
                                        </li> */}
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i
                                                className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/"><a>Business Builder</a></Link>

                                            <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link legacyBehavior href="/entrepreneur-assessments"><a>Entrepreneur
                                                        Assessments</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior
                                                          href="https://innovatio.bubbleapps.io/version-test/entre_academy">
                                                        <a>Entrepreneur Academy</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/"><a>Scholarships & Bursaries</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)} className="menu-expand"><i
                                                className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/"><a>Funding Builder</a></Link>

                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link legacyBehavior href="/r&d-tax-credits-calculator"><a>R&D Tax
                                                        Credits Calculator</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/"><a>Investability Rating</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/grant-finder"><a>Grant Finder</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior
                                                          href="https://www.grant.ecites.co.ke/login.php"><a>Grant
                                                        Writer</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)} className="menu-expand"><i
                                                className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/candidates-grid"><a>Resource Builder</a></Link>

                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link legacyBehavior href="/ecosystem-connector"><a>Ecosystem
                                                        Connector</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/business-plan-writer"><a>Business Plan
                                                        Writer</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/business-problem-triage"><a>Business
                                                        Problem Triage</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/industry-intelligence"><a>Industry Intelligence</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)} className="menu-expand"><i
                                                className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/blog-grid"><a>Career Builder</a></Link>

                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link legacyBehavior href="/online-courses"><a>Online
                                                        Courses</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/"><a>Career Guidance</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/job-connect"><a>Job Connect</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 6 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(6)} className="menu-expand"><i
                                                className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/blog-grid"><a>About Us</a></Link>

                                            <ul className={isActive.key == 6 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link legacyBehavior href="/"><a>Pricing</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/"><a>Contact Us</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="/page-contact"><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link legacyBehavior href="#"><a>Profile</a></Link>
                                    </li>

                                    <li>
                                        <Link legacyBehavior href="#"><a>Account Settings</a></Link>
                                    </li>

                                    <li>
                                        <Link legacyBehavior href="/page-signin"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright">Copyright 2024 © hibretOne</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Sidebar;
