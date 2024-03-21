import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {TextureLoader} from "three";
import {useEffect, useRef} from "react";
import {ColliderBox} from "./ColliderBox.jsx";
import {Ramp} from "./Ramp.jsx";
import {useBox} from "@react-three/cannon";
export function Track(){
    const result = useLoader(
        GLTFLoader,
        "/models/track.glb"
    )
    const colorMap = useLoader(
        TextureLoader,
        "/textures/track.png"
    )





    useEffect(()=>{
        colorMap.anisotropy = 16
    }, [colorMap]);
    let geometry = result.scene.children[0].geometry;
    return(
        <>
            {/*<mesh>*/}
            {/*    <primitive object={geometry} aatach={"geometry"}/>*/}
            {/*    <meshBasicMaterial*/}
            {/*        toneMapped={false}*/}
            {/*        map={colorMap}*/}
            {/*    />*/}

            {/*</mesh>*/}

        </>
    )
}