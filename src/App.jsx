import React, {Suspense} from 'react'
import {Navbar} from "./features/navbar/template/Navbar.jsx";

const CanvasApp = React.lazy(() => import("./features/canvas/CanvasApp.jsx").then(module => ({default: module.CanvasApp})));

function App() {
    return (
        <>
            <Navbar/>
            <main>
                <Suspense fallback={<div>Loading bitch....</div>}>
                    <CanvasApp/>
                </Suspense>
            </main>
        </>
    )
}

export default App;
