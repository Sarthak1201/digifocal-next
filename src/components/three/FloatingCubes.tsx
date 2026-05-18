"use client";
// import { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Float, MeshDistortMaterial } from '@react-three/drei';
// import * as THREE from 'three';

// function AnimatedSphere({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
//       meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
//     }
//   });

//   return (
//     <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh ref={meshRef} position={position} scale={scale}>
//         <icosahedronGeometry args={[1, 1]} />
//         <MeshDistortMaterial
//           color="#a0522d"
//           roughness={0.4}
//           metalness={0.8}
//           distort={0.3}
//           speed={2}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function AnimatedTorus({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
//       meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
//     }
//   });

//   return (
//     <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.4}>
//       <mesh ref={meshRef} position={position} scale={scale}>
//         <torusGeometry args={[1, 0.4, 16, 32]} />
//         <meshStandardMaterial
//           color="#cd853f"
//           roughness={0.3}
//           metalness={0.9}
//           emissive="#8b4513"
//           emissiveIntensity={0.1}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function AnimatedOctahedron({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
//       meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
//     }
//   });

//   return (
//     <Float speed={speed * 1.2} rotationIntensity={0.6} floatIntensity={0.3}>
//       <mesh ref={meshRef} position={position} scale={scale}>
//         <octahedronGeometry args={[1, 0]} />
//         <meshStandardMaterial
//           color="#d2691e"
//           roughness={0.2}
//           metalness={0.95}
//           emissive="#8b4513"
//           emissiveIntensity={0.15}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function ParticleField() {
//   const count = 50;
//   const positions = useMemo(() => {
//     const pos = new Float32Array(count * 3);
//     for (let i = 0; i < count * 3; i += 3) {
//       pos[i] = (Math.random() - 0.5) * 20;
//       pos[i + 1] = (Math.random() - 0.5) * 20;
//       pos[i + 2] = (Math.random() - 0.5) * 20;
//     }
//     return pos;
//   }, []);

//   const ref = useRef<THREE.Points>(null);
  
//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.rotation.y = state.clock.elapsedTime * 0.02;
//     }
//   });

//   return (
//     <points ref={ref}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.05} color="#a0522d" transparent opacity={0.6} />
//     </points>
//   );
// }

// function Scene() {
//   return (
//     <>
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[10, 10, 5]} intensity={1} color="#fff5eb" />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d2691e" />
      
//       <AnimatedSphere position={[3, 1, -2]} scale={0.8} speed={0.5} />
//       <AnimatedTorus position={[-2, -1, -1]} scale={0.6} speed={0.7} />
//       <AnimatedOctahedron position={[1, -2, -3]} scale={0.5} speed={0.6} />
//       <AnimatedSphere position={[-3, 2, -4]} scale={0.4} speed={0.4} />
      
//       <ParticleField />
//     </>
//   );
// }

// export function FloatingCubes() {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <Canvas
//         camera={{ position: [0, 0, 8], fov: 45 }}
//         style={{ background: 'transparent' }}
//         gl={{ alpha: true, antialias: true }}
//       >
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }
