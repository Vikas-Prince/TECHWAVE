import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Side from "../../home/sideContent/side/Side";
import Slider from "../../singlePage/slider/SinglePageSlider";
import "./cmnTemp.css";

const Culture = ({ data }) => {
  const renderData = ({ data }) => {
    if (data) {
      if (data.length > 0) {
        return data.map((item) => {
          return (
            <Link
              to={`/details?category=${item.category}&id=${item.id}`}
              className="news_cards col-sm-4"
              key={item.id}
            >
              <img src={item.image} alt={item.heading} />
              <strong>{item.heading}</strong>
              <p>{item.description}</p>
            </Link>
          );
        });
      } else {
        return (
          <div className="loading-container">
            <ClipLoader size={50} color={"#123abc"} loading={true} />
            <h3>Loading....</h3>
          </div>
        );
      }
    } else {
      return (
        <div className="loading-container">
          <ClipLoader size={50} color={"#123abc"} loading={true} />
          <h3>Loading....</h3>
        </div>
      );
    }
  };

  return (
    <>
      <div className="slider">
        <Slider className="slider" />
      </div>
      <section className="culture paddingTB">
        <div className=" news-details row ">{renderData({ data })}</div>
        <aside className="sideContent">
          <Side />
        </aside>
      </section>
    </>
  );
};

export default Culture;
