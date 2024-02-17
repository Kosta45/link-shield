import React from "react";
import {
  Routes, Link, Route
} from "react-router-dom";
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';
import './App.css';


    <Route exact path="/" element={<Main/>}></Route>


function App() {
  return (
    <div className="main">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Create</Link>
        <Link to='/note'>Note</Link>
      </header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<Create/>}  />
        <Route path="/note" element={<Note/>}  />
        <Route path="/note/:noteURL" element={<Note/>}  />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
