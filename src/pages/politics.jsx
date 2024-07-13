import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../components/common/cmnTemp/cmnTemp";

function Politics() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [politicsNews, setPoliticsNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/politics`, { method: "GET" });
        const data = await response.json();
        setPoliticsNews(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  if (sessionStorage.getItem("ltk") === null) {
    navigate("/login");
  } else {
    return <Template page="Politics News" data={politicsNews} />;
  }
}

export default Politics;
