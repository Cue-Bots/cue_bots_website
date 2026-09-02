import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [cursorStyle, setCursorStyle] = useState('default');
  
  // Référence pour garder en mémoire l'élément actuellement survolé
  const activeElement = useRef(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorWidth = useMotionValue(20);
  const cursorHeight = useMotionValue(20);
  const cursorRadius = useMotionValue(10);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const width = useSpring(cursorWidth, springConfig);
  const height = useSpring(cursorHeight, springConfig);
  const borderRadius = useSpring(cursorRadius, springConfig);

  useEffect(() => {
    // 1. Détecte QUAND on entre ou sort d'un élément
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, textarea');
      activeElement.current = target;

      if (target) {
        const isText = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
        if (!isText) {
          // On récupère le border-radius de l'élément pour s'y adapter
          const style = window.getComputedStyle(target);
          const parsedRadius = parseInt(style.borderRadius);
          cursorRadius.set(isNaN(parsedRadius) ? 12 : parsedRadius + 6);
          setCursorStyle('button');
        } else {
          cursorRadius.set(2);
          setCursorStyle('text');
        }
      } else {
        // Retour au curseur normal
        cursorWidth.set(20);
        cursorHeight.set(20);
        cursorRadius.set(10);
        setCursorStyle('default');
      }
    };

    // 2. Gère le mouvement et l'EFFET MAGNÉTIQUE
    const handleMouseMove = (e) => {
      if (!activeElement.current) {
        // Comportement par défaut : suit la souris et se centre
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
        return;
      }

      const target = activeElement.current;
      const rect = target.getBoundingClientRect();
      const isText = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

      if (isText) {
        const h = Math.min(rect.height * 0.7, 32);
        cursorWidth.set(4);
        cursorHeight.set(h);
        cursorX.set(e.clientX - 2);
        cursorY.set(e.clientY - h / 2);
      } else {
        // --- MODE MAGNÉTIQUE (Boutons et Liens) ---
        const padding = 12; // Marge autour du bouton
        const w = rect.width + padding;
        const h = rect.height + padding;
        
        cursorWidth.set(w);
        cursorHeight.set(h);

        // On calcule le centre exact du bouton
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // On calcule la distance de la souris par rapport au centre du bouton
        // Cela crée un micro-mouvement (max 4 pixels) très élégant (parallaxe)
        const offsetX = ((e.clientX - centerX) / (rect.width / 2)) * 4;
        const offsetY = ((e.clientY - centerY) / (rect.height / 2)) * 4;

        // Au lieu de suivre e.clientX, on ACCROCHE le curseur aux coordonnées du bouton !
        cursorX.set(rect.left - (padding / 2) + offsetX);
        cursorY.set(rect.top - (padding / 2) + offsetY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, cursorWidth, cursorHeight, cursorRadius]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const variants = {
    default: { 
      backgroundColor: 'rgba(209, 198, 188, 0.7)', 
      border: 'none' 
    },
    button: { 
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      border: '1px solid rgba(255, 255, 255, 0.2)' 
    },
    text: { 
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      border: 'none' 
    }
  };

  return (
    <motion.div
      style={{
        x, y, width, height, borderRadius,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99998,
      }}
      initial="default"
      animate={cursorStyle}
      variants={variants}
      transition={{ duration: 0.2 }}
    />
  );
}