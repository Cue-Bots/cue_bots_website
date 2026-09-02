import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './OmnisferHomePage.css';

import LoadingLogo from '../components/assets/Omnisfer/FaviconOmnisfer.png'; // Assurez-vous que le chemin est correct

import CustomCursor from '../components/CustomCursor'; // Ajuste le chemin
import HomeNavbar from '../components/OmnisferHome/HomeNavbar';
import HomeHero from '../components/OmnisferHome/HomeHero';
import HomeAbout from '../components/OmnisferHome/HomeAbout';
import HomeStats from '../components/OmnisferHome/HomeStats';
import HomeTechnology from '../components/OmnisferHome/HomeTechnology';
import HomeProducts from '../components/OmnisferHome/HomeProducts';
import HomeVision from '../components/OmnisferHome/HomeVision';
import HomeContact from '../components/OmnisferHome/HomeContact';
import HomeFooter from '../components/OmnisferHome/HomeFooter';

// Composant utilitaire pour animer les sections au scroll
const ScrollSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] // Courbe "premium" (départ rapide, fin très douce)
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifie si tout est déjà chargé
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 800); // Petit délai pour laisser l'animation du logo se faire
    } else {
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 800);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="loading-screen"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.img 
              src={LoadingLogo}
              alt="Chargement Omnisfer"
              className="loading-logo"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="home-page">
        <div className="home-bg-overlay" aria-hidden="true">
          <div className="home-radial" />
          <div className="home-divider" />
        </div>

        <HomeNavbar />
        <main>
          <ScrollSection><HomeHero /></ScrollSection>
          <ScrollSection><HomeVision /></ScrollSection>
          <ScrollSection><HomeTechnology /></ScrollSection>
          <ScrollSection><HomeStats /></ScrollSection>
          <ScrollSection><HomeAbout /></ScrollSection>
          <ScrollSection><HomeProducts /></ScrollSection>
          <ScrollSection><HomeContact /></ScrollSection>
        </main>
        <HomeFooter />
      </div>
    </>
  );
}