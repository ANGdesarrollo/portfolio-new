import { Canvas } from "@react-three/fiber";
import {Experience} from "./features/experience/Experience.jsx";
import './App.css';

function App() {
    return (
        <>
            <Canvas camera={{
                position: [0, 0, 5],
                fov: 30,
            }}>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <color attach="background" args={["#ececec"]} />
                <Experience />
            </Canvas>
        </>
    );
}

export default App;
