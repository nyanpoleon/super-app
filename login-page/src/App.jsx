import {Route, Routes} from "react-router-dom"
import React from 'react';
import Register from './pages/Register.jsx'
import Category from './pages/Category.jsx'
import './App.css';
// import landingimage from './resources/landingimage.png';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Category" element={<Category />}/>
      <Route />
    </Routes>
    // 
  );

}


export default App;
