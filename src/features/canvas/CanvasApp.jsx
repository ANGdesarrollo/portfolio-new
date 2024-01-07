import {Canvas} from "@react-three/fiber";
export const CanvasApp = ({children}) => {
    return(
        <Canvas
            camera={{
                position: [0, 0, 5],
                fov: 30,
            }}
          >
            {children}
        </Canvas>
    )
}

