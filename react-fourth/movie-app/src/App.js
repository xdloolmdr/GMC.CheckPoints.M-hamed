import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="container text-center mt-3">
        <h1>🎬 Movie App 🎥</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
