import { useTheme } from '@/components/ThemeProvider';

export function Lighting() {
  const { theme } = useTheme();

  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.2 : 0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={theme === 'dark' ? 0.2 : 0.5}
      />
    </>
  );
}