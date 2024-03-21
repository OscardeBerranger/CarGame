import './App.css'
import {Canvas} from "@react-three/fiber";
import {Scene} from "./Scene";
import {Physics} from "@react-three/cannon";

function App() {

  return (
    <>
        <Canvas className={"RootCanvas"}>
            <Physics
                broadphase="SAP"
                gravity={[0, -2.6, 0]}
            >
                <Scene />
            </Physics>
        </Canvas>
    </>
  )
}

export default App
