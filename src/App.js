import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./pages/culture/Culture";
import Routing from "./Routing";
import Innovations from "./pages/innovations";
import Tech from "./pages/tech";
import Business from "./pages/business";
import Sports from "./pages/sports";
import Politics from "./pages/politics";
import Login from "./pages/login/login.jsx";
import Register from "./pages/Register/Register.jsx";
import NewsDetails from "./components/common/cmnTemp/NewsDetails";
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
