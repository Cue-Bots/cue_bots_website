import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [cursorStyle, setCursorStyle] = useState('default');
  
  const activeElement = useRef(null);
  // On sauvegarde la position de la souris pour le scroll
  const lastMousePos = useRef({ x: -100, y: -100 });

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
    // Fonction centrale pour calculer la position et la forme
    const updateCursor = (clientX, clientY, target) => {
      if (target) {
        const isText = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
        const rect = target.getBoundingClientRect(); // Calcule la position en direct !

        if (isText) {
          cursorRadius.set(2);
          setCursorStyle('text');

          const h = Math.min(rect.height * 0.7, 32);
          cursorWidth.set(4);
          cursorHeight.set(h);
          cursorX.set(clientX - 2);
          cursorY.set(clientY - h / 2);
        } else {
          const style = window.getComputedStyle(target);
          const parsedRadius = parseInt(style.borderRadius);
          cursorRadius.set(isNaN(parsedRadius) ? 12 : parsedRadius + 6);
          setCursorStyle('button');

          const padding = 12;
          const w = rect.width + padding;
          const h = rect.height + padding;

          cursorWidth.set(w);
          cursorHeight.set(h);

          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const offsetX = ((clientX - centerX) / (rect.width / 2)) * 4;
          const offsetY = ((clientY - centerY) / (rect.height / 2)) * 4;

          // L'ancrage suit la position 'rect.top' qui se met à jour quand on scroll
          cursorX.set(rect.left - (padding / 2) + offsetX);
          cursorY.set(rect.top - (padding / 2) + offsetY);
        }
      } else {
        // Retour à la normale
        cursorWidth.set(20);
        cursorHeight.set(20);
        cursorRadius.set(10);
        setCursorStyle('default');

        cursorX.set(clientX - 16);
        cursorY.set(clientY - 16);
      }
    };

    // 1. Quand la souris bouge
    const handleMouseMove = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      updateCursor(e.clientX, e.clientY, activeElement.current);
    };

    // 2. Quand la souris entre dans un élément interactif
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, textarea');
      activeElement.current = target;
      
      const mouseX = lastMousePos.current.x !== -100 ? lastMousePos.current.x : e.clientX;
      const mouseY = lastMousePos.current.y !== -100 ? lastMousePos.current.y : e.clientY;
      updateCursor(mouseX, mouseY, target);
    };

    // 3. LA CORRECTION DU BUG : Quand on scroll
    const handleScroll = () => {
      const { x: mouseX, y: mouseY } = lastMousePos.current;
      if (mouseX === -100 && mouseY === -100) return; // Si la souris n'a jamais bougé

      // Le pointeur a 'pointerEvents: none', donc document.elementFromPoint passe au travers 
      // et récupère le VRAI élément situé sous la souris (qui n'a pas bougée physiquement)
      const el = document.elementFromPoint(mouseX, mouseY);
      const target = el?.closest('button, a, input, textarea');

      // Met à jour la référence et recalcule la position en direct !
      activeElement.current = target;
      updateCursor(mouseX, mouseY, target);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    // On ajoute 'passive: true' pour que le scroll reste ultra fluide
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
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