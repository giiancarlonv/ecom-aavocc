import { useState } from 'react';
import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import './styles/styles.css';
import './styles/product-styles.css'
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mens } from './components/products/Mens';
import { Womens } from './components/products/Womens';
import { Errorpage } from './components/Errorpage';
import { OtherProducts } from './components/products/OtherProducts';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/ecom-aavocc/' element={<Homepage />} />
          <Route path='ecom-aavocc/mens' element={<Mens />} />
          <Route path='ecom-aavocc/womens' element={<Womens />} />
          <Route path='ecom-aavocc/others' element={<OtherProducts />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
