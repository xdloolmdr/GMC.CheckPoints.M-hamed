import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  const [movies, setMovies] = useState();

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === "" || movie.rating === Number(searchRating))
  );

  return (
    <Router>
      <div className="container text-center mt-3">
        <h1>🎬 Movie App 🎥</h1>
        <Routes>
          <Route
            path="/"
            element={
             
            }
          />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
