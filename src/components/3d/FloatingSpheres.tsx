import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Group } from 'three';
import { useTheme } from '@/components/ThemeProvider';

export function FloatingSpheres() {
  const groupRef = useRef<Group>(null);
  const { theme } = useTheme();

  const springs = useSpring({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 100, friction: 10 },
  });

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <animated.group
      ref={groupRef}
      {...springs}
      scale={springs.scale.to((x, y, z) => [x, y, z])} // Map SpringValue to [x, y, z]
    >
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 4,
            Math.sin((i / 5) * Math.PI * 2) * 4,
            0,
          ]}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color={theme === 'dark' ? '#1e40af' : '#3b82f6'}
          />
        </mesh>
      ))}
    </animated.group>
  );
  
}