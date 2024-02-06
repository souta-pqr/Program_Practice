import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedLetter, setSelectedLetter] = useState('A');

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Failed to fetch pokemon list");
      }
    };

    fetchPokemonList();
  }, []);

  const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.startsWith(selectedLetter.toLowerCase()));

  return (
    <div>
      <h2>Pokemon List</h2>
      <div>
        {Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)).map(letter => (
          <button key={letter} onClick={() => setSelectedLetter(letter)}>{letter}</button>
        ))}
      </div>
      {filteredPokemonList.map((pokemon, index) => (
        <p key={index}>{pokemon.name}</p>
      ))}
    </div>
  );
};

export default PokemonList;
