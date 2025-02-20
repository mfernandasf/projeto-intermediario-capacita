import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{pokemon.name}</h2>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="text-blue-500 hover:underline"
      >
        Ver detalhes
      </Link>
    </div>
  );
};

export default Card;