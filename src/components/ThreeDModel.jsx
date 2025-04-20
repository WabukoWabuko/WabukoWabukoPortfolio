import { Canvas } from '@react-three/fiber';
       import { OrbitControls } from '@react-three/drei';
       import { useRef } from 'react';

       function Cube() {
         const meshRef = useRef();
         return (
           <mesh ref={meshRef}>
             <boxGeometry args={[1, 1, 1]} />
             <meshStandardMaterial color="blue" />
           </mesh>
         );
       }

       function ThreeDModel() {
         return (
           <div style={{ height: '400px' }}>
             <Canvas>
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} />
               <Cube />
               <OrbitControls />
             </Canvas>
           </div>
         );
       }

       export default ThreeDModel;
