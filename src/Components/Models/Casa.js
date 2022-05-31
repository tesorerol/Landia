import React, { useRef } from 'react'
import { useFBX } from '@react-three/drei'
export default function Casa(props) {
    const group = useRef()
    const Vsion = useFBX("https://landiaworld.s3.sa-east-1.amazonaws.com/casa.fbx")
    return <primitive ref={group} object={Vsion} dispose={null} scale={0.06} position={[-100, 0.2, 10]} rotation={[0, Math.PI / 2, 0]} />
}