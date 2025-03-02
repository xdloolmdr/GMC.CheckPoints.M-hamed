import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text"><strong>Rating:</strong> {movie.rating} ⭐</p>
      </div>
    </div>
  );
};

export default MovieCard;
