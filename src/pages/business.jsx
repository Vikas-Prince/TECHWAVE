import React, { useState, useEffect } from "react";
import Template from "../components/common/cmnTemp/cmnTemp";

function Business() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/business`, { method: "GET" });
        const data = await response.json();
        setBusinessNews(data);
        console.log(">>>", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  return <Template page="Business News" data={businessNews} />;
}

export default Business;
