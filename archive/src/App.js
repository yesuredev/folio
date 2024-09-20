import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./comp/Home";
import Career from "./comp/Career";
import Study from "./comp/Study";

// import ScrollAnimation from "./comp/ScrollAnimation";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
            <Link to="/study">Study</Link>
          </li>
        </ul>
      </nav>
      {/* {ScrollAnimation} */}
      <Routes>
        <Route path="*" element={<p>404 error</p>} />
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default App;
