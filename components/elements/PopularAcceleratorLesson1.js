import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const data = [
    {
        image: "/assets/imgs/page/entrepreneur-academy/1.png",
        title: "Who is an entrepreneur?",
        description:{
            full:"In this lesson, learn what entrepreneurship is all about. Investigate the core characteristics, mindset, and traits of an entrepreneur. Learn about their function as creative problem-solvers and economic growth catalysts. Learn about the various pathways that entrepreneurs, whether in startups or established businesses, pursue. You'll have a good idea of what it means to be an entrepreneur and the essential qualities that contribute to their success at the end of this session.",
            short:"In this lesson, learn what entrepreneurship is all about. Investigate the core characteristics, mindset, and traits of an entrepreneur. Learn about"
        },
        readTime: "25mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"Strategic",
        type1:"Product"
    }, 
    {
        image: "/assets/imgs/page/online-courses/img1.png",
        title: "Assessing your entrepreneur readiness",
        description:{
            full:"In this lesson, you will delve into the key aspects of assessing your readiness to become an entrepreneur. By understanding the fundamental traits, skills, and mindset required, you will be better equipped to determine whether entrepreneurship is the right path for you.",
            short:"In this lesson, you will delve into the key aspects of assessing your readiness to become an entrepreneur. By understanding the fundamental traits"
        },
        readTime: "25mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },  
        type:"Marketing",
        type1:"Product"
    }, 
    {
        image: "/assets/imgs/page/online-courses/img2.jpg",
        title: "Understanding the Concept Vision ",
        description:{
            full:"In this foundational lesson, we delve into the essence of vision in entrepreneurship. We explore what vision means, why it's crucial for business success, and how to cultivate a visionary mindset.",
            short:"In this foundational lesson, we delve into the essence of vision in entrepreneurship. We explore what vision means, why it's crucial for business success, "
        },
        readTime: "18mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"Strategic",
        type1:"People"
    },
    {
        image: "/assets/imgs/page/entrepreneur-academy/1.png",
        title: "Defining a clear vision and mission for your business",
        description:{
            full:"We delve into the critical aspects of defining a clear vision and mission for your business. Explore the fundamental importance of these guiding statements in shaping organizational identity and strategy. Gain practical insights on how to articulate a compelling vision and mission tailored for entrepreneurial success.",
            short:"We delve into the critical aspects of defining a clear vision and mission for your business. Explore the fundamental importance of these guiding statements"
        },
        readTime: "25mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"Strategic",
        type1:"Product"
    }, 
    {
        image: "/assets/imgs/page/online-courses/img1.png",
        title: "An Introduction to Product Progress",
        description:{
            full:"Understanding the process of product development, from ideation to launch. You'll learn how to identify problems your product can solve, refine your ideas, create prototypes, and test their effectiveness. Further resources will provide links to books and courses that can help you deepen your understanding of product development and improve your skills in this area.",
            short:"Understanding the process of product development, from ideation to launch. You'll learn how to identify problems your product can solve, refine your"
        },
        readTime: "25mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },  
        type:"Marketing",
        type1:"Product"
    }, 
    {
        image: "/assets/imgs/page/online-courses/img2.jpg",
        title: "Different Product Categories",
        description:{
            full:"In this lesson, you will explore the concept of product categories and their importance in marketing and business. You will learn about the different types of product categories and how they play a crucial role in product development, marketing strategies, and consumer behavior. By understanding the various product categories, you will be able to effectively position your products in the market and cater to the specific needs and preferences of your target audience.",
            short:"In this lesson, you will explore the concept of product categories and their importance in marketing and business. You will learn about the different types of product"
        },
        readTime: "25mins",
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"Strategic",
        type1:"People"
    },
];


function Responsive() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide:0,
                    dots: true,
                }
            }
        ]
    };

    const getChunkSize = () => {
        const screenSize = window.innerWidth;
    
        if (screenSize < 500) {
          return 1;
        } else {
          return 2;
        }
      };
    
      const [chunkSize, setChunkSize] = useState(getChunkSize());
    const [showMore, setShowMore] = useState({});
    const toggleShowMore = (index, cardIndex) => {
        const key = `${index}-${cardIndex}`;
        setShowMore(prevState => ({
            ...prevState,
            [key]: !prevState[key], 
        }));
        Object.keys(showMore).forEach((otherKey) => {
            if (otherKey !== key) {
                setShowMore(prevState => ({
                    ...prevState,
                    [otherKey]: false,
                }));
            }
        });
    };
      useEffect(() => {
        const handleResize = () => {
          setChunkSize(getChunkSize());
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
          chunks.push(array.slice(i, i + size));
        }
        return chunks;
      };
    
      const chunks = chunkArray(data, getChunkSize());

return( 
    <div className="slider-container" style={{marginLeft:'30px'}}>
    <Slider {...settings}
    >
         {chunks.map((chunk, index) => (
            <div key={index} className="swiper-slide">
                   {chunk.map((item, cardIndex) => (
                      <div key={cardIndex}>
                <div className="card-content-lesson-page">
                    <img
                        loading="lazy"
                        src={item.image}
                        alt="Article featured image"
                        className="featured-image"
                    />
                    <div className="article-category">
                        <p className='image-lesson-text'>{item.type}</p>
                        <p className='image-text-online-course_next' style={{color:'#05264e',backgroundColor:'rgba(81,146,255,.12)'}}>{item.type1}</p>
                    </div>
                    
                    <a href="/entrepreneur-academy">
                        <div className="article-title-lessons-title">{item.title}</div>
                    </a>
                    <div className="lesson-description-entrepreneur-academy">
                                        {showMore[`${index}-${cardIndex}`]
                                            ? item.description.full
                                            : item.description.short}
                                        <button
                                            className="btn-show-more"
                                            onClick={() => toggleShowMore(index, cardIndex)}
                                        >
                                            {showMore[`${index}-${cardIndex}`] ? "show less" : "...more"}
                                        </button>
                                    </div>
                    <div className="article-meta">
                        <div className="author-info">
                            <img
                                loading="lazy"
                                src={item.author.image}
                                alt={item.author.name}
                                className="author-image-entrepreneur-academy"
                            />
                        </div>
                        <div className="read-time-entrepreneur-academy">{item.readTime}</div>
                    </div>
                </div>
                </div>
            
         
        ))}
        </div>
         ))}
    </Slider>
    </div>
);
}

export default Responsive;

