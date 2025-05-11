import React from 'react';
import './ElemPorteFolio.css';

const Elem = ({Titre, lienIMG, LienProjet}) => {
  return (
    <div className='Elem'>
      <img src={lienIMG} alt="ElemIMG" className="ElemIMG"/>
      <p>{Titre}</p>
    </div>
  );
};

export default Elem;