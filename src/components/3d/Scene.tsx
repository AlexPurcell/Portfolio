import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { FloatingSpheres } from './FloatingSpheres';
import { Particles } from './Particles';
import { Lighting } from './Lighting';
import { motion } from 'framer-motion-3d';

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
        <Lighting />
        <motion.group
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FloatingCube />
          <FloatingSpheres />
        </motion.group>
        <Particles />
      </Canvas>
    </div>
  );
}