import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Busque por um Pokémon..."
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  );
};

export default SearchBar;