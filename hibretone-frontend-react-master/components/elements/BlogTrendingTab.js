
const BlogTrendingTab = () => {
    const products = [
        {
            image: "assets/imgs/page/blog-page/category6.jpeg",
            title: "How to get better at finding customers",
            authorImage: "assets/imgs/page/blog-page/user1.png",
            author: "hibretOne",
        },
        {
            image: "assets/imgs/page/blog-page/category5.jpeg",
            title: "Why Accelerators are great when starting a business ",
            authorImage: "assets/imgs/page/blog-page/Kristian.jpg",
            author: "hibretOne",
        },
        {
            image: "assets/imgs/page/blog-page/category4.jpeg",
            title: "Benefits of launching your business from a Hub  ",
            authorImage: "assets/imgs/page/blog-page/user5.png",
            author: "hibretOne",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a688dfa5793415678fe8451f9b593087d9312c286dfc186e58c3da93c7d1e429?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            title: "Recruiting staff member number one",
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/5618dd4485f5ffdd8fbcdfb859eb8e92940e8637584faeca66abef3e2fc7ca88?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "hibretOne",
        },
    ];


    return (
        <>
            <section className="product-list">
                <article className="product-card">
                    <div className="product-image-container">
                        <img
                            src={products[0].image}
                            alt={products[0].title}
                            className="product-image"
                        />
                        <div className="product-details">
                            <a href="/blog-page/blog-inner-page">
                                <div className="product-title">{products[0].title}</div>
                            </a>
                            <div className="product-author">
                                <img
                                    src={products[0].authorImage}
                                    alt={products[0].author}
                                    className="author-image"
                                />
                                <div className="author-name1">{products[0].author}</div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="product-card">
                    <div className="product-image-container">
                        <img
                            src={products[1].image}
                            alt={products[1].title}
                            className="product-image"
                        />
                        <div className="product-details">
                            <a href="/blog-page/blog-inner-page">
                            <div className="product-title">{products[1].title}</div>
                            </a>
                            <div className="product-author">
                                <img
                                    src={products[1].authorImage}
                                    alt={products[1].author}
                                    className="author-image"
                                />
                                <div className="author-name1">{products[1].author}</div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="product-card">
                    <div className="product-image-container">
                        <img
                            src={products[2].image}
                            alt={products[2].title}
                            className="product-image"
                        />
                        <div className="product-details">
                            <a href="/blog-page/blog-inner-page">
                                <h2 className="product-title">{products[2].title}</h2>
                            </a>
                            <div className="product-author">
                                <img
                                    src={products[2].authorImage}
                                    alt={products[2].author}
                                    className="author-image"
                                />
                                <div className="author-name1">{products[2].author}</div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="product-card">
                    <div className="product-image-container">
                        <img
                            src={products[3].image}
                            alt={products[3].title}
                            className="product-image"
                        />
                        <div className="product-details">
                            <a href="/blog-page/blog-inner-page">
                                <h2 className="product-title">{products[3].title}</h2>
                            </a>
                            <div className="product-author">
                                <img
                                    src={products[3].authorImage}
                                    alt={products[3].author}
                                    className="author-image"
                                />
                                <div className="author-name1">{products[3].author}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </>
    );
};

export default BlogTrendingTab;
