import React from 'react';
import './CV.css';
import Barre from './Barre'
import C from './assets/C.png'
import CPP from './assets/CPP.png'
import Python from './assets/Python.png'
import Haskell from './assets/Haskell.png'
import HTML from './assets/Html.png'
import CSS from './assets/CSS.png'
import JavaScript from './assets/JavaScript.png'
import ReactLogo from './assets/React.png'
import MySQL from './assets/MySQL.png'
import Access from './assets/Access.png'
import SQLServer from './assets/SQLServer.png'
import Unreal from './assets/Unreal.png'
import Capcut from './assets/CapCut.png'
import CVTheo from './assets/CVTheotimeCollier.png'
import PDF from './assets/CVTheotimeCollier.pdf'


const CV = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = PDF;
      link.download = 'CV_Theotime_Collier.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <div className='CV'>
        <div className='CVText'>
        <p className='CVTitre' id="competence">Compétences</p>
        <p className='CVPara'>Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.</p>
    </div>
    <div className='Langage'>
        <p className='TitreLogo'>Langage</p>
        <Barre width="550px" height="2px" />
        <div className='logo'>
            <img src={C} alt="PPTheotime" className="logoImage"/>
            <img src={CPP} alt="PPTheotime" className="logoImage"/>
            <img src={Python} alt="PPTheotime" className="logoImage"/>
            <img src={Haskell} alt="PPTheotime" className="Haskell"/>
        </div>
        <p className='TitreLogo'>Web</p>
        <Barre width="550px" height="2px" />
        <div className='logo'>
            <img src={HTML} alt="PPTheotime" className="logoImage"/>
            <img src={CSS} alt="PPTheotime" className="CSS"/>
            <img src={JavaScript} alt="PPTheotime" className="JavaScript"/>
            <img src={ReactLogo} alt="PPTheotime" className="ReactLogo"/>
        </div>
        <p className='TitreLogo'> SQL</p>
        <Barre width="550px" height="2px" />
        <div className='logo'>
            <img src={MySQL} alt="PPTheotime" className="MySQL"/>
            <img src={Access} alt="PPTheotime" className="Access"/>
            <img src={SQLServer} alt="PPTheotime" className="SQLServer"/>
        </div>
    </div>
    <div className="langageBase">
        <div className="element1">
            <p className="TitreLogo">Jeux vidéo</p>
            <Barre width="200px" height="2px" />
            <img src={Unreal} alt="PPTheotime" className="Unreal" />
        </div>
        <div className="element2">
            <p className="TitreLogo">Montage Vidéo</p>
            <Barre width="200px" height="2px" />
            <img src={Capcut} alt="PPTheotime" className="logoImage" />
        </div>
    </div>
    <div className='CVAndButton'>
        <img src={CVTheo} alt="PPTheotime" className="CVTheotime"/>
        <button onClick={handleDownload} className='ButtonCV'>Télecharger CV</button>
    </div>
</div>
  );
};

export default CV;
