import React, { Suspense, useEffect, useRef } from 'react'
import { Sky, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Bird from '../Models/Bird1'
import Scroll from './scroll'
import Scene from '../Models/Scene'
import Jaguar from '../Models/Jaguar'
import Earth from '../Models/Earth'
import Avatar from '../Models/Avatar'
import Casa from '../Models/Casa'
import Monkey from '../Models/Monkey'

const Three = () => {
    const Camera = useRef();
    const bird = useRef();
    const orb = useRef();


    return (
        <Canvas style={{ width: "100vw", height: "100vh" }}>
            <OrbitControls ref={orb} maxPolarAngle={Math.PI * 0.4} minPolarAngle={Math.PI * 0.4} minDistance={28} maxDistance={28} />
            <PerspectiveCamera ref={Camera} args={[60, window.innerWidth / window.innerHeight, 1, 1000]} position={[0.7800547291882113, 9.122452109071924, -28.065182193405413]} makeDefault />
            {/* <FirstPersonControls/> */}
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Earth />}>
                <Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
                <Bird bird={bird} camera={Camera} />
                <Avatar Camera={Camera} Orbit={orb} />
                {/* <Jaguar /> */}
                {/* <Background camera={Camera} orbit={orb} bird={bird} /> */}
                <Scene camera={Camera} orbit={orb} bird={bird} />
                <Casa />
                <Monkey />
                {/* <Scroll camera={Camera} cube={bird} orb={orb} /> */}
            </Suspense>

        </Canvas>
    )
}

export default Three