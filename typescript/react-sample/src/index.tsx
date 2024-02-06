import React from 'react';
import { createRoot } from 'react-dom/client';
import PokemonInfo from './components/poke'; // ファイルパスはあなたのプロジェクトによります
import PokemonList from './components/poke_list'; // ファイルパスはあなたのプロジェクトによります

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <PokemonInfo />
      <PokemonList />
    </React.StrictMode>
  );
}
