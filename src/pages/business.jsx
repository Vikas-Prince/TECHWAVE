import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../components/common/cmnTemp/cmnTemp";

function Business() {
  const [businessNews, setBusinessNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch("http://13.201.36.238:8100/business", {
          method: "GET",
        });
        const data = await response.json();
        setBusinessNews(data);
        console.log(">>>", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNewsData();
  }, []);

  if (sessionStorage.getItem("username") == null) {
    navigate("/login");
  } else {
    return <Template page="Business News" data={businessNews} />;
  }
}

export default Business;
