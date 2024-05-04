import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomPagination from '../../components/elements/CustomPagination';


const data = [
  {
        id:1,
        image: "/assets/imgs/page/entrepreneur-academy/4.jpg",
        title: "Course 1: Entrepreneurial Readiness",
        description:{
          full:"Develop essential entrepreneurial skills, by assessing your current skills, traits  and strengths, identifying your passions, conducting market research, and creating a business plan, you'll set the stage for a successful venture. Dive into financial evaluation, build a supportive network, learn from setbacks, and foster resilience.",
          short:"Develop essential entrepreneurial skills, by assessing your current skills, traits  and strengths, identifying your passions, conducting market research,"
      },
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"People",
        type1:"Product",
        totalPercentageofCompletion:"37%",
        CourseDetails: "12 lessons",
    },
    {
      id:2,
      image: "/assets/imgs/page/entrepreneur-academy/5.jpg",
       title: "Course 4: Entrepreneurial Vision",
      description:{
        full:"For entrepreneurs wanting to integrate sustainability into their business practices and contribute to building a greener and more sustainable future. Explore the importance of sustainability in entrepreneurship, learn about eco-friendly business strategies, and discover innovative ways to create a positive impact on the environment and society. Also cover topics such as sustainable business models, responsible supply chain management, and measuring the impact of sustainability efforts.",
        short:"For entrepreneurs wanting to integrate sustainability into their business practices and contribute to building a greener and more sustainable future. Explore the"
    },
      author: {
          image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
      },
      type:"People",
      type1:"Product",
      totalPercentageofCompletion:"37%",
      CourseDetails: "12 lessons",
  },
  {
    id:3,
    image:"/assets/imgs/page/entrepreneur-academy/6.jpg",
    title: "Course 7: Learning & Upskilling",
    description:{
      full:"Product development, from ideation to launch. Learn how to identify problems your product can solve, refine your ideas, create prototypes, and test their effectiveness.",
      short:"Product development, from ideation to launch. Learn how to identify problems your product can solve, refine your ideas, create prototypes, and test their"
  },
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"People",
    type1:"Product",
    totalPercentageofCompletion:"37%",
    CourseDetails: "12 lessons",
},
{
  id:4,
  image:"/assets/imgs/page/entrepreneur-academy/7.jpg",
  title: "Course 2: Sustainability",
  description:{
    full:"Learn the importance of developing a clear vision and mission for your business. Understand how to identify your passion and purpose as an entrepreneur and master the art of storytelling to engage your audience.",
    short:"Learn the importance of developing a clear vision and mission for your business. Understand how to identify your passion and purpose as an entrepreneur and master the"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:5,
  image:"/assets/imgs/page/entrepreneur-academy/8.jpg",
  title: "Course 5: Create the Brand",
  description:{
    full:"Creating a strong brand identity and strategy. Learn the importance of segmentation, marketing, and public relations in building a successful brand.",
    short:"Creating a strong brand identity and strategy. Learn the importance of segmentation, marketing, and public relations in building a"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:6,
  image:"/assets/imgs/page/entrepreneur-academy/10.jpg",
  title: "Course 8: Reality Check My Idea",
  description:{
    full:"Looking at the principles of equity, diversity, and inclusion (EDI), gaining insights on cultivating an inclusive environment in your organisation.",
    short:"Looking at the principles of equity, diversity, and inclusion (EDI), gaining insights on cultivating an inclusive environment in your organisation."
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:7,
  image:"/assets/imgs/page/entrepreneur-academy/9.jpg",
  title: "Course 3: Product Progress",
  description:{
    full:"Attention will be directed towards the significance of continuous learning and skill development for maintaining a competitive edge in the entrepreneurial world. Create a comprehensive learning strategy, establish objectives, and explore diverse learning avenues to expand your skill set.",
    short:"Attention will be directed towards the significance of continuous learning and skill development for maintaining a competitive edge in the"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:8,
  image:"/assets/imgs/page/entrepreneur-academy/11.jpg",
  title: "Course 6: Equality, Diversity, Inclusion (EDI)",
  description:{
    full:"One will be guided in assessing the feasibility of business concepts by conducting a reality check. Acquire the skills to evaluate and select an appropriate business model, develop a sound financial plan, identify key team members, and adapt your ideas as necessary.",
    short:"One will be guided in assessing the feasibility of business concepts by conducting a reality check. Acquire the skills to evaluate and select an appropriate business"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:9,
  image:"/assets/imgs/page/entrepreneur-academy/12.jpg",
  title: "Course 9: People & Hiring",
  description:{
    full:"Gain an understanding of creating comprehensive job descriptions, sourcing potential candidates, verifying their credentials, and assessing their skills, experience, and alignment with your organisational culture.",
    short:"Gain an understanding of creating comprehensive job descriptions, sourcing potential candidates, verifying their credentials, and assessing their skills,"
},
  author:{
    image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  
    },  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
  {      id:10,
       image:"/assets/imgs/page/entrepreneur-academy/13.jpg",
        title: "Course 10: Customer Development",
        description:{
          full:"Strong emphasis on recognizing the significance of comprehending your target customers and their requirements. Acquire the skills to conduct thorough customer research, construct customer personas, and validate your assumptions.",
          short:"Strong emphasis on recognizing the significance of comprehending your target customers and their requirements. Acquire the skills to conduct thorough customer"
      },
        author: {
            image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
        },
        type:"People",
        type1:"Product",
        totalPercentageofCompletion:"37%",
        CourseDetails: "12 lessons",
    },
    {
      id:11,
     image:"/assets/imgs/page/entrepreneur-academy/14.jpg",
      title: "Course 13: Enterprise Resource Planning Systems (ERPS)",
      description:{
        full:"Provide knowledge about the legal considerations involved in operating a business. This encompasses selecting the appropriate legal framework, registering your business, employment law and safeguarding your intellectual property, patents. trademarks, copyrights.",
        short:"Provide knowledge about the legal considerations involved in operating a business. This encompasses selecting the appropriate legal"
    },
      author: {
          image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
      },
      type:"People",
      type1:"Product",
      totalPercentageofCompletion:"37%",
      CourseDetails: "12 lessons",
  },
  {
    id:12,
   image:"/assets/imgs/page/entrepreneur-academy/15.jpg",
    // title: "Course 12: Scaleup & Growth",
    description:{
      full:"Fundamental aspects of expanding and advancing your business are shown. Explore techniques for attracting customers, projecting demand, evaluating opportunities, and establishing a resilient brand.",
      short:"Fundamental aspects of expanding and advancing your business are shown. Explore techniques for attracting customers, projecting demand, evaluating opportunities,"
  },
    author: {
        image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
    },
    type:"People",
    type1:"Product",
    totalPercentageofCompletion:"37%",
    CourseDetails: "12 lessons",
},
{
  id:13,
 image:"/assets/imgs/page/entrepreneur-academy/16.jpg",
  // title: "Course 13: Enterprise Resource Planning Systems (ERPS)",
  title: "Course 11: Incorporation, IP, Employment & Legals",
  description:{
    full:"Comprehending the significance of Enterprise Resource Planning Systems (ERPs) and their role in efficiently managing business operations. Acquire the skills to identify your specific business requirements, strategise implementation processes, and select the most suitable software solution.",
    short:"Comprehending the significance of Enterprise Resource Planning Systems (ERPs) and their role in efficiently managing business operations. Acquire the skills to identify"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:14,
 image:"/assets/imgs/page/entrepreneur-academy/17.jpg",
  title: "Course 14: Product Launch",
  description:{
    full:"The step-by-step process of introducing a new product to the market, starting from identifying your target audience to constructing an effective marketing strategy. Explore diverse product management methodologies, agile practices, and sales strategies.",
    short:"The step-by-step process of introducing a new product to the market, starting from identifying your target audience to constructing an effective marketing"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:15,
 image:"/assets/imgs/page/entrepreneur-academy/18.jpg",
  title: "Course 15: Corporate Social Responsibility (CSR)",
  description:{
    full:"The significance of Corporate Social Responsibility (CSR) in contemporary businesses. Discover the advantages of implementing CSR practices, its influence on the environment, and methods to integrate it into your overall business strategy.",
    short:"The significance of Corporate Social Responsibility (CSR) in contemporary businesses. Discover the advantages of implementing CSR"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:16,
 image:"/assets/imgs/page/entrepreneur-academy/19.jpg",
  // title: "Course 16: Revenue Models",
  title: "Course 12: Scaleup & Growth",
  description:{
    full:"A diverse range of revenue models and their significance in the business realm. Explore the factors that can impact revenue, methods to estimate enterprise value, and strategies for utilising revenue models to foster sustainability.",
    short:"A diverse range of revenue models and their significance in the business realm. Explore the factors that can impact revenue, methods"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:17,
 image:"/assets/imgs/page/entrepreneur-academy/20.jpg",
  title: "Course 17: Product Development",
  description:{
    full:"The various phases of product development, spanning generation of ideas, to the introduction of products in the market. Understand the significance of feedback, promotion, and the creation of a viable and profitable product in the long run.",
    short:"The various phases of product development, spanning generation of ideas, to the introduction of products in the market. Understand the significance of"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:18,
 image:"/assets/imgs/page/entrepreneur-academy/21.jpg",
  title: "Course 18: Funding & Finance",
  description:{
    full:"Funding and financing alternatives accessible for your business or social enterprise. Learn how to assess your financial requirements, develop a funding strategy, and obtain the necessary resources to facilitate the growth of your enterprise.",
    short:"Funding and financing alternatives accessible for your business or social enterprise. Learn how to assess your financial requirements, develop a funding"
},
  author:{
    image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  
    },  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:19,
 image:"/assets/imgs/page/entrepreneur-academy/22.jpg",
  title: "Course 19: Enterprise for Good",
  description:{
    full:"The concept of Enterprise for Good and its profound moral influence on both society, the environment and the economy. Gain insights into the financial advantages, ethical considerations, and methods of integrating these principles into your business practices.",
    short:"The concept of Enterprise for Good and its profound moral influence on both society, the environment and the economy. Gain"
},
  author: {
      image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  },
  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
},
{
  id:20,
 image:"/assets/imgs/page/entrepreneur-academy/23.jpg",
  title: "Course 20: Entrepreneurial Resilience",
  description:{
    full:"Designed to equip aspiring and current entrepreneurs with the mindset, skills, and strategies needed to develop and maintain entrepreneurial resilience. Participants will learn to overcome obstacles, adapt to changing circumstances, and stay motivated on their entrepreneurial journey. Exploring various aspects of resilience, including emotional intelligence, problem-solving, risk management, and the importance of a strong support network.",
    short:"Designed to equip aspiring and current entrepreneurs with the mindset, skills, and strategies needed to develop and maintain entrepreneurial"
},
  author:{
    image: "/assets/imgs/page/entrepreneur-academy/HibretOne Logo v1.png",
  
    },  type:"People",
  type1:"Product",
  totalPercentageofCompletion:"37%",
  CourseDetails: "12 lessons",
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
      return screenSize < 500 ? 1 : 3;
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
    
      const [currentPage, setCurrentPage] = useState(1);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll slightly above the slider container
        // const sliderContainer = document.querySelector(".slider-container");
        // if (sliderContainer) {
        //     const offsetTop = sliderContainer.getBoundingClientRect().top - 200; // Adjust the offset as needed
        //     window.scrollBy({ top: offsetTop, left: 0, behavior: "smooth" });
        // }
    };
    
    
      // Calculate startIndex and endIndex based on currentPage
      const startIndex = (currentPage - 1) * chunkSize * 3;
      const endIndex = Math.min(startIndex + chunkSize * 3, data.length);
    
      // Slice the data array to get the cards for the current page
      const currentPageData = data.slice(startIndex, endIndex);
    
      // Chunk the currentPageData into arrays of size equal to chunkSize
      const chunks = chunkArray(currentPageData, chunkSize);


return( 
    <div className="slider-container " style={{marginLeft:'30px',transition: 'transform 0.5s ease'}}>
    <Slider {...settings}
    >
         {chunks.map((chunk, index) => (
            <div key={index} className="swiper-slide">
                   {chunk.map((item, cardIndex) => (
                      <div key={cardIndex}>
          <div className="card-content-inner-page-one-entrepreneur-academy" style={{width:'95%',marginTop:'15px'}}>
            <img
                loading="lazy"
                src={item.image}
                alt="Article featured image"
                className="featured-image"
            />

            <a href="/entrepreneur-academy">
                <div className="article-title-inner-page-one-entrepreneur-academy">{item.title}</div>
            </a>
            <div>
            <p className='image-text-inner-page-one-entrepreneur-academy' style={{color:'#05264e',backgroundColor:'rgba(81,146,255,.12)'}}>{item.type}</p>
            <p className='image-text-inner-page-one-entrepreneur-academy-type-one' style={{color:'#05264e',backgroundColor:'rgba(81,146,255,.12)'}}>{item.type1}</p>  
            </div>        
            <p className='completion-course-percentage'> {item.totalPercentageofCompletion} </p>
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
                        alt="Author's profile picture"
                        className="author-image-entrepreneur-academy"
                    />
                </div>
                <div className="read-time-entrepreneur-academy">{item.CourseDetails}</div>
            </div>
        </div>
        </div>
        ))}
        </div>
         ))}
    </Slider>

    <section className="section-box mt-60">
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / (chunkSize * 3))} // Calculate total pages based on total number of cards and chunk size
          onPageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
        />
      </section>

    </div>

     
);
}

export default Responsive;

