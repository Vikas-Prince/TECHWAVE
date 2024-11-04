import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../components/common/cmnTemp/cmnTemp";

function Innovations() {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [innovativeNews, setInnovativeNews] = useState([]);
  const navigate = useNavigate();

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

  if (sessionStorage.getItem("username") == null) {
    navigate("/login");
  } else {
    return <Template page="Innovations News" data={innovativeNews} />;
  }
}

export default Innovations;
