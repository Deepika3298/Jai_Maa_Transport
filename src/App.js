import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Blogs from './components/Blogs';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
