import React, { useEffect } from 'react';
import './Test.css';

// Import de tes images (vérifie bien les chemins)
import arcStandalone from '../assets/Omnisfer/ARC_DD.png';
import arcInArm from '../assets/Omnisfer/ARC_inarm_noBg.PNG';

export default function ArcMotorPage() {
  // S'assure que la page s'ouvre tout en haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="arc-page">
      {/* Background avec le même style que l'accueil */}
      <div className="home-bg-overlay" aria-hidden="true">
        <div className="home-radial" />
        <div className="home-divider" />
      </div>

      <main className="arc-container">
        
        {/* Section Hero : La sphère seule */}
        <section className="arc-hero">
          <div className="arc-hero-content">
            <p className="home-kicker">Omnidirectional Joint</p>
            <h1 className="arc-title">ARC Motor.</h1>
            <p className="arc-subtitle">
              Absolute freedom. 360° continuous rotation engineered for fluidity.
            </p>
          </div>
          
          <div className="arc-hero-visual">
            <div className="arc-glow-massive" />
            <img 
              src={arcStandalone} 
              alt="ARC Motor Standalone" 
              className="arc-floating-image"
            />
          </div>
        </section>

        {/* Section Grille : Caractéristiques (Glassmorphism) */}
        <section className="arc-specs-grid">
          <div className="arc-spec-card">
            <h3>Infinite Motion</h3>
            <p>True 360-degree articulation without mechanical limits or cable binding.</p>
          </div>
          <div className="arc-spec-card">
            <h3>Silent Precision</h3>
            <p>Engineered for +/- 0.02mm accuracy with completely silent operation.</p>
          </div>
          <div className="arc-spec-card">
            <h3>Smart Integration</h3>
            <p>Plug-and-play architecture ready for the next generation of robotics.</p>
          </div>
        </section>

        {/* Section Intégration : La rotule dans le bras */}
        <section className="arc-integration">
          <div className="arc-integration-text">
            <h2>Seamlessly Integrated.</h2>
            <p>
              The ARC motor is designed to disappear into the architecture of your machine. 
              Its compact spherical form factor replaces bulky traditional joints, allowing for 
              sleek, modular robotic arms that move just like human limbs.
            </p>
            <div className="arc-actions">
              <button className="home-btn home-btn-solid">Order ARC Motor</button>
              <button className="home-btn home-btn-outline">Download Datasheet</button>
            </div>
          </div>
          
          <div className="arc-integration-visual">
            <div className="arc-glow-subtle" />
            <img 
              src={arcInArm} 
              alt="ARC Motor inside robotic arm" 
              className="arc-arm-image"
            />
          </div>
        </section>

      </main>
    </div>
  );
}