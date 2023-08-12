import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout  from './Pages/Layout';
import Home from './Pages/Home';
import Contacto from './Pages/Contacto';
import Nopages from './Pages/Nopages';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}> 
                <Route path='/' element={<Home />} />
                <Route path='contacto' element={<Contacto />} />
                <Route path='*' element={<Nopages />} />
            </Route>
        </Routes>
    </div>
  )
}

export {App}