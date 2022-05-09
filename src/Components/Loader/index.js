import React from 'react'
import logo from '../../Assets/img/landia.png';
const Loader = () => {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" transparent opacity={0.5} />
        </mesh>
    )
}

export default Loader