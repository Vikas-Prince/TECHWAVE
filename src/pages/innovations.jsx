import React, { useState, useEffect } from "react";
import Template from "../components/common/cmnTemp/cmnTemp";

function Innovations() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [innovativeNews, setInnovativeNews] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/innovations`, {
          method: "GET",
        });
        const data = await response.json();
        setInnovativeNews(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  return <Template page="Innovations News" data={innovativeNews} />;
}

export default Innovations;
