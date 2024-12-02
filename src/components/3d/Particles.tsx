import { motion } from 'framer-motion-3d';
import { useTheme } from '@/components/ThemeProvider';
import { useFloatingAnimation, useRotationAnimation } from '@/hooks/useAnimations';

export function Particles() {
  const { theme } = useTheme();
  const floatingAnimation = useFloatingAnimation();
  const rotationAnimation = useRotationAnimation();

  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
          {...floatingAnimation}
          {...rotationAnimation}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={theme === 'dark' ? '#1e40af' : '#3b82f6'}
            emissive={theme === 'dark' ? '#1e40af' : '#3b82f6'}
            emissiveIntensity={0.5}
          />
        </motion.mesh>
      ))}
    </>
  );
}