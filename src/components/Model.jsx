import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {

    const gltf = useGLTF('/models/scene.gltf')
  return (<primitive 
    object={gltf.scene} 
    scale={new Array(3).fill(0.01)}
    />)
}

export default Model;