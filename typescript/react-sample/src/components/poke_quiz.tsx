import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
}

const PokemonQuiz = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [quizPokemon, setQuizPokemon] = useState<PokemonDetails | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

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

  useEffect(() => {
    if (pokemonList.length > 0) {
      const fetchPokemonDetails = async (pokemon: Pokemon) => {
        try {
          const response = await axios.get<PokemonDetails>(pokemon.url);
          return response.data;
        } catch (error) {
          console.error("Failed to fetch pokemon details");
        }
      };

      const quizPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
      fetchPokemonDetails(quizPokemon).then((details) => {
        if (details) {
          setQuizPokemon(details);

          const wrongChoices: string[] = [];
          while (wrongChoices.length < 2) {
            const choice = pokemonList[Math.floor(Math.random() * pokemonList.length)];
            if (choice.name !== quizPokemon.name && !wrongChoices.includes(choice.name)) {
              wrongChoices.push(choice.name);
            }
          }

          setChoices([quizPokemon.name, ...wrongChoices].sort(() => Math.random() - 0.5));
        }
      });
    }
  }, [pokemonList]);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
  };

  return (
    <div>
      <h2>Pokemon Quiz</h2>
      {quizPokemon && quizPokemon.sprites && quizPokemon.sprites.front_default && (
        <div>
          <h3>Who's that Pokemon?</h3>
          <img src={quizPokemon.sprites.front_default} alt={quizPokemon.name} />
          {choices.map((choice, index) => (
            <button key={index} onClick={() => handleChoice(choice)}>
              {choice}
            </button>
          ))}
          {selectedChoice && (
            <p>
              You selected: {selectedChoice}. That is {selectedChoice === quizPokemon.name ? 'correct' : 'incorrect'}!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonQuiz;
