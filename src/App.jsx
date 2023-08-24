import { useState } from 'react';
import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import './styles/styles.css';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}

export default App
