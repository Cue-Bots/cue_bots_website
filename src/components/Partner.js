import React from 'react';
import './Partner.css';
import logogni from './assets/logo-gni.png';
import logopeel from './assets/logo-peel.png';
import logounivlorraine from './assets/logo-univ-lorraine.png';

const renderPartner = (img, link) => (
  <a href={link} className="partner-bubble" target="_blank" rel="noopener noreferrer">
    <img src={img} alt="partner" />
  </a>
);

const Partner = () => {
  return (
    <section className="PartnerSection">
      <h1 className="PartnerTitle" id="profil">Partners</h1>
      <div className="PartnerContainer">
        {renderPartner(logogni, 'https://www.grandnancyinnovation.fr/')}
        {renderPartner(logopeel, 'https://peel.univ-lorraine.fr/')}
        {renderPartner(logounivlorraine, 'https://www.univ-lorraine.fr/')}
      </div>
    </section>
  );
};

export default Partner;
