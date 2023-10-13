import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Photos } from './components/Photos/Photos';

function App() {
  return (
    <main className="App">
      <Header />
      <Photos />
    </main>
  );
}

export default App;
