// This is just a sample now

const articleData1 = {
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
};

const articleData2 = {
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
};

const articleData3 = {
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
};

const articleData4 = {
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
};

const articleData5 = {
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
};

const articleData6 = {
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
};


export default function Index() {
    return (
        <>
            <section className="section-box mt-50 mb-15">
                <div className="container1">
                    <div className="flex-container">
                        <div className="text-center">
                            <h2 className="section-title mb-10" style={{ fontSize: '40px' }}>
                                News and Events
                            </h2>
                            <p className="w-lg-50 mx-auto meetteamtext">
                            Get the latest news, updates and tips
                            </p>
                        </div>

                        <div className="card-list-aboutus mt-40">
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
                                            <div className="article-title-aboutus">{articleData1.title}</div>
                                        </div>
                                    </a>
                                    <p className="article-description-aboutus">{articleData1.description}</p>
                                    <div className="article-meta">
                                        <div className="author-info">
                                            <img
                                                loading="lazy"
                                                src={articleData1.author.image}
                                                alt={`${articleData1.author.name}'s profile picture`}
                                                className="author-image-aboutus"
                                            />
                                            <div className="author-details">
                                                <div className="author-name-aboutus">{articleData1.author.name}</div>
                                                <div className="publish-date-aboutus">{articleData1.author.date}</div>
                                            </div>
                                        </div>
                                        <div className="read-time-aboutus">{articleData1.readTime}</div>
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
                                            <div className="article-title-aboutus">{articleData2.title}</div>
                                        </div>
                                    </a>
                                    <p className="article-description-aboutus">{articleData2.description}</p>
                                    <div className="article-meta">
                                        <div className="author-info">
                                            <img
                                                loading="lazy"
                                                src={articleData2.author.image}
                                                alt={`${articleData2.author.name}'s profile picture`}
                                                className="author-image-aboutus"
                                            />
                                            <div className="author-details">
                                                <div className="author-name-aboutus">{articleData2.author.name}</div>
                                                <div className="publish-date-aboutus">{articleData2.author.date}</div>
                                            </div>
                                        </div>
                                        <div className="read-time-aboutus">{articleData2.readTime}</div>
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
                                            <div className="article-title-aboutus">{articleData3.title}</div>
                                        </div>
                                    </a>
                                    <p className="article-description-aboutus">{articleData3.description}</p>
                                    <div className="article-meta">
                                        <div className="author-info">
                                            <img
                                                loading="lazy"
                                                src={articleData3.author.image}
                                                alt={`${articleData3.author.name}'s profile picture`}
                                                className="author-image-aboutus"
                                            />
                                            <div className="author-details">
                                                <div className="author-name-aboutus">{articleData3.author.name}</div>
                                                <div className="publish-date-aboutus">{articleData3.author.date}</div>
                                            </div>
                                        </div>
                                        <div className="read-time-aboutus">{articleData3.readTime}</div>
                                    </div>
                                </div>
                            </article>

                            <article className="news-article-card">
                                <div className="card-content">
                                    <img
                                        loading="lazy"
                                        src={articleData4.image}
                                        alt="News3"
                                        className="featured-image"
                                    />
                                    <div className="article-category">{articleData4.category}</div>
                                    <a href="/blog-page/blog-inner-page">
                                        <div className="article-title-container"> {/* Added container for title */}
                                            <div className="article-title-aboutus">{articleData4.title}</div>
                                        </div>
                                    </a>
                                    <p className="article-description-aboutus">{articleData4.description}</p>
                                    <div className="article-meta">
                                        <div className="author-info">
                                            <img
                                                loading="lazy"
                                                src={articleData4.author.image}
                                                alt={`${articleData4.author.name}'s profile picture`}
                                                className="author-image-aboutus"
                                            />
                                            <div className="author-details">
                                                <div className="author-name-aboutus">{articleData4.author.name}</div>
                                                <div className="publish-date-aboutus">{articleData4.author.date}</div>
                                            </div>
                                        </div>
                                        <div className="read-time-aboutus">{articleData4.readTime}</div>
                                    </div>
                                </div>
                            </article>

                            <article className="news-article-card">
                                <div className="card-content">
                                    <img
                                        loading="lazy"
                                        src={articleData5.image}
                                        alt="News3"
                                        className="featured-image"
                                    />
                                    <div className="article-category">{articleData5.category}</div>
                                    <a href="/blog-page/blog-inner-page">
                                        <div className="article-title-container"> {/* Added container for title */}
                                            <div className="article-title-aboutus">{articleData5.title}</div>
                                        </div>
                                    </a>
                                    <p className="article-description-aboutus">{articleData5.description}</p>
                                    <div className="article-meta">
                                        <div className="author-info">
                                            <img
                                                loading="lazy"
                                                src={articleData5.author.image}
                                                alt={`${articleData5.author.name}'s profile picture`}
                                                className="author-image-aboutus"
                                            />
                                            <div className="author-details">
                                                <div className="author-name-aboutus">{articleData5.author.name}</div>
                                                <div className="publish-date-aboutus">{articleData5.author.date}</div>
                                            </div>
                                        </div>
                                        <div className="read-time-aboutus">{articleData5.readTime}</div>
                                    </div>
                                </div>
                            </article>

                            <article className="news-article-card">
                                <div className="card-content">
                                    <img
                                        loading="lazy"
                                        src={articleData6.image}
                                        alt="News3"
                                        className="featured-image"
                                    />
                                    <div className="article-category">{articleData6.category}</div>
                                    <a href="/blog-page/blog-inner-page">
                                        <div className="article-title-container"> {/* Added container for title */}
                                            <div className="article-title-aboutus">{articleData6.title}</div>
                                        </div>
                                    </a>
                                    <p className="article-description-aboutus">{articleData6.description}</p>
                                    <div className="article-meta">
                                        <div className="author-info">
                                            <img
                                                loading="lazy"
                                                src={articleData6.author.image}
                                                alt={`${articleData6.author.name}'s profile picture`}
                                                className="author-image-aboutus"
                                            />
                                            <div className="author-details">
                                                <div className="author-name-aboutus">{articleData6.author.name}</div>
                                                <div className="publish-date-aboutus">{articleData6.author.date}</div>
                                            </div>
                                        </div>
                                        <div className="read-time-aboutus">{articleData6.readTime}</div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}