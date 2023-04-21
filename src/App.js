import React from 'react';
import Main from './components/Main';
import './components/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
        </Routes>
        </BrowserRouter>
    
      
      
    </>
  );
}

export default App;
