import {useBox} from "@react-three/cannon";
import {useRef} from "react";


export function InterractiveBox(){
    const position = [0, 0, 0]
    const width = 0.2
    const heigh = 0.2
    const front = 0.2

    const chassisBodyArgs = [width, heigh, front]
    const [chassisBody, chassisApi] = useBox(
        ()=>({
            args: chassisBodyArgs,
            mass: 150,
            collisionFilterMask: 1,
            position
        }),
        useRef(null),
    )


    return(
        <mesh ref={chassisBody}>
            <meshBasicMaterial transparent={true} opacity={0.3}/>
            <boxGeometry args={chassisBodyArgs}/>
        </mesh>
    )
}