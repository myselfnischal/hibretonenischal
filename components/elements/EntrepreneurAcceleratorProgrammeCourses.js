/* eslint-disable @next/next/no-img-element */
import { fontSize } from "@mui/system";
import React, { useState } from "react";

export default function EntrepreneurAcceleratorProgrammeCourses() {
  const [showMore, setShowMore] = useState(false);
  const [showMoreTwo, setShowMoreTwo] = useState(false);


  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);
  const [showMore8, setShowMore8] = useState(false);
  const [showMore9, setShowMore9] = useState(false);
  const [showMore10, setShowMore10] = useState(false);
  const [showMore11, setShowMore11] = useState(false);
  const [showMore12, setShowMore12] = useState(false);
  const [showMore13, setShowMore13] = useState(false);
  const [showMore14, setShowMore14] = useState(false);
  const [showMore15, setShowMore15] = useState(false);
  const [showMore16, setShowMore16] = useState(false);
  const [showMore17, setShowMore17] = useState(false);
  const [showMore18, setShowMore18] = useState(false);
  const [showMore19, setShowMore19] = useState(false);
  const [showMore20, setShowMore20] = useState(false);




  const handleShowMore = () => {
    if (!showMore && !showMoreTwo) {
      setShowMore(true); // Show the first set of additional cards
    } else if (showMore && !showMoreTwo) {
      setShowMoreTwo(true); // Show the second set of additional cards
    }
  };
  
  
  const handleShowLess = () => {
        setShowMore(false);
        setShowMoreTwo(false); // Add this line to hide the second set of cards

    const cardSection = document.querySelector(
      ".card-list-inner-page-one-entrepreneur-academy"
    );
    if (cardSection) {
      const sectionTop = cardSection.offsetTop - 250;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  ;

  return (
    <>
      <div>
        <div className="card-list-inner-page-one-entrepreneur-academy mt-30 ">
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                    Course 1: Entrepreneurial Readiness
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                    People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                    Product
                  </p>
                </div>
                <p className="completion-course-percentage"> 37% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore1
                    ? "Develop essential entrepreneurial skills, by assessing your current skills, traits  and strengths, identifying your passions, conducting market research, and creating a business plan, you'll set the stage for a successful venture. Dive into financial evaluation, build a supportive network, learn from setbacks, and foster resilience."
                    : "Develop essential entrepreneurial skills, by assessing your current skills, traits  and strengths, identifying your passions, conducting market"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore1(!showMore1)}
                  >
                    {showMore1 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    12 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* 1 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                    Course 2: Sustainability
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                    Marketing
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                    Product
                  </p>
                </div>
                <p className="completion-course-percentage">37% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore2
                    ? "For entrepreneurs wanting to integrate sustainability into their business practices and contribute to building a greener and more sustainable future. Explore the importance of sustainability in entrepreneurship, learn about eco-friendly business strategies, and discover innovative ways to create a positive impact on the environment and society. Also cover topics such as sustainable business models, responsible supply chain management, and measuring the impact of sustainability efforts."
                    : "For entrepreneurs wanting to integrate sustainability into their business practices and contribute to building a greener and more sustainable"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore2(!showMore2)}
                  >
                    {showMore2 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    15 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 2 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img2.jpg"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 3: Product Progress
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  Product
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Marketing
                  </p>
                </div>
                <p className="completion-course-percentage">61% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore3
                    ? "Product development, from ideation to launch. Learn how to identify problems your product can solve, refine your ideas, create prototypes, and test their effectiveness."
                    : "Product development, from ideation to launch. Learn how to identify problems your product can solve, refine your ideas, create prototypes"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore3(!showMore3)}
                  >
                    {showMore3 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 3 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 4: Entrepreneurial Vision
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Marketing
                  </p>
                </div>
                <p className="completion-course-percentage">21% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore4
                    ? "Learn the importance of developing a clear vision and mission for your business. Understand how to identify your passion and purpose as an entrepreneur and master the art of storytelling to engage your audience. "
                    : "Learn the importance of developing a clear vision and mission for your business. Understand how to identify your passion and purpose as"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore4(!showMore4)}
                  >
                    {showMore4 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    14 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 4 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 5: Create The Brand
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  Product
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore5
                    ? "Creating a strong brand identity and strategy. Learn the importance of segmentation, marketing, and public relations in building a successful brand."
                    : "Creating a strong brand identity and strategy. Learn the importance of segmentation, marketing, and public relations in building"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore5(!showMore5)}
                  >
                    {showMore5 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    8 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 5 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 6: Equality, Diversity & Inclusion
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                    Marketing
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                    Product
                  </p>
                </div>
                <p className="completion-course-percentage">37% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore6
                    ? "Looking at the principles of equity, diversity, and inclusion (EDI), gaining insights on cultivating an inclusive environment in your organisation."
                    : "Looking at the principles of equity, diversity, and inclusion (EDI), gaining insights on cultivating an inclusive environment in your organisation."}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore6(!showMore6)}
                  >
                    {showMore6 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    12 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 6 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 7: Learning & Upskilling
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore7
                    ? "Attention will be directed towards the significance of continuous learning and skill development for maintaining a competitive edge in the entrepreneurial world. Create a comprehensive learning strategy, establish objectives, and explore diverse learning avenues to expand your skill set.  "
                    : "Attention will be directed towards the significance of continuous learning and skill development for maintaining a competitive edge in"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore7(!showMore7)}
                  >
                    {showMore7 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    12 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 7 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 8: Reality Check My Idea
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                    Marketing
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                    Product
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore8
                    ? "One will be guided in assessing the feasibility of business concepts by conducting a reality check. Acquire the skills to evaluate and select an appropriate business model, develop a sound financial plan, identify key team members, and adapt your ideas as necessary."
                    : "One will be guided in assessing the feasibility of business concepts by conducting a reality check. Acquire the skills to"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore8(!showMore8)}
                  >
                    {showMore8 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 8 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 9: People & Hiring
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore9
                    ? "Gain an understanding of creating comprehensive job descriptions, sourcing potential candidates, verifying their credentials, and assessing their skills, experience, and alignment with your organisational culture."
                    : "Gain an understanding of creating comprehensive job descriptions, sourcing potential candidates, verifying their credentials, and assessing"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore9(!showMore9)}
                  >
                    {showMore9 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
              </article>
            </div>   
      
{/* 9 end */}

<div className="card-inner-page-container">
    <article></article>
          </div>
                                
{!showMore && !showMoreTwo && (
<div className="col d-flex justify-content-center align-items-center">
        <button className="btn btn-default fs-6" onClick={handleShowMore}>
                Show More
        </button>
</div>
)}                             

{showMore && !showMoreTwo && (
        <><div className="card-inner-page-container">
        <article></article>
              </div>
              <div className="card-inner-page-container">
    <article></article>
          </div>
<div className="card-inner-page-container mobile-view">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 10: Customer Development
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore10
                    ? "Strong emphasis on recognizing the significance of comprehending your target customers and their requirements. Acquire the skills to conduct thorough customer research, construct customer personas, and validate your assumptions."
                    : "Strong emphasis on recognizing the significance of comprehending your target customers and their requirements."}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore10(!showMore10)}
                  >
                    {showMore10 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div> 
{/* 10 end  */}

<div className="card-inner-page-container mobile-view-2">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 11: Incorporation, IP, Employment & Legals 
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore11
                    ? "Provide knowledge about the legal considerations involved in operating a business. This encompasses selecting the appropriate legal framework, registering your business, employment law and safeguarding your intellectual property, patents. trademarks, copyrights."
                    : "Provide knowledge about the legal considerations involved in operating a business. This encompasses selecting the appropriate legal"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore11(!showMore11)}
                  >
                    {showMore11 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div> 
{/* 11 end  */}

<div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 12: Scaleup & Growth
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore12
                    ? "Fundamental aspects of expanding and advancing your business are shown. Explore techniques for attracting customers, projecting demand, evaluating opportunities, and establishing a resilient brand."
                    : "Fundamental aspects of expanding and advancing your business are shown. Explore techniques for attracting customers, projecting"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore12(!showMore12)}
                  >
                    {showMore12 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 12 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 13: Enterprise Resource Planning Systems (ERPs)
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore13
                    ? "Comprehending the significance of Enterprise Resource Planning Systems (ERPs) and their role in efficiently managing business operations. Acquire the skills to identify your specific business requirements, strategise implementation processes, and select the most suitable software solution."
                    : "Comprehending the significance of Enterprise Resource Planning Systems (ERPs) and their role in efficiently managing business"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore13(!showMore13)}
                  >
                    {showMore13 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 13 end */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 14: Product Launch
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore14
                    ? "The step-by-step process of introducing a new product to the market, starting from identifying your target audience to constructing an effective marketing strategy. Explore diverse product management methodologies, agile practices, and sales strategies."
                    : "The step-by-step process of introducing a new product to the market, starting from identifying your target audience to constructing an effective"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore14(!showMore14)}
                  >
                    {showMore14 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 14 end  */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 15: Environmental, Social and Governance (ESG)
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="article-description-inner-page-one-entrepreneur-academy" style={{fontSize:'16px !important'}}>
                  {showMore15
                    ? "The significance of Corporate Social Responsibility (CSR) in contemporary businesses. Discover the advantages of implementing CSR practices, its influence on the environment, and methods to integrate it into your overall business strategy."
                    : "The significance of Corporate Social Responsibility (CSR) in contemporary businesses. Discover the advantages of implementing CSR practices,"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore15(!showMore15)}
                  >
                    {showMore15 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 15 end  */}
<div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 16: Revenue Models
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore16
                    ? "A diverse range of revenue models and their significance in the business realm. Explore the factors that can impact revenue, methods to estimate enterprise value, and strategies for utilising revenue models to foster sustainability."
                    : "A diverse range of revenue models and their significance in the business realm. Explore the factors that can impact revenue, methods"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore16(!showMore16)}
                  >
                    {showMore16 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 16 end  */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 17: Product Development
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore17
                    ? "The various phases of product development, spanning generation of ideas, to the introduction of products in the market. Understand the significance of feedback, promotion, and the creation of a viable and profitable product in the long run."
                    : "The various phases of product development, spanning generation of ideas, to the introduction of products in the"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore17(!showMore17)}
                  >
                    {showMore17 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
{/* 17 end  */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 18: Funding & Finance
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore18
                    ? "Funding and financing alternatives accessible for your business or social enterprise. Learn how to assess your financial requirements, develop a funding strategy, and obtain the necessary resources to facilitate the growth of your enterprise. "
                    : "Funding and financing alternatives accessible for your business or social enterprise. Learn how to assess your financial"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore18(!showMore18)}
                  >
                    {showMore18 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
</>    
)}
{/* 18 end */}
<div className="card-inner-page-container">
    <article></article>
          </div>
{showMore && !showMoreTwo && (
  <div className="col d-flex justify-content-center align-items-center">
    <button className="btn btn-default fs-6" onClick={handleShowMore}>
      Show More
    </button>
  </div>
)}
{showMore && showMoreTwo && (
  <>
  <div className="card-inner-page-container ">
    <article></article>
          </div>
               <div className="card-inner-page-container mobile-view-last">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 19: Enterprise For Good
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore19
                    ? "The concept of Enterprise for Good and its profound moral influence on both society, the environment and the economy. Gain insights into the financial advantages, ethical considerations, and methods of integrating these principles into your business practices."
                    : "The concept of Enterprise for Good and its profound moral influence on both society, the environment and the economy. Gain"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore19(!showMore19)}
                  >
                    {showMore19 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div> 
{/* 19 end  */}
          <div className="card-inner-page-container">
            <article>
              <div className="card-content-inner-page-one-entrepreneur-academy">
                <img
                  loading="lazy"
                  src="/assets/imgs/page/online-courses/img1.png"
                  alt="Article featured image"
                  className="featured-image"
                />
                <a href="/entrepreneur-academy">
                  <div className="article-title-inner-page-one-entrepreneur-academy">
                  Course 20: Entrepreneurial Resilience
                  </div>
                </a>
                <div>
                  <p className="image-text-inner-page-one-entrepreneur-academy">
                  People
                  </p>
                  <p className="image-text-inner-page-one-entrepreneur-academy-type-one">
                  Customer
                  </p>
                </div>
                <p className="completion-course-percentage">67% </p>
                <div className="review-comment" style={{color:'#6C6E70'}}>
                  {showMore20
                    ? "Designed to equip aspiring and current entrepreneurs with the mindset, skills, and strategies needed to develop and maintain entrepreneurial resilience. Participants will learn to overcome obstacles, adapt to changing circumstances, and stay motivated on their entrepreneurial journey. Exploring various aspects of resilience, including emotional intelligence, problem-solving, risk management, and the importance of a strong support network."
                    : "Designed to equip aspiring and current entrepreneurs with the mindset, skills, and strategies needed to develop"}
                  <button
                    className="btn-show-more"
                    onClick={() => setShowMore20(!showMore20)}
                  >
                    {showMore20 ? "show less" : "...more"}
                  </button>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <img
                      loading="lazy"
                      src="/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png"
                      alt="Author's profile picture"
                      className="author-image-entrepreneur-academy"
                    />
                  </div>
                  <div className="read-time-entrepreneur-academy">
                    10 lessons
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="card-inner-page-container">
          </div>
          <div className="card-inner-page-container">
          </div>
    <div className="col d-flex justify-content-center align-items-center">
    <button className="btn btn-default fs-6" onClick={handleShowLess}>
      Show Less
    </button>
        </div>
        </>
       )}
      </div>
      </div>
    </>
  );
}
