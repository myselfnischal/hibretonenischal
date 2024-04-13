import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const data = [
    {
        img: "1.jpg",
        title: "11 Tips for Entrepreneur Programme Success",
        author: "Debbie Lewis",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },,
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },,
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },,
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },,
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },,
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },,
    {
        img: "2.jpg",
        title: "11 Tips for Student Work Placement Success",
        author: "David Bond",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "3.jpg",
        title: "11 Tips to Help Upskill Your Career",
        author: "Denise Myers",
        date: "25 April 2024",
        authorImage: "assets/imgs/page/blog-page/user1.png",
        link: "/blog-page/blog-inner-page"
    },
    {
        img: "4.jpg",
        title: "Career Builder",
        link: "/career-builder"
    },
    {
        img: "5.jpg",
        title: "Ecosystem Connect",
        link: "/ecosystem-connect"
    },
    {
        img: "6.jpg",
        title: "Industry Intelligence",
        link: "/industry-intelligence"
    },
    {
        img: "7.jpg",
        title: "Problem Triage",
        link: "/problem-triage"
    },
    {
        img: "8.jpeg",
        title: "Grant Finder",
        link: "/grant-finder"
    },
    {
        img: "9.jpeg",
        title: "Grant Writer",
        link: "/grant-writer"
    },
    {
        img: "10.jpeg",
        title: "Scholarships & Bursaries",
        link: "/scholarships-bursaries"
    },
    {
        img: "11.jpeg",
        title: "Free Courses",
        link: "/free-courses"
    },
    {
        img: "12.jpeg",
        title: "Mentor Masterclasses",
        link: "/mentor-masterclasses"
    },
    {
        img: "13.jpeg",
        title: "R&D Tax Calculator",
        link: "/r&d-tax-credits-calculator"
    }
];

const BlogSlider1 = () => {
    return (
        <>
            <div className="swiper-container1 swiper-group-6 mh-none-bloginnerpage swiper categories-slide-2">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <div className="card-grid-5-1 card-category-1 hover-up" style={{ cursor: 'pointer', backgroundImage: `url(assets/imgs/page/homepage1/how-we-help/${item.img})` }}>
                                    <Link legacyBehavior href={item.link}>
                                        <div className="box-cover-img-1">
                                            <div className="content-bottom-2">
                                                <span className="swipertitle1">{item.title}</span>

                                                <div className="author-info-container" >
                                                    <img src={item.authorImage} className="author-image" alt="Author" style={{ marginRight: '10px' }} />
                                                    <span className="swiperdate" style={{ marginRight: '10px' }}>{item.author}</span>
                                                    <span className="swiperdate">{item.date}</span>

                                                </div>


                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </>
    );
};

export default BlogSlider1;
