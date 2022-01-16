import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Lineup from "./Lineup";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineup" element={<Lineup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
