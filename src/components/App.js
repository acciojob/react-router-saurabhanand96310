
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
