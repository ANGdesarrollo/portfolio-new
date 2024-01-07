import React, {Suspense} from 'react'
import {Welcome} from "./features/welcome/Welcome.jsx";
import {Navbar} from "./features/navbar/template/Navbar.jsx";
import {useBoolean} from "./features/shared/hooks/useOpenCanvas.js";

const CanvasApp = React.lazy(() => import("./features/canvas/CanvasApp.jsx").then(module => ({default: module.CanvasApp})));

function App() {
    const { boolean: isCanvasActive, handleBoolean: handleActiveCanvas } = useBoolean();
    return (
        <>
            {isCanvasActive && <Navbar/>}
            <main>
                {!isCanvasActive ? <Welcome handleActiveCanvas={handleActiveCanvas}/> :
                    <Suspense fallback={<div>Loading bitch....</div>}>
                        <CanvasApp/>
                    </Suspense>
                }
            </main>
        </>
    )
}

export default App;
