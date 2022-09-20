import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
import Drinks from './components/Drinks';
import Instructions from './components/Instructions'


function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Drinks/>}/>
          <Route path="/search/:urlParams" element={<Drinks/>}/>
          <Route path="/filter/:urlParams" element={<Drinks/>}/>

          <Route exact path="/drink" element={<Drinks/>}/>
          <Route exact path="/drink/:id" element={<Instructions/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
