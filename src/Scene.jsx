import {Suspense} from "react";
import {Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Track} from "./Track.jsx";
import {Ground} from "./Ground.jsx";
import {Car} from "./Car.jsx";
import {InterractiveBox} from "./InterractiveBox.jsx";

export function Scene(){
    return(
        <Suspense fallback={null}>
            <Environment
                files={"/textures/envmap.hdr"}
                background={"both"}
            />
            <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40}/>
            <OrbitControls target={[-2.64, -0.71, 0.03]}/>
            <Ground />
            <Track/>
            <InterractiveBox />
            <Car />
        </Suspense>
    )
}