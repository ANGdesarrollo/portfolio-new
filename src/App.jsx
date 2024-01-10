import React, { Suspense } from 'react';
import { Navbar } from './features/navbar/template/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';


// const CanvasApp = React.lazy(() => import('./features/canvas/CanvasApp.jsx').then(module => ({ default: module.CanvasApp })));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        {/*<Suspense fallback={<div>Loading bitch....</div>}>*/}
        {/*  <CanvasApp/>*/}
        {/*</Suspense>*/}
      </BrowserRouter>
    </>
  );
}

export default App;
