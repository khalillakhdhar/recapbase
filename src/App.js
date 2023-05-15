import React from 'react';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Home from './components/Home';
import Education from './components/Education';
import Professional from './components/Professional';
import MyForm from './components/MyForm';
import './App.css';
const App = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Application</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="education">Education</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="professional">Professional life</Link>
          </li>
            <li className="nav-item">
            <Link className="nav-link" to="form">Formulaire react</Link>
          </li>
       </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/form" element={<MyForm />} />

    </Routes>

    </>
  );
}

export default App;
