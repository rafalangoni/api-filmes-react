import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);

