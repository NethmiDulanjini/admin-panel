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
    <Routes>
      <Route path="/" element={<dashboard/>}></Route>
      <Route path="/dashboard" element={<dashboard/>}></Route>
      <Route path="/about" element={<about/>}></Route>
      <Route path="/comment" element={<comments/>}></Route>
      <Route path="/analytics" element={<analytics/>}></Route>
      <Route path="/product" element={<product/>}></Route>
      <Route path="/productlist" element={<productlist/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
};

export default App;
