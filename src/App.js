import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comments from "./pages/Comments.jsx";
import Product from "./pages/Product.jsx";
import Productlist from "./pages/Productlist.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<Productlist />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
  );
};

export default App;
