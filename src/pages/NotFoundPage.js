import React from 'react';
// import logo from '../assets/Omnisfer/Omnisfer_logo.png';
import HomeNavbar from '../components/Common/HomeNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './NotFoundPage.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
        <HomeNavbar />
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="notfound-content">
            <div className="error-code-wrapper">
                <span className="error-code">404</span>
            </div>
            <h1>Page not found.</h1>
            <p>The page you are trying to reach seems to have strayed from the flight plan or does not exist in our system.</p>
            <div className="action-box">
                <a href="/" className="home-btn"><FontAwesomeIcon icon={faArrowLeft} /> Return to Home </a>
            </div>
        </div>
    </div>
  );
};

export default NotFound;