import React, { useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export function BodyModel({ highlightOrgans }) {
  const { scene } = useGLTF("/body_model.glb"); // Replace with your actual model path

  // Assign colors to specific organs
  useEffect(() => {
    if (highlightOrgans && scene) {
      highlightOrgans.forEach(({ organName, color }) => {
        const organ = scene.getObjectByName(organName); // Find organ by name
        if (organ) {
          organ.material = new THREE.MeshStandardMaterial({ color });
        }
      });
    }
  }, [highlightOrgans, scene]);
  
  console.log(scene);

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
}
