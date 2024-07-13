import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const url = "http://3.17.216.66:5000/api/auth/login";

function Login() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  function handleSubmit() {
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          setMessage(data.token);
        } else {
          sessionStorage.setItem("ltk", data.token);
          navigate("/culture");
        }
      });
  }

  return (
    <>
      <div className="login_form">
        <center>
          <h3>Login</h3>
        </center>
        <div className="container">
          <h4 style={{ color: "orangered" }}>{message}</h4>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={data.password}
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>Login</button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
      </div>
    </>
  );
}

export default Login;
