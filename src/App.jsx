import React, { Suspense } from 'react';
import { WelcomeTemplate } from './features/welcome/template/WelcomeTemplate.jsx';
import { Navbar } from './features/navbar/template/Navbar.jsx';
import { useBoolean } from './features/shared/hooks/useOpenCanvas.js';
import { BrowserRouter } from 'react-router-dom';


const CanvasApp = React.lazy(() => import('./features/canvas/CanvasApp.jsx').then(module => ({ default: module.CanvasApp })));

function App() {
  const { boolean: isCanvasActive, handleBoolean: handleActiveCanvas } = useBoolean();
  return (
    <>
      {isCanvasActive ? <WelcomeTemplate handleActiveCanvas={handleActiveCanvas}/> :
        <>
          <BrowserRouter>
            <Navbar/>
            <Suspense fallback={<div>Loading bitch....</div>}>
              <CanvasApp/>
            </Suspense>
          </BrowserRouter>
        </>
      }
    </>
  );
}

export default App;
