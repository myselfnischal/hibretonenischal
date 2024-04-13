/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { useRouter } from "next/router";

const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("is_logged_in", false);
    const [userAccount, setUserAccount] = useLocalStorage("user_account", {});
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", handleScroll);
    }, [scroll]);

    const handleLogout = async (e) => {
        await fetch("/auth/logout", {
            method: "POST",
        });
        setIsLoggedIn(false);
        setUserAccount({});
        router.push("/");
    };

    return (
        <>
            <header
                className={
                    scroll ? "header sticky-bar stick" : "header sticky-bar"
                }
            >
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link legacyBehavior href="/">
                                    <a className="d-flex">
                                        <img
                                            className="logo-img"
                                            alt="jobBox"
                                            src="/assets/imgs/template/hibretOne-logo.png"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li className="has-children">
                                        <Link legacyBehavior href="/">
                                            <a>Business Builder</a>
                                        </Link>

                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/entrepreneur-assessments"
                                                >
                                                    <a>
                                                        Entrepreneur Assessments
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior
                                                      href="https://innovatio.bubbleapps.io/version-test/entre_academy">
                                                    <a>Entrepreneur Academy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/page-scholarship"
                                                >
                                                    <a>
                                                        Scholarship & Bursaries
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link
                                            legacyBehavior
                                            href="/funding-builder"
                                        >
                                            <a>Funding Builder</a>
                                        </Link>

                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/r&d-tax-credits-calculator"
                                                >
                                                    <a>
                                                        R&D Tax Credits
                                                        Calculator
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/">
                                                    <a>Investability Rating</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/grant-finder"
                                                >
                                                    <a>Grant Finder</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="https://www.grant.ecites.co.ke/login.php"
                                                >
                                                    <a>Grant Writer</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link legacyBehavior href="/">
                                            <a>Resource Builder</a>
                                        </Link>

                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/ecosystem-connector"
                                                >
                                                    <a>Ecosystem Connector</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/business-plan-writer"
                                                >
                                                    <a>Business Plan Writer</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/business-problem-triage"
                                                >
                                                    <a>
                                                        Business Problem Triage
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="industry-intelligence">
                                                    <a>Industry Intelligence</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/">
                                                    <a>Evidence-led Research</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <Link legacyBehavior href="/blog-grid">
                                            <a>Career Builder</a>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/online-courses"
                                                >
                                                    <a>Online Courses</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/career-guidance"
                                                >
                                                    <a>Career Guidance</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/job-connect"
                                                >
                                                    <a>Job Connect</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-children">
                                        <Link legacyBehavior href="/about-us">
                                            <a>About Us</a>
                                        </Link>

                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/page-pricing"
                                                >
                                                    <a>Become a Partner</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/page-pricing"
                                                >
                                                    <a>Rewards Programme</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/blog-page"
                                                >
                                                    <a>Blog</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    legacyBehavior
                                                    href="/page-pricing"
                                                >
                                                    <a>Pricing</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/">
                                                    <a>Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div
                                className={`burger-icon burger-icon-white ${
                                    openClass && "burger-close"
                                }`}
                                onClick={() => {
                                    handleOpen();
                                    handleRemove();
                                }}
                            >
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right">
                            {isLoggedIn ? (
                                <>
                                    <nav className="nav-main-menu">
                                        <ul className="main-menu">
                                            <li className="has-children">
                                                <a href="#">
                                                    Hi,{" "}
                                                    {userAccount.first_name ||
                                                        "Guest"}
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link
                                                            legacyBehavior
                                                            href="/candidate-profile"
                                                        >
                                                            <a>Profile</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            legacyBehavior
                                                            href="#"
                                                        >
                                                            <a>Settings</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            onClick={
                                                                handleLogout
                                                            }
                                                        >
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </>
                            ) : (
                                <div className="block-signin">
                                    <Link legacyBehavior href="/page-register">
                                        <a className="text-link-bd-btom hover-up">
                                            Register
                                        </a>
                                    </Link>
                                    <Link legacyBehavior href="/page-signin">
                                        <a className="btn btn-default btn-shadow ml-40 hover-up">
                                            Sign in
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
