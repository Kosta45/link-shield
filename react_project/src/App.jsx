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
        <nav className="nav justify-content-center p-3 mb-2" > 
          <ul className="d-flex justify-content-evenly nav nav-pills nav-fill p-0 bg-white rounded">
            <li className="nav-item m-2">
              <Link to="/" className={location.pathname === '/' ? 'active nav-link' : 'text-dark nav-link'}>Home</Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/about" className={location.pathname === '/about' ? 'active nav-link' : 'text-dark nav-link'}>About</Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/create" className={location.pathname === '/create' ? 'active nav-link' : 'text-dark nav-link'}>Create</Link>
            </li>
            <li className="nav-item m-2">
              <Link to='/note' className={location.pathname === '/note' ? 'active nav-link' : 'text-dark nav-link'}>Note</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
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
