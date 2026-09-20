"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";

function ScanTooth({ progress }: { progress: number }) {
  const group = useRef<Group>(null);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = progress * Math.PI * 2;
    group.current.rotation.x = 0.2 + progress * 0.3;
  });

  return (
    <group ref={group}>
      <Float speed={0.8} floatIntensity={0.2}>
        <mesh scale={[1.1, 1.4, 0.8]}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#e8f4f6"
            wireframe={progress < 0.5}
            roughness={0.2}
            metalness={0.15}
            transparent
            opacity={0.95}
          />
        </mesh>
        {progress > 0.3 && (
          <mesh scale={[1.15, 1.45, 0.85]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="#3d9a9a" wireframe transparent opacity={0.25} />
          </mesh>
        )}
      </Float>
    </group>
  );
}

interface TechnologyScanSceneProps {
  progress?: number;
  className?: string;
}

export function TechnologyScanScene({
  progress = 0,
  className,
}: TechnologyScanSceneProps) {
  return (
    <div className={className} aria-hidden>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.25]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <pointLight position={[-2, 1, 2]} intensity={0.5} color="#3d9a9a" />
        <Suspense fallback={null}>
          <ScanTooth progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
