import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Movie from './stores/MovieContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movie>
    <App />

    </Movie>
    
  </React.StrictMode>
);



