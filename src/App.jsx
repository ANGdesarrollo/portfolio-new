import React, {useState} from 'react'
import './App.css'
import { useGLTF } from "@react-three/drei";
import {Experience} from "./features/experience/Experience.jsx";
import {Canvas} from "@react-three/fiber";



function App() {
    const [data, setData] = useState(false);
    return (
        <>
            <div>holaa</div>
            {data &&
                <Canvas>
                <Experience/>
                </Canvas>
            }
        </>
    )
}

export default App;
