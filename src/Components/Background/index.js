import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { TextureLoader } from "three";
import { CubeTextureLoader } from "three";

// Loads the skybox texture and applies it to the scene.
function Background(props) {
    const { scene } = useThree();
    const { camera, bird } = props;
    useEffect(() => {
        if (camera?.current && bird?.current) {
            console.log(bird)
            camera.current.lookAt(bird.current.position)
        }
    }, [camera, bird])
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
        "/assets/Stairs/posx.jpg",
        "/assets/Stairs/negx.jpg",
        "/assets/Stairs/posy.jpg",
        "/assets/Stairs/negy.jpg",
        "/assets/Stairs/posz.jpg",
        "/assets/Stairs/negz.jpg"
    ]);

    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
}
export default Background;