import React from 'react';
import './Contact.css';
/*
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/AlternateEmail';
*/

const Contact = () => {
  return (
    <footer className='Contact'>
      {/* <div className='logo_info'>
        <a href="https://www.linkedin.com/company/cue-bot" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="mailto:lucasfontana@cue-bots.com" target="_blank" rel="noopener noreferrer" className="Mail-link">
          <MailIcon fontSize="large" />
        </a>
      </div> */}

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p className='footer-slogan'>we engineer innovation.</p>
        <div className="footer-links">
          <div>
            <h4>Products</h4>
            <p>Spherical Joint</p>
            <p>Hexapod Kit</p>
            <p>Rotative Base</p>
          </div>
          <div>
            <h4>Technologies</h4>
            <p>Actuators</p>
            <p>AI Systems</p>
            <p>Embedded Vision</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
        <p className="copyright">© 2025 CUE BOTS — All rights reserved. | Nancy, France</p>
      </div>
    </footer>
  );
};

export default Contact;
