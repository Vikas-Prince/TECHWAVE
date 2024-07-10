import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Side from "../../home/sideContent/side/Side";
import Slider from "../../singlePage/slider/SinglePageSlider";
import "./cmnTemp.css";

function BusinessDetails() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [details, setCultureData] = useState([]);
  const [searchParams] = useSearchParams();
  const newsId = searchParams.get("id");
  const name = searchParams.get("category");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/${name}?id=${newsId}`, {
          method: "GET",
        });
        console.log("response", response);
        const data = await response.json();
        setCultureData(data[0]);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <React.Fragment>
      <div className="slider_slick" style={{ marginTop: "50px" }}>
        <Slider />
      </div>
      <button
        type="btn"
        className="btn btn-danger top-btn"
        style={{ marginLeft: "20px" }}
        onClick={goBack}
      >
        {" "}
        Go Back
      </button>
      <div className="container details-container">
        <section className="mainContent details">
          <h1 className="title">{details.heading}</h1>
          <div className="author">
            <span>by</span>
            <img src={details.publisher} alt="" />
            <p> {details.name} on</p>
            {/* <label>{item.time}</label> */}
          </div>
          <div className="social">
            <div className="socBox">
              <i className="fab fa-facebook-f"></i>
              <span>SHARE</span>
            </div>
            <div className="socBox">
              <i className="fab fa-twitter"></i>
              <span>TWITTER</span>
            </div>
            <div className="socBox">
              <i className="fab fa-pinterest"></i>
            </div>
            <div className="socBox">
              <i className="fa fa-envelope"></i>
            </div>
          </div>
          <div className="desctop">
            <p>{details.p1}</p>
            <p>{details.p2}</p>
          </div>
          <img src={details.image} alt="" className="image_path" />
          <h2>{details.description}</h2>

          <div className="descbot">
            <p>{details.p4}</p>
            <p>{details.p1}</p>
          </div>
          <div className="quote">
            <i className="fa fa-quote-left"></i>
            <p>{details.p4}</p>
          </div>
          <div className="desctop">
            <p>{details.p1}</p>
            <p>{details.p3}</p>
          </div>
          <button type="btn" className="btn btn-danger" onClick={goBack}>
            {" "}
            Go Back
          </button>
        </section>
        <section className="sideContent">
          <Side />
        </section>
      </div>
    </React.Fragment>
  );
}

export default BusinessDetails;
