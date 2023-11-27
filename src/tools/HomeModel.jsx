import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model } from './models/Robot';

export function HomeModel() {
    return <>
        <Canvas style={{height: "100vh"}}>
            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate={true} 
                autoRotateSpeed={3}
                minPolarAngle={1}
                maxPolarAngle={2}
            />
            <Suspense fallback={null}>
                <Model/>
            </Suspense>
        </Canvas>
    </>
}