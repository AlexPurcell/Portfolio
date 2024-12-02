import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated as a } from '@react-spring/three';
import { Mesh, Euler } from 'three';
import { useTheme } from '@/components/ThemeProvider';

export function FloatingCube() {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  // Use spring for animation
  const { scale, position, rotation } = useSpring({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [Math.PI / 4, Math.PI / 4, 0], // Initial rotation (Euler angles)
    config: { mass: 2, tension: 50, friction: 15 },
  });

  // Memoize a function to convert rotation array into Euler
  const eulerRotation = useMemo(() => new Euler(), [rotation]);

  // Update Euler rotation in useFrame
  useFrame(() => {
    if (meshRef.current) {
      // Convert rotation array to Euler
      const [x, y, z] = rotation.get();  // Get the current rotation from spring
      eulerRotation.set(x, y, z);  // Set Euler rotation
      meshRef.current.rotation.copy(eulerRotation); // Apply rotation
    }
  });

  // UseFrame logic for dynamic Y position
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3; // Animate Y position
    }
  });

  return (
    <a.mesh
      ref={meshRef}
      scale={scale.to((x, y, z) => [x, y, z])} // Spring for scale
      position={position.to((x, y, z) => [x, y, z])} // Spring for position
    >
      <boxGeometry args={[2, 2, 2]} />
      <a.meshStandardMaterial
        color={theme === 'dark' ? '#1e40af' : '#3b82f6'}
        wireframe
      />
    </a.mesh>
  );
}
