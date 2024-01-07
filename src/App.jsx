import React, {useState} from 'react'
import './App.css'
import { useGLTF } from "@react-three/drei";



function App() {
    const [data, setData] = useState(false);
    return (
        <>
            <div>holaa</div>
            {data && <div>chau</div>}
        </>
    )
}

export default App;
