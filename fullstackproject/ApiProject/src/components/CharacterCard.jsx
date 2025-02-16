import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card bg-base-200">
      <div className="car-body">
        {character.name}
        <img src={character.images[0]} alt="" />
        <Link to={"/characters/" + character.name} className="btn btn-info">
          click for details
        </Link>
      </div>
    </div>
  );
}
