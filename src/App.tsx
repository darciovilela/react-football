import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Oitenta } from './components/Oitenta';
import { Noventa } from './components/Noventa';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Oitenta />
      <Noventa />
      <Footer />
    </div>
  );
};

export default App;
