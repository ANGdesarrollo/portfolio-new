import React, { Suspense } from 'react';
import { Navbar } from './features/navbar/template/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/next"

const CanvasApp = React.lazy(() => import('./features/canvas/CanvasApp.jsx').then(module => ({ default: module.CanvasApp })));

function App() {
  return (
    <>
      <BrowserRouter>
        <SpeedInsights/>
        <Navbar/>
        <Suspense fallback={<div>Loading bitch....</div>}>
          <CanvasApp/>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
