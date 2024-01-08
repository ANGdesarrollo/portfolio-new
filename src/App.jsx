import React, { Suspense } from 'react';
import { WelcomeTemplate } from './features/welcome/template/WelcomeTemplate.jsx';
import { Navbar } from './features/navbar/template/Navbar.jsx';
import { useBoolean } from './features/shared/hooks/useOpenCanvas.js';
import { Provider } from './context/context.jsx';


const CanvasApp = React.lazy(() => import('./features/canvas/CanvasApp.jsx').then(module => ({ default: module.CanvasApp })));

function App() {
  const { boolean: isCanvasActive, handleBoolean: handleActiveCanvas } = useBoolean();
  return (
    <>
      <Provider>
        {isCanvasActive && <Navbar/>}
        <main>
          {!isCanvasActive ? <WelcomeTemplate handleActiveCanvas={handleActiveCanvas}/> :
            <Suspense fallback={<div>Loading bitch....</div>}>

              <CanvasApp/>

            </Suspense>
          }
        </main>
      </Provider>
    </>
  );
}

export default App;
