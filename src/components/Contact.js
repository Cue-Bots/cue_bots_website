import React from 'react';
import backContact from './assets/Contact.jpg';
import './Contact.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contact = () => {
    return (
        <div className='Contact'>
            <p className='titreContact'>Contactez-moi</p>
            <div className='info'>
                <div className='info-item'>
                    <MailOutlineIcon />
                    <p>theotime.collier@epitech.eu</p>
                </div>
                <div className='info-item'>
                    <PhoneIcon />
                    <p>07 66 22 05 42</p>
                </div>
                <div className='info-item'>
                    <HomeIcon />
                    <p>54000 NANCY</p>
                </div>
            </div>
            <div className='logo_info'>
            <a 
                href="https://www.linkedin.com/in/theotime-collier-7887962a3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-link"
            >
                <LinkedInIcon fontSize="large" />
            </a>
            <a 
                href="=https://www.github.com/TheotimeCollier" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
            >
                <GitHubIcon fontSize="large" />
            </a>
            </div>
            <p className='copyright'>© Copyright 2025 - Theotime COLLIER. Tous droits réservés.</p>
        </div>
    );
};

export default Contact;
