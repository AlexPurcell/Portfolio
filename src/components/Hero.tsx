import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypewriter, useParallax } from '@/hooks/useAnimations';

export function Hero() {
  const displayText = useTypewriter(" Full Stack Web Developer & Software Engineer", 100);
  const scrollOffset = useParallax();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollOffset * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      
      <div className="container px-6 py-12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 relative"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
              Hi, I'm{' '}
              <span className="text-primary relative">
                Alex
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {displayText}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-12"
          >
            {/* Github Icon Link */}
            <motion.div
              key="github"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://github.com/AlexPurcell" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            </motion.div>

            {/* Linkedin Icon Link */}
            <motion.div
              key="linkedin"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Mail Icon Link */}
            <motion.div
              key="mail"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="relative overflow-hidden group">
                <span className="relative z-10">Get Resume</span>
                <div className="absolute inset-0 bg-primary/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
