import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import './index.css'
import About from "./views/About.jsx";
import Experience from "./views/Experience.jsx";
import Contact from "./views/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Studies from "./views/Studies.jsx";
import Works from "./views/Works.jsx";

const AppWithHeader = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolioGustavoMejia">
      <AppWithHeader />
    </BrowserRouter>
  </React.StrictMode>
);

