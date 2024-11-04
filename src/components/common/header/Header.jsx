// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Head from "./Head";
// import "./header.css";
// import { Link } from "react-router-dom";
// import { FaRegCircleUser } from "react-icons/fa6";

// const url = "http://3.17.216.66:5000/api/auth/userinfo";

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [userData, setUserData] = useState();
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const res = await fetch(url, {
//         method: "GET",
//         headers: {
//           "x-access-token": sessionStorage.getItem("ltk"),
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await res.json();
//       setUserData(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setUserData(null);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("ltk");
//     setUserData(null);
//     navigate("/login");
//   };

//   return (
//     <>
//       <Head />
//       <header>
//         <div className="container paddingSmall">
//           <nav className="nav_margin">
//             <ul
//               className={navbar ? "navbar" : "flex"}
//               onClick={() => setNavbar(false)}
//             >
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/culture">Culture</Link>
//               </li>
//               <li>
//                 <Link to="/politics">Politics</Link>
//               </li>
//               <li>
//                 <Link to="/business">Business</Link>
//               </li>
//               <li>
//                 <Link to="/sports">Sports</Link>
//               </li>
//               <li>
//                 <Link to="/tech">Tech</Link>
//               </li>
//               <li>
//                 <Link to="/innovations">Innovations</Link>
//               </li>
//             </ul>
//             <div className="login_signup">
//               {" "}
//               {userData ? (
//                 <>
//                   <div className="username">
//                     <span>
//                       {" "}
//                       <FaRegCircleUser size={20} />
//                     </span>
//                     <span>{userData.name}</span>
//                   </div>
//                   <button className="logout" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login" className="login">
//                     Login
//                   </Link>
//                   <Link to="/register" className="signup">
//                     Signup
//                   </Link>
//                 </>
//               )}{" "}
//             </div>
//             <button className="barIcon" onClick={() => setNavbar(!navbar)}>
//               {navbar ? (
//                 <i className="fa fa-times"></i>
//               ) : (
//                 <i className="fa fa-bars"></i>
//               )}
//             </button>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (username) {
      setUserData({ name: username });
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("username"); // Clear username on logout
    setUserData(null);
    navigate("/login");
  };

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav className="nav_margin">
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culture">Culture</Link>
              </li>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/tech">Tech</Link>
              </li>
              <li>
                <Link to="/innovations">Innovations</Link>
              </li>
            </ul>
            <div className="login_signup">
              {userData ? (
                <>
                  <div className="username">
                    <span>
                      <FaRegCircleUser size={20} />
                    </span>
                    <span>{userData.name}</span>
                  </div>
                  <button className="logout" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="login">
                    Login
                  </Link>
                  <Link to="/register" className="signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
