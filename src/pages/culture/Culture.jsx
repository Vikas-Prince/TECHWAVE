import React, { useState, useEffect } from "react";
import Template from "../../components/common/cmnTemp/cmnTemp";

function Culture() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [cultureData, setCultureData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/culture`, { method: "GET" });
        const data = await response.json();
        setCultureData(data);
        console.log(">>>", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  return <Template page="Culture News" data={cultureData} />;
}

export default Culture;
