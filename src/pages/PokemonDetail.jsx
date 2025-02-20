import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "../services/pokemonAPI";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonById(id).then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p className="mt-2">Tipo: {pokemon.type}</p>
      <p>Peso: {pokemon.weight} kg</p>
    </div>
  );
};

export default PokemonDetail;