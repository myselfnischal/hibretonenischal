import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import DiscoverButton from "../../components/elements/DiscoverButton";
import Subscription from "../../components/Layout/Subscription";
import KickstartButton from "../../components/elements/KickstartButton";
import { useRouter } from "next/router";
import axios from "axios";
import { IoIosShareAlt } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

function useLockBodyScroll(open) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
}

export default function InnerPage() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = currentDate.getMonth();
  const monthName = monthNames[month];
  const year = currentDate.getFullYear();
  const formattedDate = `${day} ${monthName} ${year}`;

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    number_of_business_ideas: "",
    location: "",
  });
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    const { number_of_business_ideas, location } = router.query;
    console.log(number_of_business_ideas,location);  
    setFormData({
      number_of_business_ideas: number_of_business_ideas || "",
      location: location || "",
    });
  }, [router.query]);

  const callAPI = async () => {
    try {
      setLoading(true);
      incrementCounter();
      const response = await axios.post(
        "http://localhost:8000/businessidea",
        formData
      );
      setResponseData(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (formData.number_of_business_ideas && formData.location) {
      callAPI();
    }
  }, [formData]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };



  const handleClick = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
  
      const content = responseData;
      const location = router.query.location;
  
      const pdfResponse = await axios.post(
        "http://localhost:8000/generate-pdf",
        { content,location }
      );

      const pdfBlob = new Blob([pdfResponse.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'generated_business_ideas.pdf');
      document.body.appendChild(link);

      link.click();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleRegenerateClick = async() => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth'
    });
    callAPI();
  }

  useLockBodyScroll(isOpen);

  
  return (
    <>
      <Layout>
        <div className="background-random-industry-intelligence ">
          <DiscoverButton />

          <section className="course__area pt-20 pb-75 grey-bg-3">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-4 col-xl-3 col-lg-3">
                  <div
                    className="course__sidebar"
                    style={{ marginLeft: "5px" }}
                  >
                    <div
                      className="course__sidebar-info"
                      style={{ textAlign: "center" }}
                    >
                      <div className="div-1">
                        <div className="div-2">Overview</div>

                        <div className="div-3" />
                        <div className="div-4">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3966d739773f1551c4c6002add0bc2e41d51a27c33ca1d3932fdef69acd9652f?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            className="img"
                            alt="icon"
                          />
                          <div className="div-5">Number of Ideas </div>
                        </div>
                        <div className="div-6">
                          {" "}
                          {formData.number_of_business_ideas}{" "}
                        </div>

                        <div className="div-7">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3966d739773f1551c4c6002add0bc2e41d51a27c33ca1d3932fdef69acd9652f?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            className="img"
                            alt="icon"
                          />
                          <div className="div-5"> Guide Number </div>
                        </div>
                        <div className="div-6">{`TBI${counter
                          .toString()
                          .padStart(3, "0")}`}</div>

                        <div className="div-7">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d851505b0f32c6cd83e7b1ce733fe851df6a7c3966b90317b41955fd13be155d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            className="img"
                            alt="icon"
                          />
                          <div className="div-5"> Location </div>
                        </div>
                        <div className="div-6">{formData.location}</div>

                        <div className="div-14">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/174809d5b3e32c42ab5fce22b15a815bb39a854a689610d2af97d42b1f822ee6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                            className="img"
                            alt="icon"
                          />
                          <div className="div-5"> Date Produced </div>
                        </div>
                        <div className="div-6"> {formattedDate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="overview-button-d">
                    <button className="previous-button">
                      Previous Guides
                    </button>
                  
                    <button className="example-button">
                      Examples Guides
                    </button>
                  </div>
                </div>

                <div className="col-xxl-8 col-xl-9 col-lg-9">
                  <div className="row">
                    <div className="col-12">
                      <div className="course__tab-content">
                        <div className="tab-content" id="courseTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="grid"
                            role="tabpanel"
                            aria-labelledby="grid-tab"
                          >
                            <div className="row">
                              <h3 className="guideheading">
                                List of Business Ideas
                              </h3>
                              <span className="underline-industry-intelligence"></span>

                              <div
                                className="mb-15"
                                style={{
                                  textAlign: "justify",
                                  marginTop: "11px",
                                }}
                              ></div>
                            </div>
                            <div>
                              {loading ? (
                                <div
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <div
                                    className="spinner-border text-primary"
                                    role="status"
                                  >
                                    <span className="visually-hidden"></span>
                                  </div>
                                  <p
                                    className="descriptionoftitle"
                                    style={{
                                      color: "#3d66f5",
                                    }}
                                  >
                                    Your document is generating. Please wait.
                                  </p>
                                </div>
                              ) : (
                                <>
                                  <div className="row mt-15 mb-15">
                                    <div className="titleforguides">
                                      Overview of Top {" "}
                                      {formData.number_of_business_ideas} Business Ideas
                                      of {formData.location}
                                    </div>
                                    <div
                                      className="mt-10"
                                      style={{
                                        textAlign: "justify",
                                      }}
                                    >
                                      <ul className="bullet-list">
                                        <div
                                          className="mt-10"
                                          style={{
                                            textAlign: "justify",
                                          }}
                                        >
<ul className="bullet-list">
  {responseData &&
    responseData.split('\n')
    .filter(item => item.replace(/^\d+\.\s*/, '').trim() !== '')  // Filter out empty or non-valid entries first
    .map((cleanItem, index) => {
      const [title, description] = cleanItem.split(':');
      return (
        <li key={index} className="descriptionoftitle">
          <span style={{ fontWeight: 'bold' }}>{title}:</span> {description}
        </li>
      );
    })}
</ul>


                                        </div>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="button-container">
                                    <button
                                      className="button regenerate-button"
                                      onClick={handleRegenerateClick}
                                    >
                                      Regenerate
                                    </button>

                                    <button
                                      className="button download-button"
                                      onClick={handleClick} 
                                    >
                                      <span className='share-email-icon'><FiDownload /></span>
                                      Download PDF
                                    </button>
                                    <button className="button share-button">
                                    <span className='share-email-icon'><IoIosShareAlt /></span>
                                    Share by Email
                                    </button>
                                  </div>
                                </>
                              )}
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

          <KickstartButton />
          <Subscription />
        </div>
      </Layout>
    </>
  );
}
