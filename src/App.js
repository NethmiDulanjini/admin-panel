import React from 'react';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import dashboard from './pages/dashboard.jsx';
import about from './pages/about.jsx';
import analytics from './pages/analytics.jsx';
import comments from './pages/comments.jsx';
import product from './pages/product.jsx';
import productlist from './pages/productlist.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    <Routes>
      <Route path="/" element={<dashboard/>} />
      <Route path="/dashboard" element={<dashboard/>} />
      <Route path="/about" element={<about/>} />
      <Route path="/comment" element={<comments/>} />
      <Route path="/analytics" element={<analytics/>} />
      <Route path="/product" element={<product/>} />
      <Route path="/productlist" element={<productlist/>} />
    </Routes>
    </BrowserRouter>
   
  );
};

export default App;
