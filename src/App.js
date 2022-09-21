import React, {useState} from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
import Drinks from './components/Drinks';
import Instructions from './components/Instructions'
import HomePage from './pages/HomePage'
import Categories from './pages/Categories'
import About from './pages/About'


function App() {
  return (
    <div className="App">
      
      <Router  basename='/'>
      <NavMenu/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/search/:urlParams" element={<Drinks/>}/>
          <Route path="/filter/:urlParams" element={<Drinks/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/about" element={<About/>}/>
          <Route exact path="/drink" element={<Drinks/>}/>
          <Route exact path="/drink/:id" element={<Instructions/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
