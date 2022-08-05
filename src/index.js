import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './componentes/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
);

