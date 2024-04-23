/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import CustomPagination from '../../components/elements/CustomPagination';

const articleData = [{
    image: "https://www.youtube.com/embed/XPf1kLnJpio",
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

    const articleTwoData = [{
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
        image: "/assets/imgs/page/online-courses/img1.png",
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
        image: "/assets/imgs/page/online-courses/img1.png",
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
        image: "/assets/imgs/page/online-courses/img1.png",
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
        },	{
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
        {
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
            image: "/assets/imgs/page/online-courses/img1.png",
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
            image: "/assets/imgs/page/online-courses/img1.png",
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
            image: "/assets/imgs/page/online-courses/img1.png",
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
            },	{
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
            {
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
                image: "/assets/imgs/page/online-courses/img1.png",
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
                image: "/assets/imgs/page/online-courses/img1.png",
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
                image: "/assets/imgs/page/online-courses/img1.png",
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
                },	{
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
                },{
                    image: "/assets/imgs/page/online-courses/img1.png",
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
                    },	{
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
                    }
        ];
    
export default function EntrepreneurAcceleratorProgrammeCourses() {
    const [currentPage, setCurrentPage] = useState(1);
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
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        let dataToShow = showArticleTwo ? articleTwoData : articleData;
        const startIndex = (pageNumber - 1) * 9;
        const endIndex = Math.min(startIndex + 9, dataToShow.length);
        setVisibleCards(endIndex - startIndex);
        if (pageNumber === 2) {
            setShowArticleTwo(true);
            setShowRemaining(false);
        } else if (pageNumber === 1) {
            setShowRemaining(false); 
            setShowArticleTwo(false);
        } else {
            setShowArticleTwo(false);
        }
    };
    
    
    return (
        <>
        <div>
                                <div className="card-list-inner-page-one-entrepreneur-academy mt-30 ">
                                {(showArticleTwo ? articleTwoData : articleData).slice(0, visibleCards).map((article, index) => (
    <article key={index}>
        <div className="card-content-inner-page-one-entrepreneur-academy">
        {article.image.includes("youtube.com/embed") ? (
    <iframe
        title="Embedded Video"
        src={article.image}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="featured-image"
    ></iframe>
) : (
    <img
        loading="lazy"
        src={article.image}
        alt="Article featured image"
        className="featured-image"
    />
)}

             <p className='image-text-inner-page-one-entrepreneur-academy'>{article.type}</p>
            <p className='image-text-inner-page-one-entrepreneur-academy-type-one'>{article.type1}</p>
           <p className='completion-course-percentage'> {article.totalPercentageofCompletion} </p>
           {/* <svg  className='new-text' width="100" height="64" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
           {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M68.1641 53.4355C69.2105 52.4873 69.1209 51.0219 67.964 50.1622C66.807 49.3026 65.0209 49.3743 63.9745 50.3224C51.627 61.5101 30.5504 62.3565 16.8987 52.2128C3.24701 42.0691 2.18975 24.7765 14.5373 13.5888C20.4318 8.24795 28.4913 5.11842 37.0853 4.66758C38.6419 4.58592 39.8216 3.48435 39.7202 2.20716C39.6187 0.929967 38.2746 -0.039202 36.718 0.04246C26.6724 0.569449 17.2376 4.23304 10.3477 10.4758C-4.09265 23.5597 -2.8562 43.7832 13.1094 55.6462C29.0749 67.5092 53.7238 66.5194 68.1641 53.4355Z" fill="#3C65F5"/> */}
         {/* </svg>  */}
            <a href="/entrepreneur-academy">
                <div className="article-title-inner-page-one-entrepreneur-academy">{article.title}</div>
            </a>
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
                            
                            {(visibleCards < (showArticleTwo ? articleTwoData.length : articleData.length)) || showRemaining ? (
                    <div className="col d-flex justify-content-center align-items-center mt-35">
                        <button className="btn btn-default fs-6" onClick={handleShowMore}>
                            {showRemaining ? "Show Less" : "Show More"}
                        </button>
                    </div>
                ) : null}
            </div>
            {(!showArticleTwo && visibleCards === articleData.length) && (
                <section className="section-box mt-60">
                    <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
                </section>
            )}
            {showArticleTwo && (
                <section className="section-box mt-60">
                    <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
                </section>
            )}



                
        </>
    );
}

