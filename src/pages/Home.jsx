import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { fetchPokemons } from "../services/pokemonAPI";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPokemons().then((data) => setPokemons(data));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;