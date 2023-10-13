import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Photos } from './components/Photos/Photos';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
