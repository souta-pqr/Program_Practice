import React from 'react';
import { createRoot } from 'react-dom/client';
// import Hello from './components/Hello';
// import Name from './components/Name';
// import Message from './components/Message';
import Parent from './components/ContainerSample';

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      {/* <Hello /> */}
      {/* <Name /> */}
      {/* <Message /> */}
      <Parent />
    </React.StrictMode>
  );
}