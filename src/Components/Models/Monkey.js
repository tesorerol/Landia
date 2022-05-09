import React, { useRef } from 'react'
import { useFBX } from '@react-three/drei'
export default function Monkey(props) {
    const group = useRef()
    const Vsion = useFBX("/assets/Monkey.fbx")
    return <primitive ref={group} object={Vsion} dispose={null} scale={2} position={[-2, 0.2, 20]} rotation={[0, Math.PI * 1, 0]} />
}