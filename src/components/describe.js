import React from 'react';
import './describe.css';
import logoplace from './assets/Ologo.png';

const Describe = () => {
  return (
    <div className="describe">
      <p className="Titre" id="profil">What’s Cue Bots?</p>
      <div className="phototexte">
        <img src={logoplace} alt="Cue Bots logo" className="logoplace"/>
        <p className="ParaText">
          Cue Bots is a forward-thinking robotics company aiming to reinvent modular robotics by designing innovative components — starting with our flagship: the 360° spherical articulation.  
          <br /><br />
          Designed to merge precision, fluidity, and adaptability, our articulation allows robots to move more like living organisms. Cue Bots is not just building robots — we’re creating foundational tools for labs, companies, and makers to shape the next generation of intelligent motion.  
          <br /><br />
          We collaborate with research institutions, universities, and industrial actors to accelerate robotic innovation, always with a focus on openness, performance, and integration flexibility.
        </p>
      </div>
    </div>
  );
};

export default Describe;
