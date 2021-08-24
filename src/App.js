import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Product from './components/Product';
import { productData, productDataTwo } from './components/Data'
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero />
      <Product heading="Choose your favorite" data={productData} />
      <Product heading="Choose your favorite" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
