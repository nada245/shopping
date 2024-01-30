import React from 'react';
import { Container } from 'react-bootstrap'
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Store from './component/Store';
import Navbar from './component/Navbar'
import ShoppingProvider from './context/ShoppingContext';
const App = () => {
  return (
    <ShoppingProvider>
    <Navbar/>
  <Container className='mb-4'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </Container>
  </ShoppingProvider>
  )
}

export default App
