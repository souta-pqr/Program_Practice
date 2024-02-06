import React from 'react';
import { createRoot } from 'react-dom/client';
// import PokemonInfo from './components/poke';
// import PokemonList from './components/poke_list';
import PokemonQuiz from './components/poke_quiz';

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      {/* <PokemonInfo />
      <PokemonList /> */}
      <PokemonQuiz />
    </React.StrictMode>
  );
}
