import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/store/:storeID" element={<Home />} />
          {/* <Route element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
