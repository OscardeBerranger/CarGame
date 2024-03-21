import {useEffect, useState} from "react";

export const useControle = (vehicleApi, chassisApi)=>{
    let [controls, setControls]=useState({})

    useEffect(() => {
        const keyDownPressHandler = (e)=>{
            if (e.key === "b"){
                vehicleApi.setBrake(2, 0)
                vehicleApi.setBrake(2, 1)
                vehicleApi.setBrake(2, 2)
                vehicleApi.setBrake(2, 3)
            }
            setControls((controls)=>({
                ...controls,
                [e.key.toLowerCase()]: true
            }))
        }
        const keyUpPressHandler = (e)=>{
            if (e.key === "b"){
                vehicleApi.setBrake(0, 0)
                vehicleApi.setBrake(0, 1)
                vehicleApi.setBrake(0, 2)
                vehicleApi.setBrake(0, 3)
            }
            setControls((controls)=>({
                ...controls,
                [e.key.toLowerCase()]: false
            }))
        }
        window.addEventListener("keydown", keyDownPressHandler)
        window.addEventListener("keyup", keyUpPressHandler)
        return()=>{
            window.removeEventListener("keydown", keyDownPressHandler)
            window.removeEventListener("keyup", keyUpPressHandler)
        }
    }, []);


    useEffect(() => {
        if (controls.z){
            vehicleApi.applyEngineForce(150, 2)
            vehicleApi.applyEngineForce(150, 3)
        }else if (controls.s){
            vehicleApi.applyEngineForce(-150, 2)
            vehicleApi.applyEngineForce(-150, 3)
        }else {
            vehicleApi.applyEngineForce(0, 2)
            vehicleApi.applyEngineForce(0, 3)
        }

        if (controls.q){
            vehicleApi.setSteeringValue(0.35, 2)
            vehicleApi.setSteeringValue(0.35, 3)
            vehicleApi.setSteeringValue(-0.1, 0)
            vehicleApi.setSteeringValue(-0.1, 1)
        }else if (controls.d){
            vehicleApi.setSteeringValue(-0.35, 2)
            vehicleApi.setSteeringValue(-0.35, 3)
            vehicleApi.setSteeringValue(0.1, 0)
            vehicleApi.setSteeringValue(0.1, 1)
        }else {
            for (let i = 0; i < 4; i++) {
                vehicleApi.setSteeringValue(0, i)
            }
        }
    }, [controls, vehicleApi, chassisApi]);
    return controls
}