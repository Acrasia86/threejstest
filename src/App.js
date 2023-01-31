import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { useRef, Suspense } from 'react';
import Model from './components/Model';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
extend({OrbitControls});


const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]}/>
  )
}

const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight intensity={5}/>
    </mesh>
  )
}



function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
    <Canvas 
    style={{background: 'white'}} 
    camera={{position: [3, 3, 3]}}>
      <ambientLight intensity={1}/>
      <Bulb position={[0, 5, 4]}/>
      <Bulb position={[0, 4, -7]}/>
      <Bulb position={[5, 5, 5]}/>
      <Bulb position={[4, 5, 7]}/>
      <Bulb position={[0, 10, -10]}/>
      <Suspense fallback={null}>
      <Model />
      </Suspense>
      <Orbit />
    </Canvas>
    </div>
  );
}

export default App;
