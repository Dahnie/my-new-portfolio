import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/css/App.css"
import Home from "./components/Home"
import NotFound from "./components/NotFound";

function App() {
  return (
    // Show a spinner while the profile is loading
    <Router>
      <Routes>
        {/* Not found */}
        <Route path="*" element={<NotFound />} />
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Resume */}
        <Route path="/resume" element={<Home />} />
        {/* Work */}
        <Route path="/work" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;