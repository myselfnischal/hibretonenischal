/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import KickstartButton from '../../components/elements/KickstartButton';
import dynamic from "next/dynamic";
import BlogPageCarousel from './BlogPageCarousel';
import CustomPagination from '../../components/elements/CustomPagination';

const BlogTrendingTab = dynamic(
    () => import("../../components/elements/BlogTrendingTab"),
    { ssr: false }
);
import BlogPageHeading from '../../components/elements/BlogPageHeading';

const articleData1 = {
    image: "assets/imgs/page/blog-page/category4.jpeg",
    category: "News",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "assets/imgs/page/blog-page/user1.png",
        name: "Debbie Lewis",
        date: "06 September",
    },
    readTime: "7 mins to read",
};

const articleData2 = {
    image: "assets/imgs/page/blog-page/news3.jpeg",
    category: "News",
    title: "11 Tips for Student Work Placement success",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "assets/imgs/page/blog-page/Kristian.jpg",
        name: "David Bond",
        date: "16 October",
    },
    readTime: "6 mins to read",
};

const articleData3 = {
    image: "assets/imgs/page/blog-page/category1.jpeg",
    category: "News",
    title: "11 Tips to Help upskill your Career",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "assets/imgs/page/blog-page/user5.png",
        name: "Denise Myers",
        date: "12 November",
    },
    readTime: "8 mins to read",
};

const articleData4 = {
    image: "assets/imgs/page/blog-page/category2.jpeg",
    category: "News",
    title: "11 Grant Writing Tips: How To Exceed Expectations",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "assets/imgs/page/blog-page/Nick.jpg",
        name: "Tony Carr",
        date: "01 December",
    },
    readTime: "6 mins to read",
};

const articleData5 = {
    image: "assets/imgs/page/blog-page/category3.jpeg",
    category: "News",
    title: "11 Tips for Creating Social Impact",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "assets/imgs/page/blog-page/Kristian.jpg",
        name: "Heidi Fisher",
        date: "25 January",
    },
    readTime: "7 mins to read",
};

const articleData6 = {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0983fe02ce0fcfb84ec3cad70d39a7cf460a7bcbc4bff58c7624ee61a2183?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    category: "News",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/88d78fb5827d13af6209f7a0b8dd1a62eb0e4f770f395c55f3d305d36c0b8081?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        name: "Debbie Lewis",
        date: "19 February",
    },
    readTime: "8 mins to read",
};

export default function Index() {

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <Layout>
                <div className="background-random">

                    <div className="box-swiper">
                        <BlogPageHeading />
                    </div>
                    <div className="section-box wow animate__animated animate__fadeIn">
                        <div className="container mt-50" >
                            <BlogPageCarousel />
                        </div>
                    </div>

                    <section className="section-box mt-50 mb-15">
                        <div className="container">
                            <div className="flex-container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10">
                                        Trending Now
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                        Don't miss the trending news
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <BlogTrendingTab />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mb-15">
                        <div className="container">
                            <div className="flex-container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10">
                                        Latest Post
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                        Don't miss the trending news
                                    </p>
                                </div>

                                <div className="card-list mt-30">
                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData1.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="article-category">{articleData1.category}</div>

                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <div className="article-title">{articleData1.title}</div>
                                                </div>
                                            </a>
                                            <p className="article-description">{articleData1.description}</p>
                                            <div className="article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData1.author.image}
                                                        alt={`${articleData1.author.name}'s profile picture`}
                                                        className="author-image"
                                                    />
                                                    <div className="author-details">
                                                        <div className="author-name">{articleData1.author.name}</div>
                                                        <div className="publish-date">{articleData1.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="read-time">{articleData1.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData2.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="article-category">{articleData2.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <div className="article-title">{articleData2.title}</div>
                                                </div>
                                            </a>
                                            <p className="article-description">{articleData2.description}</p>
                                            <div className="article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData2.author.image}
                                                        alt={`${articleData2.author.name}'s profile picture`}
                                                        className="author-image"
                                                    />
                                                    <div className="author-details">
                                                        <div className="author-name">{articleData2.author.name}</div>
                                                        <div className="publish-date">{articleData2.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="read-time">{articleData2.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData3.image}
                                                alt="News3"
                                                className="featured-image"
                                            />
                                            <div className="article-category">{articleData3.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <div className="article-title">{articleData3.title}</div>
                                                </div>
                                            </a>
                                            <p className="article-description">{articleData3.description}</p>
                                            <div className="article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData3.author.image}
                                                        alt={`${articleData3.author.name}'s profile picture`}
                                                        className="author-image"
                                                    />
                                                    <div className="author-details">
                                                        <div className="author-name">{articleData3.author.name}</div>
                                                        <div className="publish-date">{articleData3.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="read-time">{articleData3.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData4.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="article-category">{articleData4.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <h2 className="article-title">{articleData4.title}</h2>
                                                </div>
                                            </a>
                                            <p className="article-description">{articleData4.description}</p>
                                            <div className="article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData4.author.image}
                                                        alt={`${articleData4.author.name}'s profile picture`}
                                                        className="author-image"
                                                    />
                                                    <div className="author-details">
                                                        <div className="author-name">{articleData4.author.name}</div>
                                                        <div className="publish-date">{articleData4.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="read-time">{articleData4.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData5.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="article-category">{articleData5.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <h2 className="article-title">{articleData5.title}</h2>
                                                </div>
                                            </a>
                                            <p className="article-description">{articleData5.description}</p>
                                            <div className="article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData5.author.image}
                                                        alt={`${articleData5.author.name}'s profile picture`}
                                                        className="author-image"
                                                    />
                                                    <div className="author-details">
                                                        <div className="author-name">{articleData5.author.name}</div>
                                                        <div className="publish-date">{articleData5.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="read-time">{articleData5.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData6.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="article-category">{articleData6.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <h2 className="article-title">{articleData6.title}</h2>
                                                </div>
                                            </a>
                                            <p className="article-description">{articleData6.description}</p>
                                            <div className="article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData6.author.image}
                                                        alt={`${articleData6.author.name}'s profile picture`}
                                                        className="author-image"
                                                    />
                                                    <div className="author-details">
                                                        <div className="author-name">{articleData6.author.name}</div>
                                                        <div className="publish-date">{articleData6.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="read-time">{articleData6.readTime}</div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <section className="section-box mt-60"  >
                                <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
                            </section>
                        </div>

                    </section>

                    <section className="section-box mt-0 mb-75">
                        <div className="post-loop-grid">
                            <div className="container">

                            </div>
                        </div>
                    </section>
                    <KickstartButton />
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}
