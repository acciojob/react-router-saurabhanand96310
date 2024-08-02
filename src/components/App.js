
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
        <div>
          <ul>
            <li><link to="/">Home</link></li>
            <li><link to="/About">About</link></li>
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
