import React from 'react';
import { createRoot } from 'react-dom/client';
// import Hello from './components/Hello';
// import Name from './components/Name';
// import Message from './components/Message';
// import Parent from './components/ContainerSample';
// import Page from './components/ContextSample';
// import Counter from './components/counter';
// import { Parent } from './components/Parent';
// import Parent from './components/callback';
// import { UseMemoSample } from './components/UseMemoSample';
// import Clock from './components/Clock';
// import Parent from './components/useContext';
// import ImageUploader from './components/useRef'
// import Parent from "./components/showMessage";
import { Input } from "./components/custom";

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      {/* <Hello /> */}
      {/* <Name /> */}
      {/* <Message /> */}
      {/* <Parent /> */}
      {/* <Page /> */}
      {/* <Counter initialValue={0} /> */}
      {/* <Parent /> */}
      {/* <UseMemoSample /> */}
      {/* <Clock /> */}
      {/* <ImageUploader /> */}
      {/* <Parent /> */}
      <Input />
    </React.StrictMode>
  );
}