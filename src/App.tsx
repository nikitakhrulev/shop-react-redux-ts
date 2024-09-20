import React from 'react';
import './scss/main.css'
import { Header } from './components/layout/Header';
import { First } from './components/layout/First';
import { Trending } from './components/layout/Trending';
import { Worth } from './components/layout/Worth';
import { NYSale } from './components/layout/NYSale';
import { Footer } from './components/layout/Footer';
import { Less } from './components/layout/Less';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <First />
        <Trending />
        <Worth />
        <NYSale />
        <Less />
        <Footer />
      </>
    </div>
  );
}

export default App;
