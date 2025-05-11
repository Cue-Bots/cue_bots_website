import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/logoblack.png';
import bglogo from './assets/bglogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import './nav_bar.css';

const NavBar = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [menuIconColor, setMenuIconColor] = useState('white');
  const menuRef = useRef();
  const langRef = useRef();

  useEffect(() => {
    if (mobileMenuOpen) return; // Pas de changement de couleur en mode mobile

    const navLinks = document.querySelectorAll('.NavBar .NavbarText a');
    const navBar = document.querySelector('.NavBar');

    const getSectionUnderNav = () => {
      const navRect = navBar.getBoundingClientRect();
      const centerY = navRect.bottom;
      const section = document.elementFromPoint(window.innerWidth / 2, centerY);
      if (!section) return;

      const lightSection = section.closest('.light-bg');
      const darkSection = section.closest('.dark-bg');

      navLinks.forEach(link => {
        link.style.color = lightSection ? 'black' : darkSection ? 'white' : '';
      });

      setMenuIconColor(lightSection ? 'black' : 'white');
    };

    getSectionUnderNav();
    window.addEventListener('scroll', getSectionUnderNav);
    window.addEventListener('resize', getSectionUnderNav);

    return () => {
      window.removeEventListener('scroll', getSectionUnderNav);
      window.removeEventListener('resize', getSectionUnderNav);
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (item) => {
    setOpenDropdown(prev => (prev === item ? null : item));
  };

  const toggleMobileDropdown = (item) => {
    setOpenMobileDropdown(prev => (prev === item ? null : item));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setOpenMobileDropdown(null);
  };

  const closeDropdownOnMouseLeave = () => {
    setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  return (
    <div className={`NavBar ${mobileMenuOpen ? 'open' : ''}`}>
      <div className='top-bar'></div>
      <div className="LogoContainer">
        <img src={bglogo} alt="bglogo" className="NavBarbgImg" />
        <a href="/"><img src={logo} alt="logo" className="NavBarImg" /></a>
      </div>

      <div className='NavbarForm'>
        <ul className={`NavbarText ${hideMenu ? 'is-hidden' : ''}`} ref={menuRef}>
          {['Products', 'Applications', 'Technologies', 'Socials'].map((item) => (
            <li className='dropdown' key={item} onMouseLeave={closeDropdownOnMouseLeave}>
              <a href={`#${item}`} onClick={(e) => { e.preventDefault(); toggleDropdown(item); }}>
                {item} <FontAwesomeIcon icon={faChevronDown} />
              </a>
              {openDropdown === item && (
                <div className='dropdown-menu'>
                  <a href={`#${item}-1`}>{item} Option 1</a>
                  <a href={`#${item}-2`}>{item} Option 2</a>
                </div>
              )}
            </li>
          ))}
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>

        <div className='NavbarLangWrapper' ref={langRef}>
          <ul className='NavbarLang'>
            <a href="#contact">FR</a>
            <a href="#contact">EN</a>
          </ul>
          <div className="MenuToggle" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBarsStaggered} style={{ color: menuIconColor }} />
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'slide-in' : 'slide-out'}`}>
      <div className="mobile-menu-close" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
        <ul>
          {['Products', 'Applications', 'Technologies', 'Socials'].map((item) => (
            <li key={item}>
              <div className="mobile-dropdown-toggle" onClick={() => toggleMobileDropdown(item)}>
                <span>{item}</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              {openMobileDropdown === item && (
                <ul className="dropdown-menu">
                  <li><a href={`#${item}-1`}>{item} Option 1</a></li>
                  <li><a href={`#${item}-2`}>{item} Option 2</a></li>
                </ul>
              )}
            </li>
          ))}
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;