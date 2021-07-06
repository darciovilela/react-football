import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Oitenta } from './components/Oitenta';
import { Noventa } from './components/Noventa';

function App() {
  const [page, setPage] = useState('Oitenta');

  const switchPage = () => {
    switch (page) {
      case 'Oitenta':
        return <Oitenta />;
      case 'Noventa':
        return <Noventa />;
    }
  };

  return (
    <div className="App">
      <Header setpage={setPage} />
      {switchPage()}
      <Footer />
    </div>
  );
}

export default App;
