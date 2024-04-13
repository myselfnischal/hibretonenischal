import React, { useEffect, useState } from 'react';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const articleData = [

    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/629c9c4325ed5f92839a58c331e436fd74bc98fa66291e67e4c66d59917c259e?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        category: "News",
        title: "10 Grant Finding Tips: How To Succeed in seeking out funding",
        description:
            "Right now is one of the best times to seek grant funding to grow or scale your business. Top proven tips to aid in seeking out & being successful in aligning with funders.",
        author: {
            image: "/assets/imgs/page/about-us/Alayna.jpg",
            name: "Alayna White ",
            date: "06 September",
        },
        readTime: "7 mins to read",
    },

    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f90c0d2513ac58cc0d7ee1d11bf7a9ed8a2437d3b8eda79a16c9b04fe486571?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        category: "News",
        title: "10 Business Survival Tips: How To Beat Survivability  Odds ",
        description:
            "With only 60% of businesses surviving past 3 years, we provide the top tips to help any startup survive beyond the valley of death.",
        author: {
            image: "/assets/imgs/page/about-us/Drew.jpg",
            name: "Drew Currie",
            date: "16 October",
        },
        readTime: "6 mins to read",
    },

    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5613dd241fd0a1271d773e8a9cf82536999129bc6c03ed3dcd955ab793bda489?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        category: "News",
        title: "10 Job Interview Tips: How To Make a Great Impression",
        description:
            "First impressions count, especially at interviews. Proven, effective, learned tips to give you the edge over the other applicants.",
        author: {
            image: "/assets/imgs/page/about-us/Denise.jpg",
            name: "Denise Myers",
            date: "12 November",
        },
        readTime: "8 mins to read",
    },

    {
        image: "/assets/imgs/page/about-us/fundraising.jpeg",
        category: "News",
        title: "10 Fundraising Tips: Alternatives to Equity Funding",
        description:
            "An overview of the different ways that an entrepreneur can raise capital to fund their new business.",
        author: {
            image: "/assets/imgs/page/about-us/Women.jpg",
            name: "Vernon Hogg",
            date: "17 March 2024",
        },
        readTime: "4 mins to read",
    },

    {
        image: "/assets/imgs/page/about-us/businessplan.jpeg",
        category: "News",
        title: "10 Business Plan Tips: Main headings in a successful plan",
        description:
            "Every small business needs a detailed business plan. Find out how your business plan can help your business grow and succeed, why it's so important and how to get started.",
        author: {
            image: "/assets/imgs/page/about-us/Pam.jpg",
            name: "Pam Sheemar",
            date: "10 February 2024",
        },
        readTime: "6 mins to read",
    },
    {
        image: "/assets/imgs/page/about-us/showmethemoney.jpg",
        category: "Events",
        title: "Show Me The Money: Free Money & Grants Workshop",
        description:
            "If you’re an entrepreneur, an SME, an academic, a social enterprise, or a startup then this workshop will provide you with proven advice to secure grant funding.",
        author: {
            image: "/assets/imgs/page/about-us/hibretOne.png",
            name: "hibretOne",
            date: "17 March 2024",
        },
        readTime: "7 mins to read",
    },

];

export default function Aboutusnewsandeventscarouselfull() {
    const [swiperInstance, setSwiperInstance] = useState(null);


    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                100: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
        setSwiperInstance(mySwiper); // Change 'swiper' to 'mySwiper'

    }, []);

    const handlePrevious = () => {
        if (swiperInstance !== null) {
            swiperInstance.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperInstance !== null) {
            swiperInstance.slideNext();
        }
    };


    return (
        <section className="section-box section-box-newsandevents-aboutus" style={{marginTop:'55px'}}>
            <div className="post-loop-grid">
                <div className="container1">
                    <div className="text-center mb-40">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ fontSize: '40px' }}>News and Events</h2>
                        <p className="w-lg-50 mx-auto wow animate__animated animate__fadeInUp meetteamtext">Get the latest news, updates and tips
                        </p>
                    </div>
                    <div className="swiper-container" style={{ overflow: 'hidden' }}>
                        <div className="swiper-wrapper" >
                            {articleData.map((article, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="card-content">
                                        <img
                                            loading="lazy"
                                            src={article.image}
                                            alt="Article featured image"
                                            className="featured-image"
                                        />
                                        <div className="article-category">{article.category}</div>
                                        <a href="/blog-page/blog-inner-page">
                                            <div className="article-title-container">
                                                <div className="article-title-aboutus">{article.title}</div>
                                            </div>
                                        </a>
                                        <p className="article-description-aboutus">{article.description}</p>
                                        <div className="article-meta">
                                            <div className="author-info">
                                                <img
                                                    loading="lazy"
                                                    src={article.author.image}
                                                    alt={`${article.author.name}'s profile picture`}
                                                    className="author-image-aboutus"
                                                />
                                                <div className="author-details">
                                                    <div className="author-name-aboutus">{article.author.name}</div>
                                                    <div className="publish-date-aboutus">{article.author.date}</div>
                                                </div>
                                            </div>
                                            <div className="read-time-aboutus">{article.readTime}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            alt="" className="swiperprevious-aboutusfull"
                            onClick={handlePrevious}
                        />
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            alt="" className="swipernext-aboutusfull"
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}