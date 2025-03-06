import React, { useState } from "react";
import Filter from "../components/Filter";
import AddMovie from "../components/AddMovie";
import MovieList from "../components/MovieList";
import { movies as moviesList } from "../data/movies";
export default function Home() {
  const [movies, setMovies] = useState(moviesList);

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
    <div>
      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}
