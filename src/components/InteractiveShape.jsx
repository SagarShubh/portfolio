import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AnimatedSphere = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = time * 0.1;
            meshRef.current.rotation.y = time * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 100]} scale={2.4}>
                <MeshDistortMaterial
                    color="#D45B25" // Accent color (matches your orange)
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const InteractiveShape = () => {
    // We use a separate component to wrap Canvas to handle sizing safely
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#2A2A2A" intensity={5} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default InteractiveShape;
