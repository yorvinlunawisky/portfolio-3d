import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stage} from "@react-three/drei";
import Stack from './Stack.jsx';

const Development = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <Stage>
                <Stack environment="city" intensity={1}/>
            </Stage>
        </Canvas>
    );
}

export default Development;