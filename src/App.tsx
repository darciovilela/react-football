import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Oitenta } from './components/Oitenta';
import { Noventa } from './components/Noventa';
import { Doismil } from './components/Doismil';

function App() {
  const [page, setPage] = useState('Oitenta');

  const switchPage = () => {
    switch (page) {
      case 'Oitenta':
        return <Oitenta />;
      case 'Noventa':
        return <Noventa />;
      case 'Doismil':
        return <Doismil />;
    }
  };

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      {switchPage()}
      <Footer />
    </div>
  );
}

export default App;
