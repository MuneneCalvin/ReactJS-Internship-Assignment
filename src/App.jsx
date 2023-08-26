import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import Adduser from './Pages/addUser/addUser';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<Adduser />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App