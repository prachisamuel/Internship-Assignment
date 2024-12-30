import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { BodyModel } from "./components/BodyModel";
import { Bounds } from "@react-three/drei";

const patients = [
  {
    id: 1,
    name: "Patient 1",
    conditions: [
      { symptom: "sharp and worsening abdominal pain", organs: ["Object_2", "Object_3"] }
    ]
  },
  {
    id: 2,
    name: "Patient 2",
    conditions: [
      { symptom: "difficulty breathing", organs: ["Object_4", "Object_5"] }
    ]
  }
];

export default function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const highlightOrgans = [
    { organName: "Heart", color: "red" },
    { organName: "Liver", color: "green" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <div>
        <h1>Patient List</h1>
        {patients.map((patient) => (
          <button
            key={patient.id}
            onClick={() => setSelectedPatient(patient)}
            style={{ margin: "10px", padding: "10px", display: "block" }}
          >
            {patient.name}
          </button>
        ))}
      </div>
      <div style={{ width: "60%", height: "500px" }}>
        <Canvas camera={{ position: [0, 0, 20], fov: 30 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} intensity={0.8} angle={0.3} />
          
          <Suspense
            fallback={
              <Html center>
                <div>Loading 3D Model...</div>
              </Html>
            }
          >
            {selectedPatient ? (
              <BodyModel highlightOrgans={highlightOrgans} scale={[0.2, 0.2, 0.2]} />
            ) : (
              <Html center>
                <div>Select a patient to view the 3D body model.</div>
              </Html>
            )}
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
