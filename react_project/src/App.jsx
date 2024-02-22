import React from "react";
import {
  Routes, Link, Route, useLocation
} from "react-router-dom";
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';
import './App.css';


function App() {

  const location = useLocation();

  return (
    <div className="main">
      <header>
        <nav className="nav justify-content-center" > 
          <ul className="d-flex nav-item justify-content-center flex-row">
            <li className="nav-link">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </li>
            <li className="nav-link">
              <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>Create</Link>
            </li>
            <li className="nav-link">
              <Link to='/note' className={location.pathname === '/note' ? 'active' : ''}>Note</Link>
            </li>
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
