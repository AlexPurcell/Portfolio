import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Gamepad2, Keyboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function GamePage() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { unityProvider, loadingProgression, isLoaded: unityLoaded, requestFullscreen } =
    useUnityContext({
      loaderUrl: '/AltosRemake/Build/AltosRemake.loader.js',
      dataUrl: '/AltosRemake/Build/AltosRemake.data',
      frameworkUrl: '/AltosRemake/Build/AltosRemake.framework.js',
      codeUrl: '/AltosRemake/Build/AltosRemake.wasm',      
    });

  useEffect(() => {
    setLoadingProgress(loadingProgression * 100);
    setIsLoaded(unityLoaded);
  }, [loadingProgression, unityLoaded]);

  // Wrap the requestFullscreen in an event handler
  const handleFullscreenClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (requestFullscreen) {
      // Pass `true` to enable fullscreen mode
      requestFullscreen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Atmos Remake</h1>
          <p className="text-muted-foreground mb-8">
            Experience the atmospheric adventure in your browser. Use WASD to move and explore the
            world.
          </p>

          <div className="space-y-8">
            {!isLoaded && (
              <Card className="p-6">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Loading Game...</h2>
                  <Progress value={loadingProgress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {loadingProgress.toFixed(0)}% loaded
                  </p>
                </div>
              </Card>
            )}

            <div className="aspect-video bg-black/10 rounded-lg overflow-hidden">
              <Unity
                unityProvider={unityProvider}
                className="w-full h-full"
                style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Keyboard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Controls</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Space - Rotates the Sprite</li>
                      <li>Ctrl - Rotates the Sprite</li>
                      <li>LMB - Rotates the Sprite</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Game Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Atmospheric Environment</li>
                      <li>Dynamic Lighting</li>
                      <li>Immersive Sound Effects</li>
                      <li>Smooth Controls</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleFullscreenClick}
                disabled={!isLoaded}
                className="w-full md:w-auto"
              >
                Play Fullscreen
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
