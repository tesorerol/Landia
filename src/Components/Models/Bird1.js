import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Bird1(props) {
    const { bird, camera } = props;
    const { nodes, materials, animations } = useGLTF('/assets/bird.gltf')
    const { actions } = useAnimations(animations, bird)
    useEffect(() => {
        actions.fly.play();
    }, [bird])
    return (
        <group ref={bird} {...props} dispose={null} scale={0.2} position={[0, 20, 0]} rotation={[0, 5, 0]}>
            <group name="Scene">
                <group name="Physical_Sky" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group name="Shadow_Plane" position={[0, 0, -10000]} />
                </group>
                <group name="Esqueleto" position={[0, 2.03, -1.18]}>
                    <primitive object={nodes.Bone} />
                    <skinnedMesh name="dove_Figur" geometry={nodes.dove_Figur.geometry} material={materials['Dove.mtl']} skeleton={nodes.dove_Figur.skeleton} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/assets/bird.gltf')
