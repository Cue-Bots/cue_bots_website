import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/Omnisfer/Omnisfer_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import './HomeNavbar.css';

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

  const menuData = [
    {
      name: 'Vision',
      href: '/vision'
    },
    {
      name: 'Products',
      subcategories: [
        {
          name: 'Hardware',
          options: [
            { name: 'Robots', href: '/bots' },
            { name: 'ARC Motors', href: '/arc' }
          ]
        },
        {
          name: 'Software',
          options: [
            { name: 'MIA', href: '/mia' },
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
      name: 'Applications',
      options: [
        { name: 'Industry 4.0 / Factories', href: '/Factories' },
        { name: 'Autonomous Logistics', href: '/autonomous-logistics' },
        { name: 'Research & R&D', href: '/research-and-development' }
      ]
    },
    {
      name: 'Compagny',
      options: [
        { name: 'About Us', href: '/about' },
        { name: 'News', href: '/news' },
        { name: 'Press', href: '/press' },
        { name: 'Newletters', href: '/newletters' },
      ]
    },
    {
      name: 'Contact us',
      href: '#contact'
    }
  ];

  return (
    <div className={`NavBar ${mobileMenuOpen ? 'open' : ''}`}>
      <div className='top-bar'></div>
      <div className="LogoContainer">
        <a href="/"><img src={logo} alt="logo" className="NavBarImg" /></a>
      </div>

      <div className='NavbarForm'>
        <ul className={`NavbarText ${hideMenu ? 'is-hidden' : ''}`} ref={menuRef}>
          {menuData.map((cat) => (
            cat.href ? (
              <li key={cat.name}>
                <a href={cat.href} style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{cat.name}</a>
              </li>
            ) : (
              <li className='dropdown' key={cat.name} onMouseLeave={closeDropdownOnMouseLeave}>
                <a href={`#${cat.name}`} onClick={(e) => { e.preventDefault(); toggleDropdown(cat.name); }}>
                  {cat.name} <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {openDropdown === cat.name && (
                  <div className='dropdown-menu'>
                    {cat.subcategories ? cat.subcategories.map(sub => (
                      <div key={sub.name}>
                        <div style={{fontWeight:'bold',marginTop:'5px', color: dropdownDark ? '#d2d2d2' : '#232526'}}>{sub.name}</div>
                        {sub.options.map(opt => (
                          <a key={opt.name} href={opt.href} style={{color: dropdownDark ? '#fff' : '#232526'}}>{opt.name}</a>
                        ))}
                      </div>
                    )) : null}
                    {cat.options ? cat.options.map(opt => (
                      <a key={opt.name} href={opt.href} style={{color: dropdownDark ? '#fff' : '#232526'}}>{opt.name}</a>
                    )) : null}
                  </div>
                )}
              </li>
            )
          ))}
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
              {cat.href ? (
                <a href={cat.href} style={{color: mobileDropdownDark ? '#fff' : '#232526'}} onClick={toggleMobileMenu}>{cat.name}</a>
              ) : (
                <>
                  <div className="mobile-dropdown-toggle" onClick={() => toggleMobileDropdown(cat.name)}>
                    <span style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{cat.name}</span>
                    <FontAwesomeIcon icon={faChevronDown} style={{color: mobileDropdownDark ? '#fff' : '#232526'}} />
                  </div>
                  {openMobileDropdown === cat.name && (
                    <ul className="dropdown-menu">
                      {cat.subcategories ? cat.subcategories.map(sub => (
                        <li key={sub.name}>
                          <div style={{fontWeight:'bold',marginTop:'5px', color: mobileDropdownDark ? '#d2d2d2' : '#232526'}}>{sub.name}</div>
                          {sub.options.map(opt => (
                            <a key={opt.name} href={opt.href} style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{opt.name}</a>
                          ))}
                        </li>
                      )) : null}
                      {cat.options ? cat.options.map(opt => (
                        <li key={opt.name}><a href={opt.href} style={{color: mobileDropdownDark ? '#fff' : '#232526'}}>{opt.name}</a></li>
                      )) : null}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;