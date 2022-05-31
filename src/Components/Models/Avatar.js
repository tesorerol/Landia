import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { CharacterControls } from '../Three/movement'
import { KeyDisplay } from '../Three/utils'
import { AnimationMixer, Clock } from 'three';
import { useFrame } from '@react-three/fiber';
export default function Avatar(props) {
  const { Orbit, Camera } = props;
  const clock = new Clock();
  const group = useRef()
  const { nodes, materials, animations, scene } = useGLTF('https://landiaworld.s3.sa-east-1.amazonaws.com/avatar.gltf')
  const { actions, mixer } = useAnimations(animations, group);
  let keysPressed = {}
  let characterControls = new CharacterControls(scene, mixer, animations, Orbit.current, Camera.current, 'Idle', actions)
  const keyDisplayQueue = new KeyDisplay();
  document.addEventListener('keydown', (event) => {
    keyDisplayQueue.down(event.key)
    if (event.shiftKey && characterControls) {
      characterControls.switchRunToggle()
    } else {
      (keysPressed)[event.key.toLowerCase()] = true
    }
  }, false);
  document.addEventListener('keyup', (event) => {
    keyDisplayQueue.up(event.key);
    (keysPressed)[event.key.toLowerCase()] = false
  }, false);
  useFrame(() => {
    if (characterControls) {
      let mixerUpdateDelta = clock.getDelta();
      characterControls.update(mixerUpdateDelta, keysPressed);
      Orbit.current.update()
    }
  }, [])
  return (
    <group ref={group} {...props} dispose={null} scale={5}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig4Hips} />
          <group name="Ch12">
            <skinnedMesh name="Malla" geometry={nodes.Malla.geometry} material={materials.Ch12_body} skeleton={nodes.Malla.skeleton} />
            <skinnedMesh name="Malla_1" geometry={nodes.Malla_1.geometry} material={materials.Ch12_hair} skeleton={nodes.Malla_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://landiaworld.s3.sa-east-1.amazonaws.com/avatar.gltf')
