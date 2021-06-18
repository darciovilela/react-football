import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Oitenta } from './components/Oitenta';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Oitenta />
      <Footer />
    </div>
  );
};

export default App;
