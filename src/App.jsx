import React from 'react';
import { Navbar } from './features/navbar/template/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CanvasApp } from './features/canvas/CanvasApp.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <CanvasApp/>
      </BrowserRouter>
    </>
  );
}

export default App;
