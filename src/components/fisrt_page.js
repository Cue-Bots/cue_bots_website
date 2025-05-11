import React, { useRef, useEffect } from 'react';
import kneecap from './assets/kneecap.png';
import './first_page.css';


const FirstPage = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;

      btn.style.setProperty('--x', `${x}px`);
      btn.style.setProperty('--y', `${y}px`);
    };

    btn.addEventListener('mousemove', handleMouseMove);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='FirstPage'>
      <img src={kneecap} alt="kneecap" className="kneeimg" />
      <div className='PageBody'>
        <p className='Name'>spherical kneecap</p>
        <p className='Description'>First omnidirectionnal articulation</p>
        <p className='Precision'>on the word</p>
        <button ref={buttonRef} className='StylButton'>LEARN MORE</button>
      </div>
    </div>
  );
};

export default FirstPage;
