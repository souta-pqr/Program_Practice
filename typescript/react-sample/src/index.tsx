import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <Hello />
    </React.StrictMode>
  );
}