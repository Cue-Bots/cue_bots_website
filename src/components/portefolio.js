import React from 'react';
import './ElemPorteFolio.css'
import Elem from './ElemPorteFolio';
import './Portefolio.css';

const Portefolio = () => {
  return (
    <div className='Portefolio'>
      <p className='Titre'>Portefolio</p>
      <p className='paragraphe'>Ci-dessous, quelques exemples de réalisations effectuées durant la formation, le stage et plus encore :</p>
      <div className='center'>
        <div className='Ligne_1'>
          <Elem Titre={"RPG EN C"} lienIMG={process.env.PUBLIC_URL + 'pptheotime.jpg'}></Elem>
          <Elem Titre={"Site de Comparaison de tableaux de garantie"} lienIMG={process.env.PUBLIC_URL + 'pptheotime.jpg'}></Elem>
          <Elem Titre={"Site Gestion de la logistique et des équipes"} lienIMG={process.env.PUBLIC_URL + 'pptheotime.jpg'}></Elem>
        </div>
      </div>
    </div>
  );
};

export default Portefolio;