import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="card m-2"
      style={{ width: "18rem" }}
    >
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text">
          <strong>Rating:</strong> {movie.rating} ⭐
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
