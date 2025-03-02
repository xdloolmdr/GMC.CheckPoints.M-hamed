import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL:
        "https://m.media-amazon.com/images/I/51m69WbK7tL._AC_SY679_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A team travels through a wormhole in space.",
      posterURL:
        "https://m.media-amazon.com/images/I/71U1Ffrhu-L._AC_SY679_.jpg",
      rating: 5,
    },
    {
      title: "Joker",
      description: "A mentally troubled comedian's transformation.",
      posterURL:
        "https://m.media-amazon.com/images/I/71zqzTKyKYL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === "" || movie.rating === Number(searchRating))
  );

  return (
    <div className="container text-center mt-3">
      <h1>🎬 Movie App 🎥</h1>
      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
