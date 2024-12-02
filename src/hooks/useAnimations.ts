import { useSpring } from '@react-spring/three';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export const useFloatingAnimation = () => {
  const spring = useSpring({
    loop: true,
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        await next({ y: 0.5 });
        await next({ y: -0.5 });
      }
    },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return {
    positionY: spring.y,
  };
};

export const useRotationAnimation = () => {
  const spring = useSpring({
    loop: true,
    from: { rotation: 0 },
    to: { rotation: Math.PI * 2 },
    config: { duration: 8000 },
  });

  return {
    rotationY: spring.rotation,
  };
};


export const useFadeInScale = (delay = 0) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return {
    ref,
    style: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'scale(1)' : 'scale(0.8)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    },
  };
};

export const useTypewriter = (text: string, speed = 100) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let timer: NodeJS.Timeout | null = null;

    const typeCharacter = () => {
      if (i < text.length) {
        const char = text.charAt(i);
        
        // Add character to display text
        setDisplayText((prev) => prev + char);
        i++;

        // Set a timeout to type the next character with a delay
        timer = setTimeout(typeCharacter, speed);
      }
    };

    // Start typing immediately
    typeCharacter();

    // Cleanup function to clear the timer if the component unmounts or the text changes
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text, speed]);

  return displayText;
};




export const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
};