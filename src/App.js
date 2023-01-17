import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import MovieView from './Pages/MovieView';


function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
      <Route path='/view' element={<MovieView />} />
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
