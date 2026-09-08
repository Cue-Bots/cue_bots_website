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
        {/* Effets de lueur en arrière-plan */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>

        <div className="notfound-content">


            {/* Code d'erreur géant & Badge */}
            <div className="error-code-wrapper">
            <span className="error-code">404</span>
            <div className="error-badge">
                <FontAwesomeIcon icon={faTriangleExclamation} /> Lost Trajectory
            </div>
            </div>

            {/* Titre & Description */}
            <h1>Page not found.</h1>
            <p>
            The page you are trying to reach seems to have strayed from the flight plan or does not exist in our system.
            </p>

            {/* Bouton de retour */}
            <div className="action-box">
            <a href="/" className="home-btn">
                <FontAwesomeIcon icon={faArrowLeft} /> Return to Home
            </a>
            </div>
        </div>
    </div>
  );
};

export default NotFound;