// import React, { useState } from "react";
// import Culture from "../culture/Culture";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// const url = "";

// function Login() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//   });

//   const navigate = useNavigate();

//   const [message, setMessage] = useState();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   function handleSubmit() {
//     fetch(url, {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.auth === false) {
//           setMessage(data.token);
//         } else {
//           sessionStorage.setItem("ltk", data.token);
//           // navigate("/culture");
//           window.location.href = "/culture";
//         }
//       });
//   }

//   return (
//     <>
//       <div className="login_form">
//         <center>
//           <h3>Login</h3>
//         </center>
//         <div className="container">
//           {/* <h4 style={{ color: "orangered" }}>{message}</h4> */}
//           <h4 style={{ color: "orangered" }}></h4>
//           <label for="email">
//             <b>Email</b>
//           </label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             required
//             // value={data.email}
//             // onChange={handleChange}
//           />

//           <label for="password">
//             <b>Password</b>
//           </label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             required
//             // value={data.password}
//             // onChange={handleChange}
//           />

//           <button onClick={handleSubmit}>Login</button>
//           <label>
//             <input type="checkbox" name="remember" /> Remember me
//           </label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  function handleSubmit() {
    // Simulating a successful login (replace with your actual fetch logic)
    const mockResponse = {
      auth: true,
      token: "mock-token", // Mock token for demonstration
    };

    if (mockResponse.auth) {
      sessionStorage.setItem("username", data.name); // Store the username
      window.location.href = "/culture"; // Refresh the page and navigate
    } else {
      setMessage(mockResponse.token);
    }
  }

  return (
    <>
      <div className="login_form">
        <center>
          <h3>{data.name ? `Welcome, ${data.name}` : "Login"}</h3>
        </center>
        <div className="container">
          <h4 style={{ color: "orangered" }}>{message}</h4>
          <label htmlFor="email">
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

          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
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
