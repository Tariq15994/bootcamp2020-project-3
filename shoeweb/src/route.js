import React from 'react';
import Home from './home.js';
import Product from './Product';
import ProductItem from './Productitem.js';
import Navbar from './navBar.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function RouteConfig() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<Home /> }/>
        <Route exact path='/product' element={<Product />  }/>
        <Route path='/productItem/:id' element={<ProductItem /> }/>
        <Route path='*' element={<h1>page 404</h1>} />

      </Routes>

    </Router>
  )
}


export default RouteConfig;