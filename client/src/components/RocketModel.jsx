// src/components/RocketModel.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Rocket() {
  const { scene } = useGLTF('/model/discovery/scene.gltf');
  return <primitive object={scene} />;
}

export default function RocketModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Rocket />
      <OrbitControls />
    </Canvas>
  );
}
