import React, {Suspense, useState} from 'react'
import {Welcome} from "./features/welcome/Welcome.jsx";
import {Navbar} from "./features/navbar/template/Navbar.jsx";
import {useBoolean} from "./features/shared/hooks/useOpenCanvas.js";

const CanvasApp = React.lazy(() => import("./features/canvas/CanvasApp.jsx").then(module => ({default: module.CanvasApp})))
const Experience = React.lazy(() => import("./features/experience/Experience.jsx").then(module => ({default: module.Experience})))

function App() {
    const { boolean: isCanvasActive, handleBoolean: activeCanvas } = useBoolean();
    return (
        <>
            {isCanvasActive && <Navbar/>}
            <main>
                {!isCanvasActive ? <Welcome/> :
                    <Suspense fallback={<div>Loading bitch....</div>}>
                        <CanvasApp>
                            <Experience/>
                        </CanvasApp>
                    </Suspense>
                }
            </main>
        </>
    )
}

export default App;
