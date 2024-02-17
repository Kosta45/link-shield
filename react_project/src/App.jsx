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
        <nav> 
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/create">Create</Link></li>
            <li><Link to='/note'>Note</Link></li>
          </ul>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<Create/>}  />
        <Route path="/note" element={<Note/>}  />
        <Route path="/note/:noteURL" element={<Note/>}  />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
