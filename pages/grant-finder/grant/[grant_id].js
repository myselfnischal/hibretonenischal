/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function GrantDetails() {
    const router = useRouter();
    const [grantId, setGrantId] = useState(null);
    const [grantDetails, setGrantDetails] = useState([
        {
            grant_id: 0,
            category_id: 0,
            category_name: "",
            title: "",
            description: "",
            total_size_of_grant_scheme: 0,
            closing_date: "",
            location: "",
            grant_url: "",
            funding_organisation: "",
            who_can_apply: "",
            how_much_you_can_get: 0,
        },
    ]);

    useEffect(() => {
        if (router.isReady) {
            const { grant_id } = router.query;
            setGrantId(grant_id);
            const getGrantDetails = async () => {
                const reqOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                var url = "/grants/grant-details/items/" + grantId;
                const response = await fetch(url, reqOptions);

                const data = await response.json();
                if (!response.ok) {
                    console.log({ error: data.detail });
                } else {
                    setGrantDetails(data);
                }
            };
            if (grantId) {
                getGrantDetails();
            }
        }
    }, [router.isReady, router.query, grantId]);
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="box-border-single">
                                        <div className="row mt-10">
                                            <div className="col-lg-12 col-md-12">
                                                <h3>{grantDetails[0].title}</h3>
                                                {/* <div className="mt-0 mb-15">
                                                    <span className="card-briefcase">{grantDetails[0].title}</span>
                                                    <span className="card-time">closing date: {grantDetails[0].closing_date}</span>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="border-bottom pt-10 pb-10" />
                                        <div className="banner-hero banner-image-single mt-10 mb-20">
                                            <img
                                                src="/assets/imgs/page/job-single-2/img.png"
                                                alt="jobBox"
                                            />
                                        </div>
                                        <div className="job-overview">
                                            <h5 className="border-bottom pb-15 mb-30">
                                                Overview
                                            </h5>
                                            <div className="row">
                                                <div className="col-md-12 d-flex">
                                                    <div className="sidebar-icon-item">
                                                        <img
                                                            src="/assets/imgs/page/job-single/industry.svg"
                                                            alt="jobBox"
                                                        />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description industry-icon mb-10 mr-10">
                                                            Organisation
                                                        </span>
                                                        <strong className="small-heading">
                                                            {" "}
                                                            {
                                                                grantDetails[0]
                                                                    .funding_organisation
                                                            }
                                                        </strong>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item">
                                                        <img src="/assets/imgs/page/job-single/job-level.svg" alt="jobBox" />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description joblevel-icon mb-10">Job level</span>
                                                        <strong className="small-heading">Experienced (Non - Manager)</strong>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="row mt-25">
                                                <div className="col-md-12 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item">
                                                        <img
                                                            src="/assets/imgs/page/job-single/salary.svg"
                                                            alt="jobBox"
                                                        />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description salary-icon mb-10 mr-10">
                                                            Maximum Value
                                                        </span>
                                                        <strong className="small-heading">
                                                            {" "}
                                                            {
                                                                grantDetails[0]
                                                                    .total_size_of_grant_scheme
                                                            }
                                                        </strong>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6 d-flex">
                                                    <div className="sidebar-icon-item">
                                                        <img src="/assets/imgs/page/job-single/experience.svg" alt="jobBox" />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description experience-icon mb-10">Experience</span>
                                                        <strong className="small-heading">1 - 2 years</strong>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="row mt-25">
                                                {/* <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item">
                                                        <img src="/assets/imgs/page/job-single/job-type.svg" alt="jobBox" />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description jobtype-icon mb-10">Job type</span>
                                                        <strong className="small-heading">Permanent</strong>
                                                    </div>
                                                </div> */}
                                                <div className="col-md-12 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item">
                                                        <img
                                                            src="/assets/imgs/page/job-single/deadline.svg"
                                                            alt="jobBox"
                                                        />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description mb-10 mr-10">
                                                            Deadline
                                                        </span>
                                                        <strong className="small-heading">
                                                            {
                                                                grantDetails[0]
                                                                    .closing_date
                                                            }
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-25">
                                                {/* <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item">
                                                        <img src="/assets/imgs/page/job-single/updated.svg" alt="jobBox" />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description jobtype-icon mb-10">Updated</span>
                                                        <strong className="small-heading">10/07/2022</strong>
                                                    </div>
                                                </div> */}
                                                <div className="col-md-12 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item">
                                                        <img
                                                            src="/assets/imgs/page/job-single/location.svg"
                                                            alt="jobBox"
                                                        />
                                                    </div>
                                                    <div className="sidebar-text-info ml-10">
                                                        <span className="text-description mb-10 mr-10">
                                                            Location
                                                        </span>
                                                        <strong className="small-heading">
                                                            {
                                                                grantDetails[0]
                                                                    .location
                                                            }
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-single">
                                            <h4>Who Can Apply</h4>
                                            <p>
                                                {grantDetails[0].who_can_apply}
                                            </p>
                                            <h4>Grant Description</h4>
                                            <p>{grantDetails[0].description}</p>
                                        </div>

                                        <div className="single-apply-jobs">
                                            <div className="row align-items-center">
                                                <div className="col-md-5">
                                                    <Link
                                                        legacyBehavior
                                                        href={
                                                            grantDetails[0]
                                                                .grant_url
                                                        }
                                                    >
                                                        <a className="btn btn-default mr-15">
                                                            Apply now
                                                        </a>
                                                    </Link>

                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a className="btn btn-border">
                                                            Save Grant
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="col-md-7 text-lg-end social-share">
                                                    <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">
                                                        Share this
                                                    </h6>
                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a className="mr-5 d-inline-block d-middle">
                                                            <img
                                                                alt="jobBox"
                                                                src="/assets/imgs/template/icons/share-fb.svg"
                                                            />
                                                        </a>
                                                    </Link>

                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a className="mr-5 d-inline-block d-middle">
                                                            <img
                                                                alt="jobBox"
                                                                src="/assets/imgs/template/icons/share-tw.svg"
                                                            />
                                                        </a>
                                                    </Link>

                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a className="mr-5 d-inline-block d-middle">
                                                            <img
                                                                alt="jobBox"
                                                                src="/assets/imgs/template/icons/share-red.svg"
                                                            />
                                                        </a>
                                                    </Link>

                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a className="d-inline-block d-middle">
                                                            <img
                                                                alt="jobBox"
                                                                src="/assets/imgs/template/icons/share-whatsapp.svg"
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                    {/* <div className="sidebar-border">
                                        <div className="sidebar-heading">
                                            <div className="avatar-sidebar">
                                                <figure>
                                                    <img alt="jobBox" src="assets/imgs/page/job-single/avatar.png" />
                                                </figure>
                                                <div className="sidebar-info">
                                                    <span className="sidebar-company">AliThemes</span>
                                                    <span className="card-location">New York, US</span>
                                                    <Link legacyBehavior href="#">
                                                        <a className="link-underline mt-15">02 Open Jobs</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-list-job">
                                            <div className="box-map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150609575905!2d-87.6235655!3d41.886080899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1658551322537!5m2!1svi!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                            </div>
                                            <ul className="ul-disc">
                                                <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                                <li>Phone: (123) 456-7890</li>
                                                <li>Email: contact@Evara.com</li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="sidebar-border">
                                        <h6 className="f-18">Similar Grants</h6>
                                        <div className="sidebar-list-job">
                                            <span>Coming Soon!</span>
                                            {/* <ul>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>UI / UX Designer fulltime</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>3</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $250<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">New York, US</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>Java Software Engineer</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>5</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $500<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">Tokyo, Japan</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>Frontend Developer</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>8</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $650<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">Hanoi, Vietnam</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>Cloud Engineer</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>12</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $380<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">Losangl, Au</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>DevOps Engineer</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>34</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $140<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">Paris, France</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>Figma design UI/UX</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>45</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $290<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">New York, US</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>Product Manage</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>50</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $650<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">New York, US</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>UI / UX Designer</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>58</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $270<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">New York, US</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <div className="sidebar-border">
                                        <h6 className="f-18">Tags</h6>
                                        <div className="sidebar-list-job">
                                            {Array.isArray(
                                                grantDetails[0].category_name
                                            ) ? (
                                                grantDetails[0].category_name.map(
                                                    (one_category_name) => (
                                                        <a className="btn btn-tags-sm mr-5">
                                                            {one_category_name}
                                                        </a>
                                                    )
                                                )
                                            ) : grantDetails[0].category_name ? (
                                                <a className="btn btn-tags-sm mr-5">
                                                    {
                                                        grantDetails[0]
                                                            .category_name
                                                    }
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
