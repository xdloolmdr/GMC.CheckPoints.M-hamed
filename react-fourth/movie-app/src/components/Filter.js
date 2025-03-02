import React from "react";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div className="d-flex justify-content-center my-3">
      <input
        type="text"
        placeholder="Search by title..."
        className="form-control mx-2"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        className="form-control mx-2"
        min="1"
        max="5"
        onChange={(e) => setSearchRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
