import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './scss/main.css'
import { getCheap } from './redux/cheap/cheap-actions';
import { getTrending } from './redux/trending/trending-actions';
import { getCategories } from './redux/categories/categories-actions';
import { useDispatch } from 'react-redux';
import { Homepage } from './components/routes/Homepage';
import { Product } from './components/routes/Product';
import { Cart } from './components/routes/Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrending())
    dispatch(getCategories())
    dispatch(getCheap())
  }, [])
  return (              
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/product/:id' element={ <Product />} />
          <Route path='/cart' element={ <Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
