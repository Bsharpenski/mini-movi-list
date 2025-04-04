import React, { useState, useEffect } from "react";

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const url = 

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonDetails(data);
    };

    fetchPokemonDetails();
  }, [url]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <p>Type: {pokemonDetails.types[0].type.name}</p>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
  );
};

export default PokemonCard;
