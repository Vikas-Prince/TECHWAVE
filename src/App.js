import React from "react";
import Header from "./components/common/header/Header.jsx";
import "./App.css";
import Homepages from "./components/home/Homepages.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage.jsx";
import Culture from "./pages/culture/Culture.jsx";
import Routing from "./Routing.js";
import Innovations from "./pages/innovations.jsx";
import Tech from "./pages/tech.jsx";
import Business from "./pages/business.jsx";
import Sports from "./pages/sports.jsx";
import Politics from "./pages/politics.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/Register/Register.jsx";
import NewsDetails from "./components/common/cmnTemp/NewsDetails.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Routing />}>
            <Route index element={<Homepages />} />
            <Route path="/singlepage/:id" element={<SinglePage />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/business" element={<Business />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/innovations" element={<Innovations />} />
            <Route path="/details" element={<NewsDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
