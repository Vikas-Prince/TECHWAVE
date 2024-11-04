import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../components/common/cmnTemp/cmnTemp";

function Sports() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [sportsNews, setSportsNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/sports`, { method: "GET" });
        const data = await response.json();
        setSportsNews(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  if (sessionStorage.getItem("username") == null) {
    navigate("/login");
  } else {
    return <Template page="Sports News" data={sportsNews} />;
  }
}

export default Sports;
