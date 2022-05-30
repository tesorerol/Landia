import React, { useEffect, useRef } from 'react'
import { useFBX } from '@react-three/drei'
import earth from './earth.fbx';
export default function Earth(props) {
    const { earhtG } = props;
    const Vsion = useFBX(earth)
    useEffect(() => {
        document.getElementsByClassName("init")[0].classList.add("ended");
    }, [])
    return <primitive ref={earhtG} object={Vsion} dispose={null} scale={0.01} rotation={[0, Math.PI * 1, 0]} />
}