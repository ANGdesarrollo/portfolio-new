import React, {Suspense, useState} from 'react'
import './App.css'

const Canvas = React.lazy(() => import("@react-three/fiber").then(module => ({ default: module.Canvas })));
const Experience = React.lazy(() => import("./features/experience/Experience.jsx").then(module => ({default: module.Experience})))
function App() {
    const [data, setData] = useState(false);
    return (
        <>
            <div>holaaaa</div>
            {data &&
                <Suspense>
                <Canvas>
                <Experience/>
                </Canvas>
                </Suspense>
            }
        </>
    )
}

export default App;
