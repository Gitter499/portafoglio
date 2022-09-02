import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";

export interface IProps {};

export const Box: FC<IProps> = (props) => {
    const ref = useRef(null)

   useFrame((state, delta) => {
     ref.current.rotation.x += 0.01
     ref.current.rotation.y += 0.01

   })
    return (
        <mesh ref={ref}>
            <boxGeometry />
            <shaderMaterial />
        </mesh>
    );
}
