import { Canvas } from "@react-three/fiber";
import React, {Suspense} from "react";
import './App.css';

const Experience = React.lazy(() => import('./features/experience/Experience.jsx'));

function App() {
    return (
        <>
            <Canvas camera={{
                position: [0, 0, 5],
                fov: 30,
            }}>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <color attach="background" args={["#ececec"]} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Experience />
                </Suspense>
            </Canvas>
        </>
    );
}
export default App;
