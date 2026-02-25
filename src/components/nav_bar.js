import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/logoblack.png';
import bglogo from './assets/bglogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import './nav_bar.css';

const NavBar = () => {
  const [hideMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [menuIconColor, setMenuIconColor] = useState('white');
  const [dropdownDark, setDropdownDark] = useState(true);
  const [mobileDropdownDark, setMobileDropdownDark] = useState(true);
  const menuRef = useRef();
  const langRef = useRef();

  useEffect(() => {
    const navLinks = document.querySelectorAll('.NavBar .NavbarText a');
    const navLang = document.querySelectorAll('.NavbarLangWrapper a');
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

      navLang.forEach(link => {
        link.style.color = lightSection ? 'black' : darkSection ? 'white' : '';
      });

      setMenuIconColor(lightSection ? 'black' : 'white');
      setDropdownDark(!lightSection);
      setMobileDropdownDark(!lightSection);
    };

    getSectionUnderNav();
    window.addEventListener('scroll', getSectionUnderNav);
    window.addEventListener('resize', getSectionUnderNav);

    return () => {
      window.removeEventListener('scroll', getSectionUnderNav);
      window.removeEventListener('resize', getSectionUnderNav);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

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
  const closeTimerRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimerRef.current = null;
    }, 300);
  };

  const menuData = [
    {
      name: 'Products',
      subcategories: [
        {
          name: 'Hardware',
          options: [
            { name: 'Robots', href: '#products-hardware-robots' },
            { name: 'motors', href: '#products-hardware-motors' }
          ]
        },
        {
          name: 'Software',
          options: [
            { name: 'Logiciel', href: '#products-software-logiciel' },
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
        { name: 'LinkedIn', href: '#socials-linkedin' },
        { name: 'Instagram', href: '#socials-instagram' }
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
                <li className={`dropdown ${openDropdown === cat.name ? 'open' : ''}`} key={cat.name} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <span className="nav-bubble" aria-hidden="true"></span>
                  <a
                    href={`#${cat.name}`}
                    className={`nav-link ${openDropdown === cat.name ? 'active' : ''}`}
                    aria-expanded={openDropdown === cat.name}
                    onClick={(e) => { e.preventDefault(); toggleDropdown(cat.name); }}
                  >
                    {cat.name} <FontAwesomeIcon icon={faChevronDown} />
                  </a>

                  <div className={`dropdown-menu ${openDropdown === cat.name ? 'visible' : 'hidden'}`}>
                    {/* Sous-catégories */}
                    {cat.subcategories ? cat.subcategories.map(sub => (
                      <div key={sub.name} className="dropdown-column">
                        <div className="subcategory-title" style={{color: dropdownDark ? '#d2d2d2' : '#232526'}}>{sub.name}</div>
                        {sub.options.map(opt => (
                          <a key={opt.name} className="dropdown-link" href={opt.href} style={{color: dropdownDark ? '#fff' : '#232526'}}>{opt.name}</a>
                        ))}
                      </div>
                    )) : null}
                    {cat.options ? cat.options.map(opt => (
                      <a key={opt.name} className="dropdown-link" href={opt.href} style={{color: dropdownDark ? '#fff' : '#232526'}}>{opt.name}</a>
                    )) : null}
                  </div>
            </li>
          ))}
          <li><a href="#about" style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>About us</a></li>
          <li><a href="#contact" style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>Contact us</a></li>
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
                <span style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{cat.name}</span>
                <FontAwesomeIcon icon={faChevronDown} style={{color: mobileDropdownDark ? '#fff' : '#232526'}} />
              </div>
              <ul className={`dropdown-menu ${openMobileDropdown === cat.name ? 'visible' : 'hidden'}`}>
                {/* Sous-catégories */}
                {cat.subcategories ? cat.subcategories.map(sub => (
                  <li key={sub.name} className="dropdown-column">
                    <div className="subcategory-title" style={{color: mobileDropdownDark ? '#d2d2d2' : '#232526'}}>{sub.name}</div>
                    {sub.options.map(opt => (
                      <a key={opt.name} className="dropdown-link" href={opt.href} style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{opt.name}</a>
                    ))}
                  </li>
                )) : null}
                {/* Options directes */}
                {cat.options ? cat.options.map(opt => (
                  <li key={opt.name}><a className="dropdown-link" href={opt.href} style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{opt.name}</a></li>
                )) : null}
              </ul>
            </li>
          ))}
          <li><a href="#about" style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>About us</a></li>
          <li><a href="#contact" style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>Contact us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;