import React from 'react';
import './scss/main.css'
import { Header } from './components/layout/Header';
import { First } from './components/layout/First';
import { Trending } from './components/layout/Trending';
import { Worth } from './components/layout/Worth';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <First />
        <Trending />
        <Worth />
      </>
    </div>
  );
}

export default App;
