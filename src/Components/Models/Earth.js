import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Earth({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://landiaworld.s3.sa-east-1.amazonaws.com/earth.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.ArmatureAction.play();
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="EARTH">
              <mesh name="EARTH_0" geometry={nodes.EARTH_0.geometry} material={materials['Material.001']} />
            </group>
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <group name="ATM" scale={1.01} />
              <skinnedMesh name="ATM_0" geometry={nodes.ATM_0.geometry} material={materials['Material.002']} skeleton={nodes.ATM_0.skeleton} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://landiaworld.s3.sa-east-1.amazonaws.com/earth.gltf')
