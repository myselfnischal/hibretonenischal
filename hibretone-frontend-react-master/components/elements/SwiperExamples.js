import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Install Swiper modules
SwiperCore.use([Navigation]);

const SwiperExamples = () => {
    return (
        <>
            <Swiper
                navigation={true}
                className="mySwiper"
                slidesPerView={3} // Display three slides at a time
                spaceBetween={30} // Add spacing between slides
            >
                <SwiperSlide>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")' }}>
                                <Link href="/blog-details">
                                    <div className="box-cover-img">
                                        <div className="content-bottom-2">
                                            <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                            <div className="author d-flex align-items-center mr-20">
                                                <img className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                                                <span className="color-white font-sm mr-25">Alice Json</span>
                                                <span className="color-white font-sm">29 April 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")' }}>
                                <Link href="/blog-details">
                                    <div className="box-cover-img">
                                        <div className="content-bottom-2">
                                            <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                            <div className="author d-flex align-items-center mr-20">
                                                <img className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                                                <span className="color-white font-sm mr-25">Alice Json</span>
                                                <span className="color-white font-sm">29 April 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")' }}>
                                <Link href="/blog-details">
                                    <div className="box-cover-img">
                                        <div className="content-bottom-2">
                                            <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                            <div className="author d-flex align-items-center mr-20">
                                                <img className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                                                <span className="color-white font-sm mr-25">Alice Json</span>
                                                <span className="color-white font-sm">29 April 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")' }}>
                                <Link href="/blog-details">
                                    <div className="box-cover-img">
                                        <div className="content-bottom-2">
                                            <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                            <div className="author d-flex align-items-center mr-20">
                                                <img className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                                                <span className="color-white font-sm mr-25">Alice Json</span>
                                                <span className="color-white font-sm">29 April 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")' }}>
                                <Link href="/blog-details">
                                    <div className="box-cover-img">
                                        <div className="content-bottom-2">
                                            <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                            <div className="author d-flex align-items-center mr-20">
                                                <img className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                                                <span className="color-white font-sm mr-25">Alice Json</span>
                                                <span className="color-white font-sm">29 April 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")' }}>
                                <Link href="/blog-details">
                                    <div className="box-cover-img">
                                        <div className="content-bottom-2">
                                            <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                            <div className="author d-flex align-items-center mr-20">
                                                <img className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                                                <span className="color-white font-sm mr-25">Alice Json</span>
                                                <span className="color-white font-sm">29 April 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperExamples;
