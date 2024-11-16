import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../../components/common/cmnTemp/cmnTemp";

function Culture() {
  const [cultureData, setCultureData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch("http://localhost:8100/culture", { method: "GET" });
        const data = await response.json();
        setCultureData(data);
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
    return <Template page="Culture News" data={cultureData} />;
  }
}

export default Culture;
