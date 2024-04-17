/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import KickstartButton from '../../components/elements/KickstartButton';
import dynamic from "next/dynamic";
import CustomPagination from '../../components/elements/CustomPagination';


const articleData = [{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "7 mins to read",
},
 {
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for Student Work Placement success",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "6 mins to read",
},
{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips to Help upskill your Career",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "8 mins to read",
},
{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Grant Writing Tips: How To Exceed Expectations",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",

    },
    type:"Strategic",
    type1:"Product",
    readTime: "6 mins to read",
}, {
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for Creating Social Impact",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",

    },
    type:"Strategic",
    type1:"Product",
    readTime: "7 mins to read",
},{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "8 mins to read",
},
{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "8 mins to read",
},
{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "8 mins to read",
},
{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "11 Tips for an Entrepreneur Programme",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Strategic",
    type1:"Product",
    readTime: "8 mins to read",
},
];

export default function EntrepreneurAcceleratorProgrammeCourses() {

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
        <div>
                                <div className="card-list mt-30">
                                {articleData.map((article, index) => (
    <article className="news-article-card" key={index}>
        <div className="card-content">
            <img
                loading="lazy"
                src={article.image}
                alt="Article featured image"
                className="featured-image"
            />
            <a href="/entrepreneur-academy">
                <div>
                 
                    <p className='image-text-entrepreneur-academy'>{article.type}</p>
                    <p className='image-text-entrepreneur-academy-type-one'>{article.type1}</p>
                </div>
                <div className="article-title-entrepreneur-academy">{article.title}</div>
            </a>
            <p className="article-description-entrepreneur-academy">{article.description}</p>
            <div className="article-meta">
                <div className="author-info">
                
                    <img
                        loading="lazy"
                        src={article.author.image}
                        alt="Author's profile picture"
                        className="author-image-entrepreneur-academy"
                    />
                </div>
                <div className="read-time-entrepreneur-academy">{article.readTime}</div>
            </div>
        </div>
    </article>
))}


        
                                </div>
                            </div>
                            {/* <section className="section-box mt-60"  >
                                <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
                            </section> */}
                
        </>
    );
}
