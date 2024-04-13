import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';

export default function BlogInnerPage() {
    return (
        <>
            <Layout>
                <section className="section-box">
                <div className="banner-hero2 bg-img-laptop2">
                <div className="col">
                    <div>
                    <img src="../assets/imgs/page/blog-page/BlogHero1.jpeg" />
                    <div style={{ position: 'absolute', top: '20%', left: '6.7%' }}>
                    <h2 className="bloginnerheading">Blog</h2>
                    <p className="bloginnertext" >Get the latest news, updates and tips</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="archive-header-blogpage pt-50 text-center">
                        <div className="container1" style={{ position: 'relative', zIndex: '1', maxWidth: '77%', padding: '0 15px' }}>
                            <div className="box-white">
                                <div className="max-width-single">
                                    <Link legacyBehavior href="#">
                                        <a className="btn btn-tag" style={{ fontSize: '18px' }}>Category</a>
                                    </Link>
                                    <h2 className="mb-30 mt-20 text-center" style={{ fontSize: '40px' }}>11 Tips to Help You Get New Clients Through Cold Calling</h2>
                                    <div className="post-meta text-muted d-flex align-items-center mx-auto justify-content-center">
                                        <div className="author d-flex align-items-center mr-30">
                                            <img alt="jobBox" src="../assets/imgs/page/blog-page/Kristian.jpg" />
                                            <span style={{ fontSize: '16px' }}>David Bond</span>
                                        </div>
                                        <div className="date">
                                            <span className="font-xs color-text-paragraph-2 mr-20 d-inline-block" style={{ fontSize: '16px !important' }}>
                                                <img className="img-middle mr-5" src="../assets/imgs/page/blog-page/calendar.svg" /> 06 April 2024
                                            </span>
                                            <span className="font-xs color-text-paragraph-2 d-inline-block" style={{ fontSize: '16px !important' }}>
                                                <img className="img-middle mr-5" src="../assets/imgs/page/blog-page/time.svg" /> 8 mins to read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="post-loop-grid" style={{marginTop: '-30px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="single-body">
                                    <div className="max-width-single">
                                        <div className="font-lg mb-30">
                                            <p style={{ fontSize: '18px', lineHeight: '30px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin at turpis eget sapien pulvinar luctus. Vestibulum bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend. Duis id iaculis risus, quis ullamcorper augue. Nunc tristique venenatis ipsum at euismod. Pellentesque id arcu est.</p>
                                        </div>
                                    </div>
                                    <figure>
                                        <img src="../assets/imgs/page/blog-page/BlogInnerPageMidImage.png" />
                                    </figure>
                                    <div className="max-width-single">
                                        <div className="content-single">
                                            <p />
                                            <p style={{ lineHeight: '30px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec, finibus malesuada mi. Proin at turpis eget sapien pulvinar luctus. Vestibulum bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend. Duis id iaculis risus, quis ullamcorper augue. Nunc tristique venenatis ipsum at euismod. Pellentesque id arcu est.</p>
                                            <h4>In ut odio libero</h4>
                                            <ul style={{ fontWeight: '500', textAlign: 'justify' }}>
                                                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                                <li>5+ years of industry experience in interactive design and / or visual design</li>
                                                <li>Excellent interpersonal skills </li>
                                                <li>Aware of trends in mobile, communications, and collaboration</li>
                                                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                                <li>History of impacting shipping products with your work</li>
                                                <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                                                <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                            </ul>
                                            <p />
                                            <p style={{ fontWeight: '500', lineHeight: '30px', textAlign: 'justify' }}>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio.</p>
                                        </div>
                                        <div className="single-apply-jobs mt-20">
                                            <div className="row">
                                                <div className="col-lg-7" >
                                                    <Link legacyBehavior href="#">
                                                        <a className="btn btn-border-3 mr-10 hover-up" style={{ fontWeight: '500' }}># Nature</a>
                                                    </Link>

                                                    <Link legacyBehavior href="#">
                                                        <a className="btn btn-border-3 mr-10 hover-up" style={{ fontWeight: '500' }}># Beauty</a>
                                                    </Link>

                                                    <Link legacyBehavior href="#">
                                                        <a className="btn btn-border-3 hover-up" style={{ fontWeight: '500' }}># Travel tips</a>
                                                    </Link>
                                                </div>
                                                <div className="col-md-5 text-lg-end social-share">
                                                    <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-20 mt-10" style={{ fontSize: '18px' }}>Share</h6>
                                                    <Link legacyBehavior href="#">
                                                        <a className="mr-20 d-inline-block d-middle hover-up">
                                                            <img alt="jobBox" src="../assets/imgs/page/blog-page/fb.svg" />
                                                        </a>
                                                    </Link>

                                                    <Link legacyBehavior href="#">
                                                        <a className="mr-20 d-inline-block d-middle hover-up">
                                                            <img alt="jobBox" src="../assets/imgs/page/blog-page/tw.svg" />
                                                        </a>
                                                    </Link>

                                                    <Link legacyBehavior href="#">
                                                        <a className="mr-0 d-inline-block d-middle hover-up">
                                                            <img alt="jobBox" src="../assets/imgs/page/blog-page/pi.svg" />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Comments</h3>
                                        <ul className="list-comments">
                                            <li>
                                                <div className="author-bio mt-40 bg-white">
                                                    <div className="author-image mb-15">
                                                        <Link legacyBehavior href="/author">
                                                            <a>
                                                                <img className="avatar" src="../assets/imgs/page/blog-page/user5.png" alt />
                                                            </a>
                                                        </Link>

                                                        <div className="author-infor">
                                                            <h6 className="mt-0 mb-0">Robert Fox</h6>
                                                            <p className="mb-0 color-text-paragraph-2 font-sm" style={{ fontSize: '14px !important' }}>August 25, 2022</p>
                                                        </div>
                                                    </div>
                                                    <div className="author-des">
                                                        <p className="font-md color-text-paragraph" style={{ lineHeight: '30px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies interdum massa nec fermentum. Phasellus interdum dignissim rhoncus. Nam vitae semper magna. Donec massa enim</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="author-bio mt-40 bg-white">
                                                    <div className="author-image mb-15">
                                                        <Link legacyBehavior href="/author">
                                                            <a>
                                                                <img className="avatar" src="../assets/imgs/page/blog-page/user1.png" alt />
                                                            </a>
                                                        </Link>

                                                        <div className="author-infor">
                                                            <h6 className="mt-0 mb-0">Jenny Wilson</h6>
                                                            <p className="mb-0 color-text-paragraph-2 font-sm" style={{ fontSize: '14px !important' }}>August 25, 2022</p>
                                                        </div>
                                                    </div>
                                                    <div className="author-des">
                                                        <p className="font-md color-text-paragraph" style={{ lineHeight: '30px !important' }}>White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Nullam vestibulum semper ultrices.</p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="author-bio mt-40 bg-white">
                                                            <div className="author-image mb-15">
                                                                <Link legacyBehavior href="/author">
                                                                    <a>
                                                                        <img className="avatar" src="../assets/imgs/page/blog-page/user3.png" alt />
                                                                    </a>
                                                                </Link>

                                                                <div className="author-infor">
                                                                    <h6 className="mt-0 mb-0">Eleanor Pena</h6>
                                                                    <p className="mb-0 color-text-paragraph-2 font-sm" style={{ fontSize: '14px !important' }}>August 25, 2022</p>
                                                                </div>
                                                            </div>
                                                            <div className="author-des">
                                                                <p className="font-md color-text-paragraph" style={{ lineHeight: '30px !important' }}>White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Nullam vestibulum semper ultrices.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="border-bottom mt-50 mb-50" />
                                        <div className="mt-30">
                                            <h3>Leave a comment</h3>
                                            <div className="form-comment">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <textarea className="input-comment" placeholder="Write a comment" defaultValue={""} />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-7 mb-30">
                                                            <label className="box-agree">
                                                                <input className="chkbox-aggree" type="checkbox" />
                                                                <span className="font-sm color-text-paragraph" style={{ fontSize: '14px !important' }}>Save my name, email, and website in this browser for the next time I comment.</span>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-5 text-end">
                                                            <button className="btn btn-default font-bold" style={{ lineHeight: '16px !important' }}>Post comment</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscription />
            </Layout>
        </>
    );
}
