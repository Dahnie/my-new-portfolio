import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/css/App.css"
import Loader from "./components/Loader";
import Home from "./components/Home"

function App() {
  return (
    // Show a spinner while the profile is loading
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/resume" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/work" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
