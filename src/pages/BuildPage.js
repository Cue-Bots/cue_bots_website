
// export default function HomeProducts() {
//   return (
//     <p>site in construction</p>
//   );
// }


import React, { useState } from 'react';
// import logo from '../assets/Omnisfer/Omnisfer_logo.png';

import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import XIcon from '@mui/icons-material/X';

import './BuildPage.css';

const Construction = () => {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubmitted(true);
//     }
//   };

  return (
    <div className="construction-container">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>

      <div className="construction-content">
        <div className="construction-logo">
          {/* <img src={logo} alt="Omnisfer Logo" /> */}
        </div>

        <div className="badge-container">
          <span className="badge">
            <EmailTwoToneIcon className="badge-icon" /> Upcoming Launch
          </span>
        </div>

        <h1 className="homehero-title">
            MOTION.
            <br />
            &nbsp;&nbsp;&nbsp;REFINED.
          </h1>

          <p className="homehero-lead">
            Omnisfer develops advanced robotic systems and ultra-precise 360 degree
            articulations engineered for the next generation of intelligent
            machines.
          </p>

        {/* <div className="newsletter-box">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="input-group">
                <EmailTwoToneIcon className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter your professional email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Notify me</button>
            </form>
          ) : (
            <div className="success-message">
              <p>Thank you! You will be notified as soon as it launches.</p>
            </div>
          )}
        </div> */}

        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <XIcon />
          </a> */}
        </div>
      </div>

      {/* Footer minimaliste */}
      <div className="construction-footer">
        <p>&copy; {new Date().getFullYear()} Omnisfer Robotics. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Construction;