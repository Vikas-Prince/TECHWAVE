import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../login/login.css";

const url = "http://3.17.216.66:5000/api/auth/register";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const redirect = () => {
    console.log(data);
    axios
      .post(url, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(navigate("/"));
  };

  return (
    <>
      <div className="login_form">
        <center>
          <h3>Sign Up</h3>
        </center>
        <div className="container">
          <label for="name">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
          />

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

          <label for="confirm_password">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            required
            value={data.confirm_password}
            onChange={handleChange}
          />

          <button onClick={redirect}>Register</button>
        </div>
      </div>
    </>
  );
}

export default Register;
