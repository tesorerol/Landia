import React, { useEffect } from 'react'
import * as THREE from 'three';
const Rain = () => {
    let rainGeo = new THREE.CircleBufferGeometry();
    let rainCount = 15000;
    let rainDrop = [];
    for (let index = 0; index < rainCount; index++) {
        rainDrop.push(
            Math.random() * 400 - 200,
            Math.random() * 500 - 250,
            Math.random() * 400 - 200,
        )
    }
    rainDrop = new Float32Array(rainDrop);
    console.log(rainDrop)
    return (
        <mesh>
            <bufferGeometry>
                <bufferAttribute
                    attachObject={["attributes", "position"]}
                    array={rainDrop}
                    itemSize={3}
                    count={6}
                />
            </bufferGeometry>
            <pointsMaterial color={"aaaaaa"} size={0.1} transparent={true} />
        </mesh>
    )
}

export default Rain