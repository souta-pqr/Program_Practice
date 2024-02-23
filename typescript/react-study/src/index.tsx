import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from "./components/Hello";
// import App from './App';
// import Name from "./components/Name";
// import Message from "./components/Message";
import reportWebVitals from './reportWebVitals';
// import Parent from './components/ContainerSample';
// import { Parent } from './components/Parent';
// import UseMemoSample from './components/UseMemoSample';
// import  { Clock } from './components/Clock';
import Parent from "./components/Context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <h1>見出し</h1>
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello />
    <Name />
    <Message />
    <Parent />
    <UseMemoSample /> */}
    {/* <Clock /> */}
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
