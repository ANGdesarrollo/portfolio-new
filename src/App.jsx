import {Canvas, useLoader} from "@react-three/fiber";
import React, {Suspense, useState} from "react";
import './App.css';
import {Experience} from "./features/experience/Experience.jsx";



function App() {
    const [state, setState] = useState(false);
    return (
        <>
            <button onClick={() => setState(true)}>
                ENTER
            </button>
            {
                state &&
                <Canvas camera={{
                    position: [0, 0, 5],
                    fov: 30,
                }}>
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <color attach="background" args={["#ececec"]} />
                        <Experience />
                </Canvas>
            }
        </>
    );
}
export default App;
