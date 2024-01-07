import React, {Suspense, useState} from 'react'

const CanvasApp = React.lazy(() => import("./features/canvas/CanvasApp.jsx").then(module => ({default: module.CanvasApp})))
const Experience = React.lazy(() => import("./features/experience/Experience.jsx").then(module => ({default: module.Experience})))
function App() {
    const [data, setData] = useState(false);
    return (
            <main>
                <div>holaaa</div>
                <button onClick={() => setData(true)}>Click me to see canvas</button>
                {data &&
                    <Suspense fallback={<div>Loading bitch....</div>}>
                        <CanvasApp>
                            <Experience/>
                        </CanvasApp>
                    </Suspense>
                }
            </main>
    )
}

export default App;
