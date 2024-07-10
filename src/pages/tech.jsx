import React, { useState, useEffect } from "react";
import Template from "../components/common/cmnTemp/cmnTemp";

function Tech() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/tech`, { method: "GET" });
        const data = await response.json();
        setTechNews(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  return <Template page="Tech News" data={techNews} />;
}

export default Tech;
