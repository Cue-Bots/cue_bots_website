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
    if (mobileMenuOpen) return;

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

  const menuData = [
    {
      name: 'Products',
      subcategories: [
        {
          name: 'Hardware',
          options: [
            { name: 'Robots', href: '#products-hardware-robots' },
            { name: 'Moteurs', href: '#products-hardware-moteurs' }
          ]
        },
        {
          name: 'Software',
          options: [
            { name: 'Logiciel', href: '#products-software-logiciel' },
            { name: 'Applications', href: '#products-software-applications' }
          ]
        }
      ]
    },
    {
      name: 'Applications',
      subcategories: [
        {
          name: 'Usine',
          options: [
            { name: 'Usine1', href: '#applications-usine1' },
            { name: 'Usine2', href: '#applications-usine2' }
          ]
        }
      ]
    },
    {
      name: 'Technologies',
      options: [
        { name: 'AI', href: '#technologies-ai' },
        { name: 'IoT', href: '#technologies-iot' }
      ]
    },
    {
      name: 'Socials',
      options: [
        { name: 'Instagram', href: '#socials-instagram' },
        { name: 'LinkedIn', href: '#socials-linkedin' }
      ]
    }
  ];

  return (
    <div className={`NavBar ${mobileMenuOpen ? 'open' : ''}`}>
      <div className='top-bar'></div>
      <div className="LogoContainer">
        <img src={bglogo} alt="bglogo" className="NavBarbgImg" />
        <a href="/"><img src={logo} alt="logo" className="NavBarImg" /></a>
      </div>

      <div className='NavbarForm'>
        <ul className={`NavbarText ${hideMenu ? 'is-hidden' : ''}`} ref={menuRef}>
          {menuData.map((cat) => (
            <li className='dropdown' key={cat.name} onMouseLeave={closeDropdownOnMouseLeave}>
              <a href={`#${cat.name}`} onClick={(e) => { e.preventDefault(); toggleDropdown(cat.name); }}>
                {cat.name} <FontAwesomeIcon icon={faChevronDown} />
              </a>
              {openDropdown === cat.name && (
                <div className='dropdown-menu'>
                  {/* Sous-catégories */}
                  {cat.subcategories ? cat.subcategories.map(sub => (
                    <div key={sub.name}>
                      <div style={{fontWeight:'bold',marginTop:'5px', color:'#d2d2d2'}}>{sub.name}</div>
                      {sub.options.map(opt => (
                        <a key={opt.name} href={opt.href}>{opt.name}</a>
                      ))}
                    </div>
                  )) : null}
                  {/* Options directes */}
                  {cat.options ? cat.options.map(opt => (
                    <a key={opt.name} href={opt.href}>{opt.name}</a>
                  )) : null}
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
          {menuData.map((cat) => (
            <li key={cat.name}>
              <div className="mobile-dropdown-toggle" onClick={() => toggleMobileDropdown(cat.name)}>
                <span>{cat.name}</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              {openMobileDropdown === cat.name && (
                <ul className="dropdown-menu">
                  {/* Sous-catégories */}
                  {cat.subcategories ? cat.subcategories.map(sub => (
                    <li key={sub.name}>
                      <div style={{fontWeight:'bold',marginTop:'5px'}}>{sub.name}</div>
                      {sub.options.map(opt => (
                        <a key={opt.name} href={opt.href}>{opt.name}</a>
                      ))}
                    </li>
                  )) : null}
                  {/* Options directes */}
                  {cat.options ? cat.options.map(opt => (
                    <li key={opt.name}><a href={opt.href}>{opt.name}</a></li>
                  )) : null}
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