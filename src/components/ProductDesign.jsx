import React from "react";
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stage} from "@react-three/drei";
import Another_bedroom from './Another_bedroom.jsx'

const ProductDesign = () => {
    return (
        <Canvas>
            <Stage>
                <Another_bedroom environment="city" intensity={0.6}/>
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}

export default ProductDesign;