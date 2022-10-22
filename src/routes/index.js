import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../Components/Signup";
import Navbar from "../Components/LandingPage/Navbar";
function Navs() {
  return (
    
    
    <Router>
      <Routes>
       
        
        {/* <Route path="/" element={<Navbar /> } /> */}
        <Route path="/" element={<Signup /> } />

      </Routes>
    </Router>
   
  );
}

export default Navs;
