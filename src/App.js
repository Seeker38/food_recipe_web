import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Category1 from './components/pages/Category1';
import Category2 from './components/pages/Category2';
import Category3 from './components/pages/Category3';
import Category4 from './components/pages/Category4';
import Troll from './components/pages/Troll';
import Sponsorships from './components/pages/Sponsorships';
import Members from './components/pages/Members';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/Category1' element={<Category1/>} />
          <Route path='/Category2' element={<Category2/>} />
          <Route path='/Category3' element={<Category3/>} />
          <Route path='/Category4' element={<Category4/>} />
          <Route path= '/Troll' element={<Troll/>} />
          <Route path='/Sponsorships' element={<Sponsorships/>} /> 
          <Route path='/Members' element={<Members/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
