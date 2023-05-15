import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Education from './components/Education';
import Professional from './components/Professional';
const App = () => {
  return (
    <><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/professional" element={<Professional />} />

    </Routes><div>
        <h1>Recap Base</h1>
      </div></>
  );
}

export default App;
