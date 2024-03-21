import {useEffect, useRef} from "react";
import {useBox, useRaycastVehicle} from "@react-three/cannon";
import {useWheels} from "./useWheels.jsx";
import {WheelDebug} from "./WheelDebug.jsx";
import {useControle} from "./useControle.jsx";
import {Model} from "./CartoonCarModel.jsx"
export function Car(){
    const position = [-1.5, 0.5, 3]
    const width = 0.15
    const height = 0.07
    const front = 0.15
    const wheelRadius = 0.05
    const chassiBodyArgs = [width, height, front*2]

    const [chassisBody, chassisApi]=useBox(
        ()=>({
            args: chassiBodyArgs,
            mass: 150,
            collisionFilterMask: 2,
            collisionFilterGroup: 1,
            position
        }),
        useRef(null)
    )



    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)

    const [vehicle, vehicleApi]=useRaycastVehicle(
        ()=>({
            chassisBody,
            wheelInfos,
            wheels
        }),
        useRef(null),
    )
    useControle(vehicleApi, chassisApi)

    const pos = useRef([0, 0, 0])

    useEffect(() => {
        chassisApi.position.subscribe(v=>pos.current = v)
    }, []);

    window.addEventListener("keypress", (e)=>{
        if (e.key==="e"){
            console.log(pos)
        }
    })

    return(
        <group ref={vehicle} name="vehicle">
            <group ref={chassisBody} name="chassisBody">
                <Model/>
            </group>
            <WheelDebug wheelRef={wheels[0]} radius={wheelRadius}/>
            <WheelDebug wheelRef={wheels[1]} radius={wheelRadius}/>
            <WheelDebug wheelRef={wheels[2]} radius={wheelRadius}/>
            <WheelDebug wheelRef={wheels[3]} radius={wheelRadius}/>
        </group>

    )
}