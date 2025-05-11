import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/logoblack.png';
import bglogo from './assets/bglogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './nav_bar.css';

const NavBar = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const menuRef = useRef();
  const langRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const menuRight = menuRef.current?.getBoundingClientRect().right || 0;
      const langLeft = langRef.current?.getBoundingClientRect().left || 0;
      const space = langLeft - menuRight;

      setHideMenu(space < 50);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // call once at mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='NavBar'>
      <div className='top-bar'></div>
    
      <div className="LogoContainer">
        <img src={bglogo} alt="bglogo" className="NavBarbgImg" />
        <img src={logo} alt="logo" className="NavBarImg" />
      </div>

      <div className='NavbarForm'>
        <ul className={`NavbarText ${hideMenu ? 'is-hidden' : ''}`} ref={menuRef}>
          <li><a href="#acceuil">Products &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronDown} /></a></li>
          <li><a href="#profil">Application &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronDown} /></a></li>
          <li><a href="#competence">Technologie &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronDown} /></a></li>
          <li><a href="#portefolio">Socials &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronDown} /></a></li>
          <li><a href="#contact">Contac &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronDown} /></a></li>
        </ul>
        <div className='NavbarLangWrapper' ref={langRef}>
          <ul className='NavbarLang'>
            <a href="#contact">FR</a>
            <a href="#contact">EN</a>
          </ul>
          <div className="MenuToggle"><a href="#menu"><FontAwesomeIcon icon={faBarsStaggered} /></a></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
