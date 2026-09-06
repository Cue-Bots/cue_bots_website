// import './HomeFooter.css';
// import { LinkedIn, Instagram, Email } from '@mui/icons-material';

// export default function HomeFooter() {
//   return (
//     <footer className="home-footer">
//       <div className="home-container home-footer-inner">
//         <p>Copyright 2026 Cue Bot. Engineered Motion.</p>
//         <nav className="home-footer-links" aria-label="Social links">
//           <a href="#contact" title="LinkedIn"><LinkedIn sx={{ fontSize: 20 }} /></a>
//           <a href="#contact" title="Instagram"><Instagram sx={{ fontSize: 20 }} /></a>
//           <a href="#contact" title="Contact"><Email sx={{ fontSize: 20 }} /></a>
//         </nav>
//       </div>
//     </footer>
//   );
// }

import React, { useState, useEffect } from 'react';
import './HomeFooter.css';
// On importe uniquement les icônes d'interface de Lucide
// import { Moon, Send, Sun } from 'lucide-react';
// import { NearMeTwoToneIcon, LightModeTwoToneIcon , DarkModeTwoToneIcon } from '@mui/icons-material';
import NearMeTwoToneIcon from '@mui/icons-material/NearMeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// --- Icônes des réseaux sociaux en SVG pur ---

const TikTokIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

export default function HomeFooter() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <footer className="omn-footer">
      <div className="omn-footer-container">
        
        {/* Grille Principale */}
        <div className="omn-footer-grid">
          
          {/* Colonne 1 : Newsletter */}
          <div className="omn-footer-col relative">
            <h2 className="omn-footer-title-large">Stay Connected</h2>
            <p className="omn-footer-text">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="omn-footer-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="omn-footer-input"
                required
              />
              <button type="submit" className="omn-footer-submit" aria-label="Subscribe">
                <NearMeTwoToneIcon size={16} />
              </button>
            </form>
            <div className="omn-footer-glow" />
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="omn-footer-col">
            <h3 className="omn-footer-title">Quick Links</h3>
            <nav className="omn-footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="omn-footer-col">
              <h3 className="omn-footer-title">Contact Us</h3>
              <address className="omn-footer-address">
                <p>5 Rue Jacques Villermaux,</p>
                <p>Nancy, 54000 - France</p>
                {/* <p>Phone: (+33) 0 00 00 00 00</p> */}
                <p>Email: <a href="mailto:lucas.fontana@omnisfer-robotics.com">lucas.fontana@omnisfer-robotics.com</a></p>
              </address>
          </div>

          {/* Colonne 4 : Réseaux & Thème */}
          <div className="omn-footer-col">
            <h3 className="omn-footer-title">Follow Us</h3>
            <div className="omn-footer-social">

              <div className="omn-tooltip-wrapper">
                <a href="#facebook" className="omn-social-btn" aria-label="Facebook">
                  <TikTokIcon size={18} />
                </a>
                <span className="omn-tooltip">Follow us on Tik Tok</span>
              </div>

              <div className="omn-tooltip-wrapper">
                <a href="#twitter" className="omn-social-btn" aria-label="Twitter">
                  <XIcon size={18} />
                </a>
                <span className="omn-tooltip">Follow us on X (Twitter)</span>
              </div>

              <div className="omn-tooltip-wrapper">
                <a href="#instagram" className="omn-social-btn" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <span className="omn-tooltip">Follow us on Instagram</span>
              </div>

              <div className="omn-tooltip-wrapper">
                <a href="#linkedin" className="omn-social-btn" aria-label="LinkedIn">
                  <LinkedInIcon size={18} />
                </a>
                <span className="omn-tooltip">Connect on LinkedIn</span>
              </div>

            </div>

            {/* Switch Dark Mode */}
            <div className="omn-theme-switch-wrapper">
              <LightModeTwoToneIcon size={16} />
              <label className="omn-switch" htmlFor="dark-mode-toggle">
                <input
                  type="checkbox"
                  id="dark-mode-toggle"
                  checked={isDarkMode}
                  onChange={(e) => setIsDarkMode(e.target.checked)}
                />
                <span className="omn-slider"></span>
              </label>
              <DarkModeTwoToneIcon size={16} />
            </div>
          </div>
        </div>

        {/* Barre du bas (Copyright) */}
        <div className="omn-footer-bottom">
          <p>© {new Date().getFullYear()} Omnisfer Robotics. All rights reserved.</p>
          <nav className="omn-footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Settings</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}