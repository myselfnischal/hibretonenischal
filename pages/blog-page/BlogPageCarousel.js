import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const articleData = [
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/659f692a58c4c92e1ba7dd66767d5d22e36708d9c78aaff8d4b3855bb30441a2?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        title: "11 Tips for an Entrepreneur Programme Success",
        author: {
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2809ca4e548c3e7cf7d01e18bb676d51ed69d37522e8a52e94790a199e2754d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "Debbie Lewis",
            date: "25 April 2024"
        },
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/12ec7b0bceb254d0bce1a5e8e4dfa2358674a310534fef82a99a9f7c3c363a4a?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        title: "11 Tips for Student Work Placement Success",
        author: {
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/59f4eb8d9bc34f0d6dea5131121a0bff828e6d6b860ac2d900734190fd28ed5d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "David Bond", 
            date: "25 April 2024"
        },
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d579b7d7a82a6dc86c7b8f113ddc9b245b842e43245ee7b40bf48c2009dfa85?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        title: "11 Tips to Help and Build Upskill Your Career",
        author: {
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/82f5e1eb030c30ffeb4458f496855f4a21f400c092e9a4a223b6baccfd1eb286?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "Denise Myers",
            date: "27 April 2024"
        },
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/659f692a58c4c92e1ba7dd66767d5d22e36708d9c78aaff8d4b3855bb30441a2?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        title: "11 Tips for Entrepreneur Programme Success",
        author: {
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2809ca4e548c3e7cf7d01e18bb676d51ed69d37522e8a52e94790a199e2754d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "Debbie Lewis",
            date: "25 April 2024"
        },
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/12ec7b0bceb254d0bce1a5e8e4dfa2358674a310534fef82a99a9f7c3c363a4a?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        title: "11 Tips for Student Work Placement Success",
        author: {
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/59f4eb8d9bc34f0d6dea5131121a0bff828e6d6b860ac2d900734190fd28ed5d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "David Bond", 
            date: "25 April 2024"
        },
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d579b7d7a82a6dc86c7b8f113ddc9b245b842e43245ee7b40bf48c2009dfa85?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
        title: "11 Tips to Help and Build Upskill Your Career",
        author: {
            authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/82f5e1eb030c30ffeb4458f496855f4a21f400c092e9a4a223b6baccfd1eb286?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            author: "Denise Myers",
            date: "27 April 2024"
        },
    },
];

export default function BlogPageCarousel() {
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
        <section className="section-box section-box-newsandevents-aboutus">
            <div className="post-loop-grid">
                <div className="container1">
                    <div className="swiper-container" style={{ overflow: 'hidden' }}>
                        <div className="swiper-wrapper" >
                            {articleData.map((article, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="card-content" style={{height:'445px', width:'330px'}}>
                                        <img
                                            loading="lazy"
                                            src={article.image}
                                            alt="Article featured image"
                                            className="featured-image"
                                            height="100%"
                                        />
                                        <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-blogpage">{article.title}</div>
                                        </a>
                                        <img
                                                    loading="lazy"
                                                    src={article.author.authorImage}
                                                    alt={`${article.author.author}'s profile picture`}
                                                    className="author-image-blogpage1"
                                                />
                                        <div className="swiperdate-blogpage1">{article.author.author}</div>
                                        <div className="carouseldate-blogpage1">{article.author.date}</div>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            alt="" className="swiperprevious-blogpage"
                            onClick={handlePrevious}
                        />
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            alt="" className="swipernext-blogpage"
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}