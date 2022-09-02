import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, ReactElement, useState } from "react";

export interface IProps {
    children: ReactElement
};

const SuperCanvas: FC<IProps> = (props) => {



    return (
        <Canvas
            style={{
                position: 'absolute',
                top: 0,
            }}
        >

            <Preload all />
            {props.children}
        </Canvas>
    )
}

export default SuperCanvas
