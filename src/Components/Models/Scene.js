
import React, { useEffect, useRef } from 'react'
import { useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Scene(props) {
  const { camera, orbit, bird } = props;
  const group = useRef()
  const { nodes, materials } = useGLTF("https://landiaworld.s3.sa-east-1.amazonaws.com/test.gltf")
  useFrame(() => {
    // console.log(orbit.current)
    // camera.current.lookAt(bird.current.position)
  }, [])
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, -20]}>
      <group position={[0, 0, 450.95]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Grid_1.geometry} material={materials['Material.001']} position={[0, -0.11, 113.12]} />
        <mesh geometry={nodes['13002_1'].geometry} material={materials['pngaaa.com-364631']} position={[-87.55, -0.88, 248.34]} rotation={[-Math.PI / 2, 0, 0.19]} scale={-438} />
        <mesh geometry={nodes.pebble2575_1.geometry} material={materials['rock wall']} position={[10005.88, -167.72, 11807.54]} rotation={[3.03, -1.1, -0.05]} scale={-55.36} />
        <mesh geometry={nodes.planeplane_1.geometry} material={materials['Material.005']} position={[348.3, -8.03, 148.64]} rotation={[-1.54, 0.2, -1.29]} scale={-238.78} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[0, 3.67, 212.55]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur001_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-238.49, 2.2, 186.19]} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576001_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[31.61, 5.4, 123.6]} rotation={[Math.PI / 2, 0, 0]} scale={13.83} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur002_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-148.23, 2.69, 165.58]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur003_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-148.23, 1.57, 203.1]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur004_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-140.01, 3.36, 182.7]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur005_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-128.65, 3.46, 174.27]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur006_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-107.26, 4.48, 174.27]} scale={1.27} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur007_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-107.26, 2.27, 198.66]} scale={0.46} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur008_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[87.49, 2.2, 180.88]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur009_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-2.77, 3.51, 201.5]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur010_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-2.77, 1.57, 163.98]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur011_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-11, 3.36, 184.37]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur012_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-22.35, 3.46, 192.81]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur013_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-43.74, 2.59, 192.81]} rotation={[-Math.PI, 0, -Math.PI]} scale={1.27} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur014_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-43.74, 0.7, 168.42]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.46} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur015_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[36.62, 2.2, 70.79]} rotation={[0, -1.5, 0]} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur016_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[63.47, 1.4, 159.39]} rotation={[0, -1.5, 0]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur017_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[26.05, 1.57, 162.01]} rotation={[0, -1.5, 0]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur018_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[46.97, 0.72, 168.79]} rotation={[0, -1.5, 0]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur019_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[56.18, 0.82, 179.53]} rotation={[0, -1.5, 0]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur020_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[57.67, 2.03, 200.87]} rotation={[0, -1.5, 0]} scale={1.27} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur021_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[33.33, 1, 202.57]} rotation={[0, -1.5, 0]} scale={0.46} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur022_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[108.05, 2.2, 70.79]} rotation={[0, -1.5, 0]} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur023_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[134.9, 1.66, 159.39]} rotation={[0, -1.5, 0]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur024_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[97.48, 1.57, 162.01]} rotation={[0, -1.5, 0]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur025_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[118.4, 2.25, 168.79]} rotation={[0, -1.5, 0]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur026_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[127.6, 1.6, 179.53]} rotation={[0, -1.5, 0]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur027_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[129.1, 2.62, 200.87]} rotation={[0, -1.5, 0]} scale={1.27} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur028_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[104.76, 2.27, 202.57]} rotation={[0, -1.5, 0]} scale={0.46} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur029_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[172.27, 1.54, 70.79]} rotation={[0, -1.5, 0]} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur030_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[199.13, 1.32, 159.39]} rotation={[0, -1.5, 0]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur031_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[161.7, 1.57, 162.01]} rotation={[0, -1.5, 0]} scale={0.74} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur032_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[182.62, 1.04, 168.79]} rotation={[0, -1.5, 0]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur033_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[191.83, 0.88, 179.53]} rotation={[0, -1.5, 0]} scale={0.45} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur034_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[193.32, 2.74, 200.87]} rotation={[0, -1.5, 0]} scale={1.27} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur035_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[168.99, 1.05, 202.57]} rotation={[0, -1.5, 0]} scale={0.46} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576002_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[117.41, 2.11, 192.19]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576003_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[47.28, 3.67, 157.75]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576004_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[204.14, 1.7, 150.24]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576005_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[197.56, 3.02, 193.45]} rotation={[Math.PI / 2, 0, 0]} scale={8.02} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576006_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-27.49, 5.4, 193.86]} rotation={[Math.PI / 2, 0, Math.PI]} scale={13.83} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576007_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-43.16, 3.67, 159.71]} rotation={[Math.PI / 2, 0, Math.PI]} scale={5.25} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576008_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-111.97, 5.4, 188.17]} rotation={[Math.PI / 2, 0, 2.65]} scale={13.83} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576009_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-141.86, 3.67, 165.4]} rotation={[Math.PI / 2, 0, 2.65]} scale={5.25} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576010_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-130.62, 4.6, 70]} rotation={[Math.PI / 2, 0, 2.65]} scale={13.83} />
        <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576011_1'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-207.64, 3.67, 165.4]} rotation={[Math.PI / 2, 0, 2.65]} scale={5.25} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur036_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[129.1, 2.27, 234.35]} rotation={[0, -1.5, 0]} scale={1.27} />
        <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur037_1'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[49.89, 1.89, 234.35]} rotation={[0, -1.5, 0]} scale={0.85} />
        <mesh geometry={nodes.washingtoniafil003_1.geometry} material={materials.washingtoniafil} position={[-9.07, 2.66, 215.3]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
        <mesh geometry={nodes.washingtoniafil001_1.geometry} material={materials.washingtoniafil} position={[-71.39, 4.17, 188.66]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
        <mesh geometry={nodes.washingtoniafil002_1.geometry} material={materials.washingtoniafil} position={[-178.36, 1.43, 207.18]} rotation={[Math.PI / 2, 0, -2.36]} scale={5.2} />
        <mesh geometry={nodes.washingtoniafil004_1.geometry} material={materials.washingtoniafil} position={[222.31, 3.59, 215.3]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
        <mesh geometry={nodes.washingtoniafil005_1.geometry} material={materials.washingtoniafil} position={[159.99, 4.17, 188.66]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
        <mesh geometry={nodes.washingtoniafil006_1.geometry} material={materials.washingtoniafil} position={[53.02, 2.74, 207.18]} rotation={[Math.PI / 2, 0, -2.36]} scale={5.2} />
        <group position={[242.83, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]}>
          <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['iron old']} position={[242.83, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]} />
        <group position={[59.74, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]}>
          <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Plane002_3.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['iron old']} position={[59.74, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]} />
        <group position={[-137.08, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]}>
          <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Plane004_3.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['iron old']} position={[-137.08, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]} />
        <group position={[248.41, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube_3.geometry} material={materials.qora} />
        </group>
        <group position={[234.5, 0.17, 249.49]}>
          <mesh geometry={nodes.Cube001_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube001_3.geometry} material={materials.qora} />
        </group>
        <group position={[220.58, 0.07, 249.49]}>
          <mesh geometry={nodes.Cube002_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube002_3.geometry} material={materials.qora} />
        </group>
        <group position={[206.66, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube003_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube003_3.geometry} material={materials.qora} />
        </group>
        <group position={[192.74, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube004_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube004_3.geometry} material={materials.qora} />
        </group>
        <group position={[178.83, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube005_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube005_3.geometry} material={materials.qora} />
        </group>
        <group position={[164.91, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube006_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube006_3.geometry} material={materials.qora} />
        </group>
        <group position={[150.99, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube007_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube007_3.geometry} material={materials.qora} />
        </group>
        <group position={[137.08, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube008_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube008_3.geometry} material={materials.qora} />
        </group>
        <group position={[123.16, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube009_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube009_3.geometry} material={materials.qora} />
        </group>
        <group position={[109.24, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube010_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube010_3.geometry} material={materials.qora} />
        </group>
        <group position={[95.32, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube011_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube011_3.geometry} material={materials.qora} />
        </group>
        <group position={[81.41, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube012_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube012_3.geometry} material={materials.qora} />
        </group>
        <group position={[67.49, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube013_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube013_3.geometry} material={materials.qora} />
        </group>
        <group position={[53.57, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube014_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube014_3.geometry} material={materials.qora} />
        </group>
        <group position={[39.65, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube015_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube015_3.geometry} material={materials.qora} />
        </group>
        <group position={[25.74, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube016_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube016_3.geometry} material={materials.qora} />
        </group>
        <group position={[11.82, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube017_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube017_3.geometry} material={materials.qora} />
        </group>
        <group position={[-2.1, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube018_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube018_3.geometry} material={materials.qora} />
        </group>
        <group position={[-16.02, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube019_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube019_3.geometry} material={materials.qora} />
        </group>
        <group position={[-29.93, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube020_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube020_3.geometry} material={materials.qora} />
        </group>
        <group position={[-43.85, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube021_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube021_3.geometry} material={materials.qora} />
        </group>
        <group position={[-57.77, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube022_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube022_3.geometry} material={materials.qora} />
        </group>
        <group position={[-71.68, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube023_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube023_3.geometry} material={materials.qora} />
        </group>
        <group position={[-85.6, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube024_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube024_3.geometry} material={materials.qora} />
        </group>
        <group position={[-99.52, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube025_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube025_3.geometry} material={materials.qora} />
        </group>
        <group position={[-113.44, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube026_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube026_3.geometry} material={materials.qora} />
        </group>
        <group position={[-127.35, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube027_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube027_3.geometry} material={materials.qora} />
        </group>
        <group position={[-141.27, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube028_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube028_3.geometry} material={materials.qora} />
        </group>
        <group position={[-155.19, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube029_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube029_3.geometry} material={materials.qora} />
        </group>
        <group position={[-169.11, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube030_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube030_3.geometry} material={materials.qora} />
        </group>
        <group position={[-183.02, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube031_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube031_3.geometry} material={materials.qora} />
        </group>
        <group position={[-196.94, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube032_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube032_3.geometry} material={materials.qora} />
        </group>
        <group position={[-210.86, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube033_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube033_3.geometry} material={materials.qora} />
        </group>
        <group position={[-224.78, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube034_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube034_3.geometry} material={materials.qora} />
        </group>
        <group position={[-238.69, 0.23, 249.49]}>
          <mesh geometry={nodes.Cube035_2.geometry} material={materials.oq} />
          <mesh geometry={nodes.Cube035_3.geometry} material={materials.qora} />
        </group>
        <mesh geometry={nodes.pebble001_1.geometry} material={materials['rock wall']} position={[-10004.46, -167.81, -11300.99]} rotation={[0.12, 1.1, 3.1]} scale={-55.36} />
        <mesh geometry={nodes.Sphere003_1.geometry} material={materials['Stone 001']} position={[134.55, -24.12, 260.64]} rotation={[-Math.PI, 0, -Math.PI]} />
      </group>
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Stone 001']} position={[-134.85, 30.66, 284.31]} scale={-2.04} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['rock wall']} position={[-132.74, 33.63, 292.82]} scale={[-11.68, -33.21, -33.21]} />
      <mesh geometry={nodes.Grid.geometry} material={materials['Material.001']} position={[0, -0.11, 113.12]} />
      <mesh geometry={nodes['13002'].geometry} material={materials['pngaaa.com-364631']} position={[-87.55, -0.88, 248.34]} rotation={[-Math.PI / 2, 0, 0.19]} scale={-438} />
      <mesh geometry={nodes.pebble2575.geometry} material={materials['rock wall']} position={[10005.88, -167.72, 11807.54]} rotation={[3.03, -1.1, -0.05]} scale={-55.36} />
      <mesh geometry={nodes.planeplane.geometry} material={materials['Material.005']} position={[348.3, -8.03, 148.64]} rotation={[-1.54, 0.2, -1.29]} scale={-238.78} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[0, 3.67, 212.55]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur001'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-238.49, 2.2, 186.19]} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576001'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[31.61, 5.4, 123.6]} rotation={[Math.PI / 2, 0, 0]} scale={13.83} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur002'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-148.23, 2.69, 165.58]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur003'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-148.23, 1.57, 203.1]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur004'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-140.01, 3.36, 182.7]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur005'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-128.65, 3.46, 174.27]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur006'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-107.26, 4.48, 174.27]} scale={1.27} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur007'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-107.26, 2.27, 198.66]} scale={0.46} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur008'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[87.49, 2.2, 180.88]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur009'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-2.77, 3.51, 201.5]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur010'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-2.77, 1.57, 163.98]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur011'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-11, 3.36, 184.37]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur012'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-22.35, 3.46, 192.81]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur013'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-43.74, 2.59, 192.81]} rotation={[-Math.PI, 0, -Math.PI]} scale={1.27} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur014'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[-43.74, 0.7, 168.42]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.46} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur015'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[36.62, 2.2, 70.79]} rotation={[0, -1.5, 0]} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur016'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[63.47, 1.4, 159.39]} rotation={[0, -1.5, 0]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur017'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[26.05, 1.57, 162.01]} rotation={[0, -1.5, 0]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur018'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[46.97, 0.72, 168.79]} rotation={[0, -1.5, 0]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur019'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[56.18, 0.82, 179.53]} rotation={[0, -1.5, 0]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur020'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[57.67, 2.03, 200.87]} rotation={[0, -1.5, 0]} scale={1.27} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur021'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[33.33, 1, 202.57]} rotation={[0, -1.5, 0]} scale={0.46} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur022'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[108.05, 2.2, 70.79]} rotation={[0, -1.5, 0]} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur023'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[134.9, 1.66, 159.39]} rotation={[0, -1.5, 0]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur024'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[97.48, 1.57, 162.01]} rotation={[0, -1.5, 0]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur025'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[118.4, 2.25, 168.79]} rotation={[0, -1.5, 0]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur026'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[127.6, 1.6, 179.53]} rotation={[0, -1.5, 0]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur027'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[129.1, 2.62, 200.87]} rotation={[0, -1.5, 0]} scale={1.27} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur028'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[104.76, 2.27, 202.57]} rotation={[0, -1.5, 0]} scale={0.46} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur029'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[172.27, 1.54, 70.79]} rotation={[0, -1.5, 0]} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur030'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[199.13, 1.32, 159.39]} rotation={[0, -1.5, 0]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur031'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[161.7, 1.57, 162.01]} rotation={[0, -1.5, 0]} scale={0.74} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur032'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[182.62, 1.04, 168.79]} rotation={[0, -1.5, 0]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur033'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[191.83, 0.88, 179.53]} rotation={[0, -1.5, 0]} scale={0.45} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur034'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[193.32, 2.74, 200.87]} rotation={[0, -1.5, 0]} scale={1.27} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur035'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[168.99, 1.05, 202.57]} rotation={[0, -1.5, 0]} scale={0.46} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576002'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[117.41, 2.11, 192.19]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576003'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[47.28, 3.67, 157.75]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576004'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[204.14, 1.7, 150.24]} rotation={[Math.PI / 2, 0, 0]} scale={5.25} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576005'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[197.56, 3.02, 193.45]} rotation={[Math.PI / 2, 0, 0]} scale={8.02} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576006'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-27.49, 5.4, 193.86]} rotation={[Math.PI / 2, 0, Math.PI]} scale={13.83} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576007'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-43.16, 3.67, 159.71]} rotation={[Math.PI / 2, 0, Math.PI]} scale={5.25} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576008'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-111.97, 5.4, 188.17]} rotation={[Math.PI / 2, 0, 2.65]} scale={13.83} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576009'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-141.86, 3.67, 165.4]} rotation={[Math.PI / 2, 0, 2.65]} scale={5.25} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576010'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-130.62, 4.6, 70]} rotation={[Math.PI / 2, 0, 2.65]} scale={13.83} />
      <mesh geometry={nodes['PikPngcom_desert-plants-png_5507576011'].geometry} material={materials['PikPng.com_desert-plants-png_5507576']} position={[-207.64, 3.67, 165.4]} rotation={[Math.PI / 2, 0, 2.65]} scale={5.25} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur036'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[129.1, 2.27, 234.35]} rotation={[0, -1.5, 0]} scale={1.27} />
      <mesh geometry={nodes['531-5319495_palmtree-yucca-desertplant-tropical-plant-natur037'].geometry} material={materials['531-5319495_palmtree-yucca-desertplant-tropical-plant-nature-de']} position={[49.89, 1.89, 234.35]} rotation={[0, -1.5, 0]} scale={0.85} />
      <mesh geometry={nodes.washingtoniafil003.geometry} material={materials.washingtoniafil} position={[-9.07, 2.66, 215.3]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
      <mesh geometry={nodes.washingtoniafil001.geometry} material={materials.washingtoniafil} position={[-71.39, 4.17, 188.66]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
      <mesh geometry={nodes.washingtoniafil002.geometry} material={materials.washingtoniafil} position={[-178.36, 1.43, 207.18]} rotation={[Math.PI / 2, 0, -2.36]} scale={5.2} />
      <mesh geometry={nodes.washingtoniafil004.geometry} material={materials.washingtoniafil} position={[222.31, 3.59, 215.3]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
      <mesh geometry={nodes.washingtoniafil005.geometry} material={materials.washingtoniafil} position={[159.99, 4.17, 188.66]} rotation={[Math.PI / 2, 0, -2.36]} scale={8.46} />
      <mesh geometry={nodes.washingtoniafil006.geometry} material={materials.washingtoniafil} position={[53.02, 2.74, 207.18]} rotation={[Math.PI / 2, 0, -2.36]} scale={5.2} />
      <group position={[242.83, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]}>
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Plane007.geometry} material={materials['iron old']} position={[242.83, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]} />
      <group position={[59.74, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]}>
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Plane003.geometry} material={materials['iron old']} position={[59.74, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]} />
      <group position={[-137.08, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]}>
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane004_3.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Plane005.geometry} material={materials['iron old']} position={[-137.08, 0.36, 249.23]} rotation={[0, -0.42, -Math.PI / 2]} />
      <group position={[248.41, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.qora} />
      </group>
      <group position={[234.5, 0.17, 249.49]}>
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.qora} />
      </group>
      <group position={[220.58, 0.07, 249.49]}>
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.qora} />
      </group>
      <group position={[206.66, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.qora} />
      </group>
      <group position={[192.74, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube004_3.geometry} material={materials.qora} />
      </group>
      <group position={[178.83, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube005_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube005_3.geometry} material={materials.qora} />
      </group>
      <group position={[164.91, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube006_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube006_3.geometry} material={materials.qora} />
      </group>
      <group position={[150.99, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube007_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube007_3.geometry} material={materials.qora} />
      </group>
      <group position={[137.08, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube008_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube008_3.geometry} material={materials.qora} />
      </group>
      <group position={[123.16, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube009_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube009_3.geometry} material={materials.qora} />
      </group>
      <group position={[109.24, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube010_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.qora} />
      </group>
      <group position={[95.32, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube011_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube011_3.geometry} material={materials.qora} />
      </group>
      <group position={[81.41, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube012_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube012_3.geometry} material={materials.qora} />
      </group>
      <group position={[67.49, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube013_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube013_3.geometry} material={materials.qora} />
      </group>
      <group position={[53.57, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube014_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube014_3.geometry} material={materials.qora} />
      </group>
      <group position={[39.65, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube015_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube015_3.geometry} material={materials.qora} />
      </group>
      <group position={[25.74, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube016_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube016_3.geometry} material={materials.qora} />
      </group>
      <group position={[11.82, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube017_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube017_3.geometry} material={materials.qora} />
      </group>
      <group position={[-2.1, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube018_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube018_3.geometry} material={materials.qora} />
      </group>
      <group position={[-16.02, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube019_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube019_3.geometry} material={materials.qora} />
      </group>
      <group position={[-29.93, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube020_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube020_3.geometry} material={materials.qora} />
      </group>
      <group position={[-43.85, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube021_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube021_3.geometry} material={materials.qora} />
      </group>
      <group position={[-57.77, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube022_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube022_3.geometry} material={materials.qora} />
      </group>
      <group position={[-71.68, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube023_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube023_3.geometry} material={materials.qora} />
      </group>
      <group position={[-85.6, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube024_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube024_3.geometry} material={materials.qora} />
      </group>
      <group position={[-99.52, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube025_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube025_3.geometry} material={materials.qora} />
      </group>
      <group position={[-113.44, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube026_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube026_3.geometry} material={materials.qora} />
      </group>
      <group position={[-127.35, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube027_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube027_3.geometry} material={materials.qora} />
      </group>
      <group position={[-141.27, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube028_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube028_3.geometry} material={materials.qora} />
      </group>
      <group position={[-155.19, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube029_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube029_3.geometry} material={materials.qora} />
      </group>
      <group position={[-169.11, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube030_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube030_3.geometry} material={materials.qora} />
      </group>
      <group position={[-183.02, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube031_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube031_3.geometry} material={materials.qora} />
      </group>
      <group position={[-196.94, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube032_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube032_3.geometry} material={materials.qora} />
      </group>
      <group position={[-210.86, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube033_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube033_3.geometry} material={materials.qora} />
      </group>
      <group position={[-224.78, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube034_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube034_3.geometry} material={materials.qora} />
      </group>
      <group position={[-238.69, 0.23, 249.49]}>
        <mesh geometry={nodes.Cube035_2.geometry} material={materials.oq} />
        <mesh geometry={nodes.Cube035_3.geometry} material={materials.qora} />
      </group>
      <mesh geometry={nodes.pebble001.geometry} material={materials['rock wall']} position={[-10004.46, -167.81, -11300.99]} rotation={[0.12, 1.1, 3.1]} scale={-55.36} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['Stone 001']} position={[134.55, -24.12, 260.64]} rotation={[-Math.PI, 0, -Math.PI]} />
    </group>
  )
}