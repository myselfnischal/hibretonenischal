import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import Loading from '../../components/elements/Loading';
import { useRouter } from 'next/navigation';
import Subscription from '../../components/Layout/Subscription';
import Grid2 from '../../components/elements/Grid2';
import YellowBanner from '../../components/elements/YellowBanner'
import KickstartButton from '../../components/elements/KickstartButton'

export default function Index() {
  const [data,setData] = useState({})
  const [categories,setCategories] = useState({})
  const [selectedCategory,setSelectedCategory] = useState(0)
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();


  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(`/alison-courses/courses`)
        setData(response.data.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    getCourses();
  },[])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`/alison-courses/categories`)
        setCategories(response.data.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    getCategories();
  },[])

  const handleCategoryFilter = async (id) => {
    setSelectedCategory(id)
    if (id === 0) {
      try {
        const response = await axios.get(`/alison-courses/categories`)
        setCategories(response.data.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
      return
    }
    try {
      const query = {
        "page": 1,
        "category_id": id
      }
      console.log(query)
      const response = await axios.get('alison-courses/courses',{
        params: query
      })
      setData(response.data.data)
    } catch (error) {
      console.log("Couldn't retrieve course: ", error)
    }
  }


  // Render nothing if data is not available yet
  if (Object.keys(data).length === 0 || Object.keys(categories).length === 0) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    if (!searchValue) {

    }
    else {
      dispatch(searchText(searchValue))
      router.push('/search-courses')
    }
  }

  const filteredCategories = categories.filter(({
    courses_count
  }) => courses_count > 0)

  return (
    <>
    <Layout>
      <section className="section-box">
          <div className=" banner-hero bg-img-calculator">
              <div className="container d-flex align-items-center">
                  <div className="row">
                      <div className="col-lg-12">
                          <h2 className="mb-20 ml-20">Online Courses</h2>
                          <p className="color-text-paragraph-2 ml-20">Ipsum in voluptate ipsum reprehenderit.<br/>product development</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="grid__area container assessment-container">
         <div className="row">
            <div className="col-lg-12 mb-30">
                <h2>Free Online Courses</h2>
                <p>Qui adipisicing duis ad fugiat non aliqua labore eiusmod ut et non.</p>
            </div>
            <section className='section-box mb-50'>
               <YellowBanner />
            </section>
         </div>
      </section>
      <section className="course__area pt-20 pb-90 grey-bg-3">
        <div className="container">

          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-3">
              <div className="course__sidebar">
                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-search">
                    <form onSubmit={handleSubmit}>
                      <input onChange={(e) => setSearchValue(e.target.value)} type="text"
                        placeholder="Search" />
                    </form>
                  </div>
                </div>
                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Categories</h3>
                    <ul>
                      <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center" onClick={() => handleCategoryFilter(0)}>
                          <input type="radio" readOnly checked={selectedCategory === 0 ? "checked" : ""} />
                          <label>All</label>
                        </div>
                      </li>
                      {filteredCategories.map((category) => (
                        <li>
                          <div className="course__sidebar-check mb-10 d-flex align-items-center" onClick={() => handleCategoryFilter(category.id)}>
                            <input type="radio" readOnly checked={selectedCategory === category.id ? "checked" : ""}/>
                            <label> {category.code.toUpperCase().replaceAll("-"," ")} </label>
                          </div>
                        </li>
                      ))}

                    </ul>

                  </div>
                </div>

              </div>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-9">

              <div className="row">
                <div className="col-12">
                  <div className="course__tab-content">
                    <div className="tab-content" id="courseTabContent">
                      <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                        <div className="row">
                          <Grid2 data={data} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
}
