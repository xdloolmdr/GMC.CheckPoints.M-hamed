import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
  };

  return (
    <form className="d-flex flex-column align-items-center my-3" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" className="form-control mb-2" value={newMovie.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" className="form-control mb-2" value={newMovie.description} onChange={handleChange} required />
      <input type="text" name="posterURL" placeholder="Image URL" className="form-control mb-2" value={newMovie.posterURL} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating (1-5)" className="form-control mb-2" min="1" max="5" value={newMovie.rating} onChange={handleChange} required />
      <button type="submit" className="btn btn-success">Add Movie</button>
    </form>
  );
};

export default AddMovie;
