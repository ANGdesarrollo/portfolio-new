import React, {Suspense, useState} from 'react'
import './App.css'

const Canvas = React.lazy(() => import("@react-three/fiber").then(module => ({ default: module.Canvas })));
const Experience = React.lazy(() => import("./features/experience/Experience.jsx").then(module => ({default: module.Experience})))
function App() {
    return (
        <>
                <Suspense fallback={<div>Loading bitch....</div>}>
                <Canvas>
                <Experience/>
                </Canvas>
                </Suspense>
        </>
    )
}

export default App;
