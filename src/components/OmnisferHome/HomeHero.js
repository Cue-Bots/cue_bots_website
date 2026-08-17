// import './homescreenHero.css';
// import kneecap from '../assets/kneecap.png';

// export default function homescreenHero() {
//   return (
//     <section className="homescreen-hero">
//       <div className="homescreen-container homescreen-hero-grid">
//         <div>
//           <p className="homescreen-kicker">Engineered Motion</p>

//           <h1 className="homescreen-title">
//             Where motion
//             <br />
//             becomes
//             <br />
//             natural.
//           </h1>

//           <p className="homescreen-lead">
//             Cue Bot develops advanced robotic systems and ultra-precise 360 degree
//             articulations engineered for the next generation of intelligent
//             machines.
//           </p>

//           <div className="homescreen-hero-actions">
//             <button className="homescreen-btn homescreen-btn-solid" type="button">
//               Discover Technology
//             </button>
//             <button className="homescreen-btn homescreen-btn-outline" type="button">
//               View Products
//             </button>
//           </div>
//         </div>

//         <div className="homescreen-hero-card-wrap">
//           <div className="homescreen-hero-glow" />

//           <img src={kneecap} alt="Kneecap" className="homescreen-hero-image" />

          
//         </div>
//       </div>
//     </section>
//   );
// }



import './HomeHero.css';
import kneecap from '../assets/arm_bot.png';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

const logoContext = require.context('../assets/carrousel', false, /\.(png|jpe?g|svg|webp)$/i);

const logoEntries = logoContext.keys().sort().map((logoPath) => ({
  src: logoContext(logoPath),
  alt: logoPath.replace(/^\.\//, '').replace(/\.[^.]+$/, ''),
}));

function HomeHeroCarousel() {
  const carouselRef = useRef(null);
  const groupRef = useRef(null);
  const [groupWidth, setGroupWidth] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      setGroupWidth(groupRef.current?.getBoundingClientRect().width ?? 0);
      setCarouselWidth(carouselRef.current?.getBoundingClientRect().width ?? 0);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    if (groupRef.current) {
      resizeObserver.observe(groupRef.current);
    }

    window.addEventListener('resize', measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const repeatCount = useMemo(() => {
    if (!groupWidth || !carouselWidth) {
      return 2;
    }

    return Math.max(3, Math.ceil(carouselWidth / groupWidth) + 2);
  }, [carouselWidth, groupWidth]);

  const durationSeconds = useMemo(() => {
    if (!groupWidth) {
      return 24;
    }

    return Math.max(18, groupWidth / 28);
  }, [groupWidth]);

  return (
    <div className="homehero-carousel" ref={carouselRef}>
      <div
        className="homehero-carousel-track"
        style={{
          '--homehero-carousel-shift': `${groupWidth}px`,
          '--homehero-carousel-duration': `${durationSeconds}s`,
          opacity: groupWidth ? 1 : 0,
        }}
      >
        {Array.from({ length: repeatCount }).map((_, groupIndex) => (
          <div
            className="homehero-carousel-group"
            key={`homehero-carousel-group-${groupIndex}`}
            ref={groupIndex === 0 ? groupRef : undefined}
            aria-hidden={groupIndex > 0}
          >
            {logoEntries.map((logo) => (
              <img key={`${groupIndex}-${logo.alt}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="homehero-section">
      <div className="homehero-container homehero-grid">
        <div className="homehero-copy">
          <p className="homehero-kicker">Engineered Motion</p>

          <h1 className="homehero-title">
            MOTION.
            <br />
            &nbsp;&nbsp;&nbsp;REFINED.
          </h1>

          <p className="homehero-lead">
            Omnisfer develops advanced robotic systems and ultra-precise 360 degree
            articulations engineered for the next generation of intelligent
            machines.
          </p>

          <div className="homehero-actions">
            <button className="homehero-btn homehero-btn-primary" type="button">
              Discover Technology
            </button>
            <button className="homehero-btn homehero-btn-secondary" type="button">
              View Products
            </button>
          </div>
        </div>
      </div>

      <HomeHeroCarousel />
    </section>
  );
}
