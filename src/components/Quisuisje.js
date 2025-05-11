import React from 'react';
import './Quisuisje.css';
import pptheotime from './assets/pptheotime.jpg';

const Quisuisje = () => {
  return (
    <div className="Quisuisje">
      <p className="Titre" id="profil">Propos de moi</p>
      <div className="phototexte">
        <img src={pptheotime} alt="PPTheotime" className="Quisuijephoto"/>
        <p className="ParaText">
          Hello ! Je m’appelle Julien Dahy, développeur Web junior devenu
          Tech Manager. Auparavant, j’ai effectué plusieurs années en tant que
          téléconseiller dans l’expertise technique (Canal+ / Orange) ce qui
          m’a permis d’acquérir de très bonnes compétences telles que
          l’organisation, l’écoute, le conseil ainsi que des qualités
          relationnelles importantes. J’ai profité du retour à mon Alsace
          natale pour effectuer une reconversion professionnelle dans le
          Développement Web, domaine qui m’intéressait depuis de nombreuses
          années. J’ai donc suivi la formation Développeur Intégrateur au sein
          du CCI Campus de Colmar. Suite à l’obtention du Bac+2, j’ai obtenu
          la confiance d’Annei qui m’a embauché en septembre 2020 et chez qui
          je suis devenu Tech Manager en 2022. Je continue donc à travailler
          chaque jour avec envie, motivation et des idées plein la tête.
        </p>
      </div>
    </div>
  );
};

export default Quisuisje;
