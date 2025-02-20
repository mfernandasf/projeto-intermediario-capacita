const API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = async () => {
  const response = await fetch(`${API_URL}/pokemon?limit=100`);
  const data = await response.json();
  return data.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
};

export const fetchPokemonById = async (id) => {
  const response = await fetch(`${API_URL}/pokemon/${id}`);
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    type: data.types[0].type.name,
    weight: data.weight / 10,
  };
};