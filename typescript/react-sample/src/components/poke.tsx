import React, { useState } from 'react';
import axios from 'axios';

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}

const PokemonInfo = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const searchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error("The pokemon was not found");
    }
  };

  return (
    <div>
      <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
      <button onClick={searchPokemon}>Search</button>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
