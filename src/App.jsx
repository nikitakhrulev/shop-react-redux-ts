import React, {useState, useEffect} from 'react';

import './scss/main.css'
import { Header } from './components/layout/Header';
import { First } from './components/layout/First';
import { Trending } from './components/layout/Trending';
import { Worth } from './components/layout/Worth';
import { NYSale } from './components/layout/NYSale';
import { Footer } from './components/layout/Footer';
import { Less } from './components/layout/Less';
import { Sidenav } from './components/layout/Sidenav';
// import { getCheap } from './components/services/requests/getCheap';
import { getTrending } from './redux/trending/trending-actions';
import { getCategories } from './redux/categories/categories-actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrending())
    dispatch(getCategories())
  }, [])
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
        <Sidenav />
      </>
    </div>
  );
}

export default App;
