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
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

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
      generateNewQuestion();
    }
  }, [pokemonList]);

  const generateNewQuestion = () => {
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
  };

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
    setIsCorrect(choice === quizPokemon?.name);
  };

  const handleNextQuestion = () => {
    setSelectedChoice(null);
    setIsCorrect(null);
    generateNewQuestion();
  };

  const handleTryAgain = () => {
    setSelectedChoice(null);
    setIsCorrect(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#dfe4ea', borderRadius: '15px', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: '50px', color: '#2f3542', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Pokemon Quiz</h2>
      <h3 style={{ color: '#747d8c', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Who's that Pokemon?</h3>
      {quizPokemon && (
        <div>
          <img src={quizPokemon.sprites.front_default} alt={quizPokemon.name} style={{ width: '150px', height: '150px', borderRadius: '15px', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
            {choices.map((choice, index) => (
              <button key={index} onClick={() => handleChoice(choice)} disabled={selectedChoice !== null} style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: selectedChoice === choice ? (isCorrect ? '#2ed573' : '#ff4757') : '#747d8c', color: 'white' }}>
                {choice}
              </button>
            ))}
          </div>
          {selectedChoice && (
            <div style={{ marginTop: '50px' }}>
              <p style={{ fontSize: '20px', color: '#2f3542' }}>
                You selected: {selectedChoice}. That is {isCorrect ? 'correct' : 'incorrect'}!
              </p>
              {isCorrect ? (
                <button onClick={handleNextQuestion} style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#2ed573', color: 'white' }}>Next Question</button>
              ) : (
                <>
                  <button onClick={handleTryAgain} style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#ff4757', color: 'white' }}>Try Again</button>
                  <button onClick={handleNextQuestion} style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#2ed573', color: 'white', marginLeft: '10px' }}>Next Question</button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonQuiz;
