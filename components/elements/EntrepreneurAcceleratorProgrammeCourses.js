/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import CustomPagination from '../../components/elements/CustomPagination';

const articleData = [{
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "Entrepreneurial Readiness",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"People",
    type1:"Product",
    totalPercentageofCompletion:"37%",
    CourseDetails: "12 lessons",
},
 {
    image: "/assets/imgs/page/online-courses/img1.png",
    title: "Sustainability",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Marketing",
    type1:"Product",
    totalPercentageofCompletion:"37%",
    CourseDetails: "15 lessons",
},
{
    image: "/assets/imgs/page/online-courses/img2.jpg",
    title: "Product Progress",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"Product",
    type1:"Marketing",
    totalPercentageofCompletion:"61%",
    CourseDetails: "10 lessons",
},
{
    image:  "/assets/imgs/page/entrepreneur-academy/3.jpg",
    title: "Entrepreneurial Vision",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",

    },
    type:"People",
    type1:"Marketing",
    totalPercentageofCompletion:"21%",
    CourseDetails: "14 lessons",
}, {
    image: "/assets/imgs/page/entrepreneur-academy/2.png",
    title: "Create The Brand",
    description:
        "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",

    },
	    type:"Product",
	    type1:"Customer",
        totalPercentageofCompletion:"67%",
        CourseDetails: "8 lessons",
	},{
        image: "/assets/imgs/page/entrepreneur-academy/3.png",
	    title: "Equality, Diversity & Inclusion",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
        type:"Finance",
	    type1:"People",
        totalPercentageofCompletion:"37%",
        CourseDetails: "12 lessons",
	},
	{
	    image: "/assets/imgs/page/entrepreneur-academy/1.png",
	    title: "Learning & Upskilling",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
	    type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "12 lessons",
	},

	{
        image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Reality Check My Idea",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"Marketing",
	    type1:"Customer",
        totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
	{
        image: "/assets/imgs/page/online-courses/img2.jpg",
	    title: "People & Hiring",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Customer Development",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Incorporation, IP, Employment & Legals",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Scaleup & Growth",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Enterprise Resource Planning Systems (ERPs)",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Product Launch",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},	{
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Environmental, Social and Governance (ESG)",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},	{
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Revenue Models",
        type1:"Customer",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Product Development",
        type1:"Customer",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},

    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Funding & Finance",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
    {
	    image: "/assets/imgs/page/online-courses/img1.png",
	    title: "Enterprise For Good",
	    description:
		"Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
	    author: {
		image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
	    },
	    type:"People",
        type1:"Customer",
	    totalPercentageofCompletion:"67%",
        CourseDetails: "10 lessons",
	},
		{
            image: "/assets/imgs/page/online-courses/img1.png",
            title: "Entrepreneurial Resilience",
            description:
            "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
            },
            type:"People",
            type1:"Customer",
            totalPercentageofCompletion:"67%",
            CourseDetails: "10 lessons",
        },
	];
    
export default function EntrepreneurAcceleratorProgrammeCourses() {
    const [visibleCards, setVisibleCards] = useState(9);
    const [showRemaining, setShowRemaining] = useState(false);
    const [showArticleTwo, setShowArticleTwo] = useState(false);

    const handleShowMore = () => {
        if (!showRemaining) {
            setVisibleCards(Math.min(visibleCards + 9, articleData.length));
            if (visibleCards + 9 >= articleData.length) {
                setShowRemaining(true);
            }
        } else {
            setVisibleCards(9);
            setShowRemaining(false);
        }
    };
    const handleShowLess = () => {
        setVisibleCards(9); 
        setShowRemaining(false); 
        const cardSection = document.querySelector('.card-list-inner-page-one-entrepreneur-academy');
        if (cardSection) {
            const sectionTop = cardSection.offsetTop - 250; 
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    };
    
    return (
        <>
        <div>
                                <div className="card-list-inner-page-one-entrepreneur-academy mt-30 ">
                                {articleData.slice(0, visibleCards).map((article, index) => (
    <article key={index}>
        <div className="card-content-inner-page-one-entrepreneur-academy">
            <img
                loading="lazy"
                src={article.image}
                alt="Article featured image"
                className="featured-image"
            />

            <a href="/entrepreneur-academy">
                <div className="article-title-inner-page-one-entrepreneur-academy">{article.title}</div>
            </a>
            <div>
            <p className='image-text-inner-page-one-entrepreneur-academy'>{article.type}</p>
            <p className='image-text-inner-page-one-entrepreneur-academy-type-one'>{article.type1}</p>  
            </div>        
            <p className='completion-course-percentage'> {article.totalPercentageofCompletion} </p>
            <p className="article-description-inner-page-one-entrepreneur-academy">{article.description}</p>
            <div className="article-meta">
                <div className="author-info">
                    <img
                        loading="lazy"
                        src={article.author.image}
                        alt="Author's profile picture"
                        className="author-image-entrepreneur-academy"
                    />
                </div>
                <div className="read-time-entrepreneur-academy">{article.CourseDetails}</div>
            </div>
        </div>
    </article>
))}
        </div>
        {showRemaining ? (
    <div className="col d-flex justify-content-center align-items-center mt-35">
        <button className="btn btn-default fs-6" onClick={handleShowLess}>
            Show Less
        </button>
    </div>
) : (
    (visibleCards < articleData.length) && (
        <div className="col d-flex justify-content-center align-items-center mt-35">
            <button className="btn btn-default fs-6" onClick={handleShowMore}>
                Show More
            </button>
        </div>
    )
)}

            </div>



                
        </>
    );
}

